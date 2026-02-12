// 测试DeepSeek API连接
const OpenAI = require('openai');

async function testDeepSeek() {
  console.log('🔗 测试DeepSeek API连接...\n');
  
  const apiKey = process.env.DEEPSEEK_API_KEY || 'sk-0a620bdaedd04643831fb69824f4e057';
  const baseURL = process.env.DEEPSEEK_API_URL || 'https://api.deepseek.com';
  
  if (!apiKey) {
    console.log('❌ 未找到API密钥');
    return;
  }
  
  console.log(`🔑 API密钥: ${apiKey.substring(0, 10)}...`);
  console.log(`🌐 端点: ${baseURL}`);
  
  try {
    const openai = new OpenAI({
      apiKey: apiKey,
      baseURL: baseURL
    });
    
    // 测试聊天功能
    console.log('\n🤖 测试聊天功能...');
    const chatResponse = await openai.chat.completions.create({
      model: 'deepseek-chat',
      messages: [
        { role: 'system', content: '你是一个友好的助手。' },
        { role: 'user', content: '你好！请简单介绍一下自己。' }
      ],
      max_tokens: 100,
      temperature: 0.7
    });
    
    console.log('✅ 聊天测试成功！');
    console.log(`📝 回复: ${chatResponse.choices[0].message.content}`);
    
    // 测试embedding功能（如果支持）
    console.log('\n🔢 测试Embedding功能...');
    try {
      const embedResponse = await openai.embeddings.create({
        model: 'text-embedding-ada-002',
        input: '测试文本',
        encoding_format: 'float'
      });
      
      console.log('✅ Embedding测试成功！');
      console.log(`📏 向量维度: ${embedResponse.data[0].embedding.length}`);
    } catch (embedError) {
      console.log('⚠️ Embedding可能不支持，使用备用方案');
      console.log(`📝 错误信息: ${embedError.message}`);
    }
    
    console.log('\n🎉 DeepSeek API测试完成！');
    console.log('💡 可以正常使用RAG系统。');
    
  } catch (error) {
    console.log('❌ API测试失败:');
    console.log(`📝 错误: ${error.message}`);
    
    if (error.response) {
      console.log(`📊 状态码: ${error.response.status}`);
      console.log(`📋 响应: ${JSON.stringify(error.response.data)}`);
    }
    
    console.log('\n💡 建议：');
    console.log('1. 检查API密钥是否正确');
    console.log('2. 检查网络连接');
    console.log('3. 确认DeepSeek账户有余额');
  }
}

// 运行测试
testDeepSeek().catch(console.error);