// 知识库数据注入脚本
const fs = require('fs').promises;
const path = require('path');

// 示例知识库数据 - 儿童性教育相关内容
const knowledgeBase = [
  {
    id: 'kb_001',
    title: '什么是青春期？',
    content: '青春期是儿童发育为成年人的过渡时期，通常发生在10-19岁。这个阶段身体会发生很多变化，包括身高增长、性器官发育、出现第二性征等。',
    category: 'puberty',
    tags: ['发育', '成长', '身体变化'],
    language: 'zh-CN',
    source: '儿童性教育基础',
    createdAt: '2024-01-15'
  },
  {
    id: 'kb_002',
    title: '月经是什么？',
    content: '月经是女性子宫内膜周期性脱落引起的出血现象，是女性生殖系统健康的标志。正常月经周期为21-35天，持续3-7天。',
    category: 'puberty',
    tags: ['女性健康', '生理期', '月经周期'],
    language: 'zh-CN',
    source: '女性健康指南',
    createdAt: '2024-01-16'
  },
  {
    id: 'kb_003',
    title: '避孕方法有哪些？',
    content: '常见避孕方法包括：1. 避孕套（预防性病）2. 口服避孕药 3. 宫内节育器 4. 避孕针 5. 皮下埋植。建议咨询医生选择适合自己的方法。',
    category: 'contraception',
    tags: ['避孕', '安全性行为', '健康'],
    language: 'zh-CN',
    source: '避孕知识手册',
    createdAt: '2024-01-17'
  },
  {
    id: 'kb_004',
    title: '如何保护自己？',
    content: '1. 了解身体隐私部位 2. 学会说"不" 3. 不单独与陌生人相处 4. 遇到不舒服的情况告诉信任的成年人 5. 记住紧急联系电话。',
    category: 'safety',
    tags: ['自我保护', '安全', '儿童保护'],
    language: 'zh-CN',
    source: '儿童安全教育',
    createdAt: '2024-01-18'
  },
  {
    id: 'kb_005',
    title: '性别认同是什么？',
    content: '性别认同是指个人对自己性别的内心感受。可能与出生时的生理性别相同（顺性别），也可能不同（跨性别）。每个人的性别认同都值得尊重。',
    category: 'gender',
    tags: ['性别认同', '多样性', '尊重'],
    language: 'zh-CN',
    source: '性别教育材料',
    createdAt: '2024-01-19'
  },
  {
    id: 'kb_006',
    title: '健康的情感关系',
    content: '健康的关系应该：1. 相互尊重 2. 良好沟通 3. 彼此信任 4. 保持个人空间 5. 平等对待。如果感到不舒服或被控制，要及时寻求帮助。',
    category: 'relationships',
    tags: ['情感关系', '沟通', '尊重'],
    language: 'zh-CN',
    source: '情感教育',
    createdAt: '2024-01-20'
  },
  {
    id: 'kb_007',
    title: '堕胎的基本知识',
    content: '堕胎应在正规医疗机构进行。中国相关法律法规对堕胎有明确规定，需要遵守医疗规范和法律规定。术后需要注意休息和健康复查。',
    category: 'abortion',
    tags: ['医疗', '法律', '健康'],
    language: 'zh-CN',
    source: '医疗健康指南',
    createdAt: '2024-01-21'
  }
];

async function ingestKnowledge() {
  try {
    // 创建数据目录
    const dataDir = path.join(__dirname, '../data');
    await fs.mkdir(dataDir, { recursive: true });
    
    // 保存知识库数据
    const knowledgeFile = path.join(dataDir, 'knowledge_base.json');
    await fs.writeFile(knowledgeFile, JSON.stringify(knowledgeBase, null, 2));
    
    // 创建向量数据库需要的格式
    const vectorData = knowledgeBase.map(doc => ({
      id: doc.id,
      content: doc.content,
      metadata: {
        title: doc.title,
        category: doc.category,
        tags: doc.tags,
        source: doc.source,
        language: doc.language
      }
    }));
    
    const vectorFile = path.join(dataDir, 'vector_data.json');
    await fs.writeFile(vectorFile, JSON.stringify(vectorData, null, 2));
    
    console.log('✅ 知识库数据注入完成！');
    console.log(`📊 共注入 ${knowledgeBase.length} 条知识`);
    console.log(`📁 数据保存在: ${dataDir}/`);
    console.log('📝 知识分类:');
    
    const categories = {};
    knowledgeBase.forEach(doc => {
      categories[doc.category] = (categories[doc.category] || 0) + 1;
    });
    
    Object.entries(categories).forEach(([cat, count]) => {
      console.log(`   • ${cat}: ${count} 条`);
    });
    
  } catch (error) {
    console.error('❌ 数据注入失败:', error);
  }
}

// 运行注入
ingestKnowledge();