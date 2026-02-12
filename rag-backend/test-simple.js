// 测试简化版RAG后端
const axios = require('axios');

const API_BASE = 'http://localhost:3001';

async function testSimpleRAG() {
  console.log('🧪 测试简化版RAG后端...\n');
  
  const testCases = [
    { question: '什么是青春期？', expected: '青春期' },
    { question: '怎么避孕？', expected: '避孕' },
    { question: '如何保护自己？', expected: '保护' },
    { question: '我不懂的问题', expected: '还没有相关信息' }
  ];
  
  for (const testCase of testCases) {
    console.log(`🤔 测试问题: "${testCase.question}"`);
    
    try {
      const response = await axios.post(`${API_BASE}/api/ask`, {
        question: testCase.question
      });
      
      console.log(`✅ 状态: 成功`);
      console.log(`📝 回答长度: ${response.data.answer.length} 字符`);
      console.log(`📎 来源数量: ${response.data.sources.length}`);
      
      if (response.data.sources.length > 0) {
        console.log(`🔍 最相关来源: ${response.data.sources[0].title}`);
      }
      
      // 检查是否包含预期关键词
      if (response.data.answer.toLowerCase().includes(testCase.expected.toLowerCase())) {
        console.log(`🎯 包含预期关键词: "${testCase.expected}"`);
      }
      
      console.log();
      
    } catch (error) {
      console.log(`❌ 测试失败: ${error.message}`);
      console.log();
    }
    
    // 稍作等待
    await new Promise(resolve => setTimeout(resolve, 300));
  }
  
  // 测试健康检查
  console.log('🏥 测试健康检查...');
  try {
    const health = await axios.get(`${API_BASE}/health`);
    console.log(`✅ 服务状态: ${health.data.status}`);
    console.log(`📊 知识数量: ${health.data.knowledge_count}`);
    console.log();
  } catch (error) {
    console.log(`❌ 健康检查失败: ${error.message}`);
    console.log();
  }
  
  // 测试知识库API
  console.log('📚 测试知识库API...');
  try {
    const topics = await axios.get(`${API_BASE}/api/knowledge/topics`);
    console.log(`✅ 总文档数: ${topics.data.total_documents}`);
    console.log('📊 分类统计:');
    topics.data.topics.forEach(topic => {
      console.log(`   • ${topic.name}: ${topic.count} 条`);
    });
    console.log();
  } catch (error) {
    console.log(`❌ 知识库API失败: ${error.message}`);
    console.log();
  }
  
  console.log('🎉 简化版测试完成！');
  console.log('\n💡 部署建议:');
  console.log('1. 这个简化版可以直接部署到Render');
  console.log('2. 无需API密钥，零成本运行');
  console.log('3. 后续可以升级到完整版（需要API密钥）');
  console.log('4. 知识库可以随时更新');
}

// 运行测试
testSimpleRAG().catch(console.error);