// RAG核心逻辑
const { ChromaClient } = require('chromadb');
const OpenAI = require('openai');

class RAGCore {
  constructor() {
    // 初始化ChromaDB客户端
    this.chromaClient = new ChromaClient({
      path: process.env.CHROMA_DB_PATH || './chroma_db'
    });
    
    // 初始化AI客户端（优先使用DeepSeek）
    const apiKey = process.env.DEEPSEEK_API_KEY || process.env.OPENAI_API_KEY;
    const baseURL = process.env.DEEPSEEK_API_URL || 'https://api.openai.com/v1';
    
    if (!apiKey) {
      console.warn('⚠️ 没有找到API密钥，将使用模拟模式');
      this.openai = null;
    } else {
      this.openai = new OpenAI({
        apiKey: apiKey,
        baseURL: baseURL
      });
      console.log(`✅ 使用AI服务: ${baseURL.includes('deepseek') ? 'DeepSeek' : 'OpenAI'}`);
    }
    
    this.collectionName = 'children_sex_education';
    this.collection = null;
    this.useRealAI = !!apiKey;
  }
  
  // 初始化向量数据库
  async initialize() {
    try {
      console.log('🔄 初始化向量数据库...');
      
      // 检查集合是否存在
      const collections = await this.chromaClient.listCollections();
      const exists = collections.some(c => c.name === this.collectionName);
      
      if (exists) {
        this.collection = await this.chromaClient.getCollection({ name: this.collectionName });
        console.log(`✅ 加载现有集合: ${this.collectionName}`);
      } else {
        this.collection = await this.chromaClient.createCollection({
          name: this.collectionName,
          metadata: { 
            description: '儿童性教育知识库',
            language: 'zh-CN',
            version: '1.0.0'
          }
        });
        console.log(`✅ 创建新集合: ${this.collectionName}`);
      }
      
      return true;
    } catch (error) {
      console.error('❌ 初始化向量数据库失败:', error);
      return false;
    }
  }
  
  // 生成文本向量
  async embedText(text) {
    try {
      if (!this.openai) {
        // 没有API密钥，使用简单向量
        return this.simpleEmbedding(text);
      }
      
      // 尝试使用DeepSeek的embedding（如果支持）
      try {
        const response = await this.openai.embeddings.create({
          model: 'text-embedding-ada-002',
          input: text,
          encoding_format: 'float'
        });
        
        return response.data[0].embedding;
      } catch (embedError) {
        console.log('⚠️ Embedding API失败，使用简单向量:', embedError.message);
        return this.simpleEmbedding(text);
      }
      
    } catch (error) {
      console.error('❌ 生成向量失败:', error);
      return this.simpleEmbedding(text);
    }
  }
  
  // 简单向量生成（备用方案）
  simpleEmbedding(text) {
    // 这是一个简化的向量生成，仅用于测试
    const words = text.toLowerCase().split(/\s+/);
    const vector = new Array(128).fill(0);
    
    words.forEach(word => {
      const hash = this.hashString(word);
      const index = hash % 128;
      vector[index] += 1;
    });
    
    // 归一化
    const norm = Math.sqrt(vector.reduce((sum, val) => sum + val * val, 0));
    return norm > 0 ? vector.map(val => val / norm) : vector;
  }
  
  hashString(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = ((hash << 5) - hash) + str.charCodeAt(i);
      hash |= 0;
    }
    return Math.abs(hash);
  }
  
  // 添加文档到知识库
  async addDocument(document) {
    try {
      const { id, content, metadata } = document;
      
      // 生成内容向量
      const embedding = await this.embedText(content);
      
      // 添加到集合
      await this.collection.add({
        ids: [id],
        embeddings: [embedding],
        metadatas: [metadata],
        documents: [content]
      });
      
      console.log(`✅ 添加文档: ${metadata.title || id}`);
      return true;
    } catch (error) {
      console.error('❌ 添加文档失败:', error);
      return false;
    }
  }
  
  // 搜索相关文档
  async search(query, limit = 3) {
    try {
      // 生成查询向量
      const queryEmbedding = await this.embedText(query);
      
      // 在向量数据库搜索
      const results = await this.collection.query({
        queryEmbeddings: [queryEmbedding],
        nResults: limit
      });
      
      // 格式化结果
      const documents = [];
      if (results.ids[0]) {
        for (let i = 0; i < results.ids[0].length; i++) {
          documents.push({
            id: results.ids[0][i],
            content: results.documents[0][i],
            metadata: results.metadatas[0][i],
            distance: results.distances[0][i],
            relevance: 1 - results.distances[0][i] // 转换为相关性分数
          });
        }
      }
      
      return documents;
    } catch (error) {
      console.error('❌ 搜索失败:', error);
      return [];
    }
  }
  
  // 生成AI回答
  async generateAnswer(question, contextDocuments) {
    try {
      // 构建上下文
      const context = contextDocuments.map(doc => 
        `【${doc.metadata.title}】\n${doc.content}`
      ).join('\n\n');
      
      // 系统提示词
      const systemPrompt = `你是一个专业的儿童性教育助手"小白老师"。请基于以下知识库信息，用温暖、科学、易懂的方式回答用户的问题。

知识库信息：
${context}

回答要求：
1. 基于知识库信息，不要编造
2. 用简单易懂的中文回答
3. 语气温暖友好
4. 如果知识库信息不足，可以补充一般性建议
5. 强调安全、健康、尊重
6. 内容要适合中国国情，符合相关法律法规

用户问题：${question}`;
      
      if (!this.openai || !this.useRealAI) {
        // 模拟AI回答
        return this.generateMockAnswer(question, contextDocuments);
      }
      
      // 调用AI生成回答
      const response = await this.openai.chat.completions.create({
        model: process.env.AI_MODEL || 'deepseek-chat',
        messages: [
          { 
            role: 'system', 
            content: systemPrompt 
          },
          { 
            role: 'user', 
            content: question 
          }
        ],
        temperature: 0.7,
        max_tokens: 800,
        stream: false
      });
      
      return response.choices[0].message.content;
    } catch (error) {
      console.error('❌ 生成回答失败:', error);
      return this.generateMockAnswer(question, contextDocuments);
    }
  }
  
  // 生成模拟回答（备用）
  generateMockAnswer(question, contextDocuments) {
    if (contextDocuments.length === 0) {
      return `关于"${question}"，我目前的知识库还没有相关信息。\n\n建议：\n1. 咨询专业医生或老师\n2. 与信任的家长讨论\n3. 查阅正规的健康教育资料\n4. 保护自己的身心健康很重要`;
    }
    
    const mainDoc = contextDocuments[0];
    return `关于"${question}"，根据我的知识库：\n\n${mainDoc.content}\n\n💡 温馨提示：以上信息仅供参考，具体情况请咨询专业人士。记得保护好自己的隐私和安全哦！`;
  }
  
  // 完整的RAG流程
  async askQuestion(question) {
    try {
      console.log(`🤔 用户提问: ${question}`);
      
      // 1. 搜索相关文档
      const relevantDocs = await this.search(question);
      console.log(`🔍 找到 ${relevantDocs.length} 个相关文档`);
      
      // 2. 生成AI回答
      const answer = await this.generateAnswer(question, relevantDocs);
      
      // 3. 返回结果
      return {
        answer,
        sources: relevantDocs.map(doc => ({
          title: doc.metadata.title,
          category: doc.metadata.category,
          relevance: doc.relevance.toFixed(2),
          content: doc.content.substring(0, 100) + '...'
        })),
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      console.error('❌ RAG流程失败:', error);
      throw error;
    }
  }
}

module.exports = RAGCore;