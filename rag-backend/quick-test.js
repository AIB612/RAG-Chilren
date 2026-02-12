// 快速测试
const http = require('http');

function testAPI(question) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ question });
    
    const options = {
      hostname: 'localhost',
      port: 3001,
      path: '/api/ask',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': data.length
      }
    };
    
    const req = http.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          const result = JSON.parse(responseData);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function runTests() {
  console.log('🚀 快速测试简化版RAG后端\n');
  
  const tests = [
    '什么是青春期？',
    '怎么避孕？',
    '如何保护自己？',
    '性别认同是什么？'
  ];
  
  for (const question of tests) {
    console.log(`🤔 提问: "${question}"`);
    
    try {
      const result = await testAPI(question);
      console.log(`✅ 成功获取回答`);
      console.log(`📝 回答摘要: ${result.answer.substring(0, 80)}...`);
      console.log(`📎 来源数量: ${result.sources.length}`);
      
      if (result.sources.length > 0) {
        console.log(`🔍 最相关: ${result.sources[0].title} (${result.sources[0].relevance})`);
      }
      
      console.log();
    } catch (error) {
      console.log(`❌ 测试失败: ${error.message}`);
      console.log();
    }
    
    // 等待一下
    await new Promise(resolve => setTimeout(resolve, 200));
  }
  
  console.log('🎉 测试完成！');
  console.log('\n📊 系统状态:');
  console.log('• 后端运行在 http://localhost:3001');
  console.log('• 健康检查: http://localhost:3001/health');
  console.log('• 无需API密钥，零成本');
  console.log('• 可以直接部署到Render');
}

runTests().catch(console.error);