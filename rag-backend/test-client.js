// RAG后端测试客户端
const axios = require('axios');

const API_BASE = 'http://localhost:3000';

async function testRAG() {
  console.log('🧪 开始测试RAG后端系统...\n');
  
  try {
    // 1. 测试健康检查
    console.log('1. 测试健康检查...');
    const healthRes = await axios.get(`${API_BASE}/health`);
    console.log(`✅ 健康状态: ${healthRes.data.status}`);
    console.log(`🔧 RAG就绪: ${healthRes.data.rag_ready}`);
    console.log();
    
    // 2. 测试系统信息
    console.log('2. 测试系统信息...');
    const infoRes = await axios.get(`${API_BASE}/api/system/info`);
    console.log(`📱 服务名称: ${infoRes.data.service}`);
    console.log(`📦 版本: ${infoRes.data.version}`);
    console.log(`🚦 状态: ${infoRes.data.status}`);
    console.log();
    
    // 3. 测试知识库分类
    console.log('3. 测试知识库分类...');
    const topicsRes = await axios.get(`${API_BASE}/api/knowledge/topics`);
    console.log(`📚 总文档数: ${topicsRes.data.total_documents}`);
    console.log('📊 分类统计:');
    topicsRes.data.topics.forEach(topic => {
      console.log(`   • ${topic.name}: ${topic.count} 条 (${topic.description})`);
    });
    console.log();
    
    // 4. 测试RAG问答
    console.log('4. 测试RAG问答系统...');
    
    const testQuestions = [
      '什么是青春期？',
      '如何避孕？',
      '怎样保护自己？',
      '性别认同是什么？',
      '健康的情感关系是怎样的？'
    ];
    
    for (const question of testQuestions) {
      console.log(`🤔 提问: "${question}"`);
      
      try {
        const askRes = await axios.post(`${API_BASE}/api/ask`, {
          question,
          userId: 'test_user_001'
        });
        
        console.log(`🤖 回答: ${askRes.data.answer.substring(0, 100)}...`);
        console.log(`📎 参考来源: ${askRes.data.sources.length} 个`);
        
        if (askRes.data.sources.length > 0) {
          askRes.data.sources.forEach((source, i) => {
            console.log(`   ${i+1}. ${source.title} (相关性: ${source.relevance})`);
          });
        }
        
        console.log();
      } catch (error) {
        if (error.response) {
          console.log(`❌ 错误: ${error.response.data.error}`);
          if (error.response.data.fallback_answer) {
            console.log(`📝 备用回答: ${error.response.data.fallback_answer}`);
          }
        } else {
          console.log(`❌ 请求失败: ${error.message}`);
        }
        console.log();
      }
      
      // 等待一下，避免请求太快
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    // 5. 性能测试
    console.log('5. 性能测试...');
    const startTime = Date.now();
    
    const perfRes = await axios.post(`${API_BASE}/api/ask`, {
      question: '简单的测试问题',
      userId: 'perf_test'
    });
    
    const endTime = Date.now();
    const duration = endTime - startTime;
    
    console.log(`⏱️  响应时间: ${duration}ms`);
    console.log(`📦 响应大小: ${JSON.stringify(perfRes.data).length} 字节`);
    
    console.log('\n🎉 所有测试完成！');
    
  } catch (error) {
    console.error('❌ 测试失败:', error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('💡 提示: 请先启动RAG后端服务 (npm start)');
    }
  }
}

// 运行测试
testRAG();