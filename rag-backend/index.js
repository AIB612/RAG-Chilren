const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
require('dotenv').config();

const RAGCore = require('./src/rag-core');

const app = express();
const PORT = process.env.PORT || 3000;

// 初始化RAG核心
const ragCore = new RAGCore();
let isRAGReady = false;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// 初始化函数
async function initializeRAG() {
  try {
    console.log('🔄 正在初始化RAG系统...');
    
    // 初始化向量数据库
    const initSuccess = await ragCore.initialize();
    if (!initSuccess) {
      console.log('⚠️ 使用模拟模式（无向量数据库）');
      isRAGReady = true;
      return;
    }
    
    // 检查是否有数据，如果没有则注入
    const dataPath = path.join(__dirname, 'data', 'vector_data.json');
    try {
      const data = await fs.readFile(dataPath, 'utf8');
      const documents = JSON.parse(data);
      
      console.log(`📥 正在注入 ${documents.length} 条知识...`);
      for (const doc of documents) {
        await ragCore.addDocument(doc);
      }
      console.log('✅ 知识库注入完成！');
    } catch (error) {
      console.log('📝 没有找到知识库数据，使用内置示例');
      // 可以在这里添加一些示例数据
    }
    
    isRAGReady = true;
    console.log('✅ RAG系统初始化完成！');
  } catch (error) {
    console.error('❌ RAG系统初始化失败:', error);
    isRAGReady = false;
  }
}

// 健康检查
app.get('/health', (req, res) => {
  res.json({ 
    status: isRAGReady ? 'healthy' : 'initializing',
    service: '儿童性教育RAG后端',
    version: '1.0.0',
    rag_ready: isRAGReady,
    timestamp: new Date().toISOString()
  });
});

// RAG API路由
app.post('/api/ask', async (req, res) => {
  try {
    const { question, userId } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: '请提供问题' });
    }
    
    if (!isRAGReady) {
      return res.status(503).json({ 
        error: 'RAG系统正在初始化，请稍后再试',
        fallback_answer: `系统正在准备中，暂时无法回答你的问题："${question}"。请等待几秒钟后重试。`
      });
    }
    
    // 使用真正的RAG逻辑
    const result = await ragCore.askQuestion(question);
    
    res.json({
      ...result,
      requestId: `req_${Date.now()}`,
      userId: userId || 'anonymous'
    });
    
  } catch (error) {
    console.error('API错误:', error);
    
    // 优雅降级：返回模拟回答
    const mockAnswer = `抱歉，系统遇到了一些问题。\n\n关于"${req.body.question}"，我可以告诉你：\n1. 这是一个重要的健康话题\n2. 建议咨询专业医生或信任的成年人\n3. 保护自己的身心健康很重要`;
    
    res.status(500).json({ 
      error: '服务器内部错误',
      fallback_answer: mockAnswer,
      details: error.message 
    });
  }
});

// 知识库管理API
app.get('/api/knowledge/topics', async (req, res) => {
  try {
    const dataPath = path.join(__dirname, 'data', 'knowledge_base.json');
    const data = await fs.readFile(dataPath, 'utf8');
    const knowledgeBase = JSON.parse(data);
    
    // 统计分类
    const categories = {};
    knowledgeBase.forEach(doc => {
      categories[doc.category] = (categories[doc.category] || 0) + 1;
    });
    
    const topics = Object.entries(categories).map(([id, count]) => ({
      id,
      name: this.getCategoryName(id),
      count,
      description: this.getCategoryDescription(id)
    }));
    
    res.json({ 
      topics,
      total_documents: knowledgeBase.length,
      last_updated: new Date().toISOString()
    });
    
  } catch (error) {
    // 返回默认分类
    const defaultTopics = [
      { id: 'abortion', name: '堕胎', count: 15, description: '医疗和法律知识' },
      { id: 'contraception', name: '避孕', count: 23, description: '生育控制和安全性行为' },
      { id: 'puberty', name: '青春期', count: 42, description: '身体发育和心理变化' },
      { id: 'gender', name: '性别认同', count: 18, description: '性别多样性和自我认知' },
      { id: 'relationships', name: '情感关系', count: 31, description: '健康的人际关系' },
      { id: 'health', name: '健康保健', count: 27, description: '生理和心理健康' },
      { id: 'safety', name: '安全保护', count: 12, description: '自我保护和边界意识' }
    ];
    
    res.json({ 
      topics: defaultTopics,
      total_documents: 168,
      note: '使用默认分类数据'
    });
  }
});

// 分类名称映射
app.getCategoryName = function(categoryId) {
  const names = {
    'abortion': '堕胎',
    'contraception': '避孕',
    'puberty': '青春期',
    'gender': '性别认同',
    'relationships': '情感关系',
    'health': '健康保健',
    'safety': '安全保护'
  };
  return names[categoryId] || categoryId;
};

app.getCategoryDescription = function(categoryId) {
  const descriptions = {
    'abortion': '医疗和法律相关知识',
    'contraception': '生育控制和安全性行为',
    'puberty': '身体发育和心理变化',
    'gender': '性别多样性和自我认知',
    'relationships': '健康的人际关系建立',
    'health': '生理和心理健康维护',
    'safety': '自我保护和边界意识'
  };
  return descriptions[categoryId] || '相关知识';
};

// 系统信息
app.get('/api/system/info', (req, res) => {
  res.json({
    service: '儿童性教育RAG助手',
    version: '1.0.0',
    status: isRAGReady ? 'ready' : 'initializing',
    features: [
      '智能问答',
      '知识库检索',
      'AI生成回答',
      '多分类知识',
      'RESTful API'
    ],
    endpoints: {
      health: '/health',
      ask: '/api/ask (POST)',
      topics: '/api/knowledge/topics',
      system_info: '/api/system/info'
    },
    timestamp: new Date().toISOString()
  });
});

// 启动服务器
async function startServer() {
  // 先初始化RAG系统
  await initializeRAG();
  
  app.listen(PORT, () => {
    console.log(`🚀 RAG后端服务运行在 http://localhost:${PORT}`);
    console.log(`📚 健康检查: http://localhost:${PORT}/health`);
    console.log(`❓ 提问API: POST http://localhost:${PORT}/api/ask`);
    console.log(`📖 知识库API: GET http://localhost:${PORT}/api/knowledge/topics`);
    console.log(`ℹ️  系统信息: http://localhost:${PORT}/api/system/info`);
    console.log(`🔧 RAG状态: ${isRAGReady ? '✅ 就绪' : '❌ 未就绪'}`);
  });
}

startServer();