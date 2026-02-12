// 简化版RAG后端（无需API密钥）
const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// 中间件
app.use(cors());
app.use(express.json());

// 加载知识库
let knowledgeBase = [];

async function loadKnowledgeBase() {
  try {
    const dataPath = path.join(__dirname, 'data', 'knowledge_base.json');
    const data = await fs.readFile(dataPath, 'utf8');
    knowledgeBase = JSON.parse(data);
    console.log(`✅ 加载 ${knowledgeBase.length} 条知识`);
  } catch (error) {
    console.log('📝 使用内置知识库');
    knowledgeBase = [
      {
        id: 'kb_001',
        title: '什么是青春期？',
        content: '青春期是儿童发育为成年人的过渡时期，通常发生在10-19岁。身体会发生很多变化，包括身高增长、性器官发育等。',
        category: 'puberty',
        tags: ['发育', '成长']
      },
      {
        id: 'kb_002',
        title: '避孕方法',
        content: '常见避孕方法：避孕套（预防性病）、口服避孕药、宫内节育器等。建议咨询医生选择适合自己的方法。',
        category: 'contraception',
        tags: ['避孕', '安全']
      },
      {
        id: 'kb_003',
        title: '如何保护自己',
        content: '1. 了解身体隐私部位 2. 学会说"不" 3. 不单独与陌生人相处 4. 告诉信任的成年人。',
        category: 'safety',
        tags: ['保护', '安全']
      }
    ];
  }
}

// 简单关键词匹配搜索
function searchKnowledge(question) {
  const keywords = question.toLowerCase().split(/[\s\.,，。]+/);
  const results = [];
  
  knowledgeBase.forEach(doc => {
    let score = 0;
    const content = (doc.title + ' ' + doc.content + ' ' + doc.tags.join(' ')).toLowerCase();
    
    keywords.forEach(keyword => {
      if (keyword.length > 1 && content.includes(keyword)) {
        score += 1;
      }
    });
    
    if (score > 0) {
      results.push({
        ...doc,
        relevance: Math.min(score / keywords.length, 1),
        score
      });
    }
  });
  
  // 按相关性排序
  return results.sort((a, b) => b.score - a.score).slice(0, 3);
}

// 生成模拟AI回答
function generateAnswer(question, relevantDocs) {
  if (relevantDocs.length === 0) {
    return `关于"${question}"，我目前的知识库还没有相关信息。\n\n建议：\n1. 咨询专业医生\n2. 与信任的成年人讨论\n3. 查阅正规的健康教育资料`;
  }
  
  const mainDoc = relevantDocs[0];
  return `关于"${question}"，我可以分享以下信息：\n\n${mainDoc.content}\n\n💡 提示：以上信息仅供参考，具体情况请咨询专业人士。`;
}

// 健康检查
app.get('/health', (req, res) => {
  res.json({ 
    status: 'healthy',
    service: '儿童性教育RAG后端（简化版）',
    version: '1.0.0',
    knowledge_count: knowledgeBase.length,
    timestamp: new Date().toISOString()
  });
});

// 问答API
app.post('/api/ask', async (req, res) => {
  try {
    const { question } = req.body;
    
    if (!question) {
      return res.status(400).json({ error: '请提供问题' });
    }
    
    // 搜索相关知识
    const relevantDocs = searchKnowledge(question);
    
    // 生成回答
    const answer = generateAnswer(question, relevantDocs);
    
    res.json({
      answer,
      sources: relevantDocs.map(doc => ({
        title: doc.title,
        category: doc.category,
        relevance: doc.relevance.toFixed(2),
        tags: doc.tags
      })),
      timestamp: new Date().toISOString(),
      requestId: `req_${Date.now()}`
    });
    
  } catch (error) {
    console.error('API错误:', error);
    res.status(500).json({ 
      error: '服务器内部错误',
      fallback_answer: `抱歉，暂时无法回答你的问题。请稍后重试或咨询专业人士。`
    });
  }
});

// 知识库API
app.get('/api/knowledge/topics', (req, res) => {
  const categories = {};
  knowledgeBase.forEach(doc => {
    categories[doc.category] = (categories[doc.category] || 0) + 1;
  });
  
  const topicNames = {
    'puberty': '青春期',
    'contraception': '避孕',
    'safety': '安全保护',
    'gender': '性别认同',
    'relationships': '情感关系',
    'abortion': '堕胎',
    'health': '健康保健'
  };
  
  const topics = Object.entries(categories).map(([id, count]) => ({
    id,
    name: topicNames[id] || id,
    count,
    description: '相关知识'
  }));
  
  res.json({
    topics,
    total_documents: knowledgeBase.length,
    last_updated: new Date().toISOString()
  });
});

// 启动服务器
async function startServer() {
  await loadKnowledgeBase();
  
  app.listen(PORT, () => {
    console.log(`🚀 简化版RAG后端运行在 http://localhost:${PORT}`);
    console.log(`📚 健康检查: http://localhost:${PORT}/health`);
    console.log(`❓ 提问API: POST http://localhost:${PORT}/api/ask`);
    console.log(`📊 知识库: ${knowledgeBase.length} 条知识`);
    console.log(`💡 提示: 这是简化版，无需API密钥`);
  });
}

startServer();