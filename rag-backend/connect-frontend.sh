#!/bin/bash
# 连接UniApp前端脚本

echo "🔗 连接UniApp前端到RAG后端"
echo "======================================"

# 检查前端项目
FRONTEND_PATH="/root/.openclaw/workspace/RAG-Children-UniApp"
if [ ! -d "$FRONTEND_PATH" ]; then
    echo "❌ 找不到UniApp前端项目"
    echo "💡 请确保项目在: $FRONTEND_PATH"
    exit 1
fi

echo "✅ 找到前端项目: $FRONTEND_PATH"

# 询问后端URL
read -p "🌐 请输入RAG后端URL (例如: https://rag-children-backend.onrender.com): " BACKEND_URL

if [ -z "$BACKEND_URL" ]; then
    BACKEND_URL="https://rag-children-backend.onrender.com"
    echo "💡 使用默认URL: $BACKEND_URL"
fi

# 备份原文件
BACKUP_FILE="$FRONTEND_PATH/src/pages/home/index.vue.backup"
if [ ! -f "$BACKUP_FILE" ]; then
    cp "$FRONTEND_PATH/src/pages/home/index.vue" "$BACKUP_FILE"
    echo "✅ 已创建备份: $BACKUP_FILE"
fi

# 修改前端代码
FRONTEND_FILE="$FRONTEND_PATH/src/pages/home/index.vue"
TEMP_FILE="/tmp/frontend_temp.vue"

# 创建修改后的文件
cat > "$TEMP_FILE" << 'EOF'
<template>
  <view class="home-container">
    <!-- 头部 -->
    <view class="header">
      <image src="/static/logo.png" class="logo" />
      <text class="title">小白老师</text>
      <text class="subtitle">儿童性教育智能助手</text>
    </view>

    <!-- 聊天区域 -->
    <scroll-view class="chat-area" scroll-y="true" :scroll-into-view="scrollToId">
      <view v-for="(msg, index) in messages" :key="index" :id="'msg' + index" 
            :class="['message', msg.type]">
        <view class="avatar">
          <image v-if="msg.type === 'bot'" src="/static/bot-avatar.png" />
          <image v-if="msg.type === 'user'" src="/static/user-avatar.png" />
        </view>
        <view class="bubble">
          <text class="text">{{ msg.content }}</text>
          <text v-if="msg.type === 'bot' && msg.loading" class="loading">...</text>
        </view>
      </view>
    </scroll-view>

    <!-- 输入区域 -->
    <view class="input-area">
      <input class="input" v-model="userInput" placeholder="输入你的问题..." 
             @confirm="sendMessage" :disabled="isLoading" />
      <button class="send-btn" @tap="sendMessage" :disabled="isLoading || !userInput.trim()">
        <text v-if="!isLoading">发送</text>
        <text v-else>思考中...</text>
      </button>
    </view>

    <!-- 快捷问题 -->
    <view class="quick-questions">
      <text class="quick-title">快捷提问：</text>
      <view class="quick-buttons">
        <button v-for="(q, idx) in quickQuestions" :key="idx" 
                class="quick-btn" @tap="askQuickQuestion(q)">
          {{ q }}
        </button>
      </view>
    </view>

    <!-- 知识库入口 -->
    <view class="knowledge-entry">
      <button class="knowledge-btn" @tap="goToKnowledge">
        📚 查看知识库
      </button>
    </view>
  </view>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import { onLoad } from '@dcloudio/uni-app'

// 配置
const API_BASE_URL = '{{BACKEND_URL}}'  // 将自动替换
const MAX_HISTORY = 50

// 响应式数据
const userInput = ref('')
const messages = ref([])
const isLoading = ref(false)
const scrollToId = ref('')

// 快捷问题
const quickQuestions = [
  '什么是青春期？',
  '如何保护自己？',
  '宝宝从哪里来？',
  '身体有哪些隐私部位？',
  '如何拒绝不舒服的接触？'
]

// 页面加载
onLoad(() => {
  // 添加欢迎消息
  addMessage('bot', '你好！我是小白老师 👋 我可以帮助解答关于身体、成长和健康的问题。请问有什么可以帮助你的吗？')
})

// 添加消息
function addMessage(type, content) {
  messages.value.push({
    type,
    content,
    timestamp: new Date().toLocaleTimeString(),
    loading: type === 'bot' && content === '...'
  })
  
  // 滚动到底部
  nextTick(() => {
    if (messages.value.length > 0) {
      scrollToId.value = 'msg' + (messages.value.length - 1)
    }
  })
}

// 发送消息
async function sendMessage() {
  const question = userInput.value.trim()
  if (!question || isLoading.value) return
  
  // 添加用户消息
  addMessage('user', question)
  userInput.value = ''
  
  // 添加机器人思考中
  addMessage('bot', '...')
  isLoading.value = true
  
  try {
    // 调用RAG后端API
    const response = await fetch(`${API_BASE_URL}/api/ask`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: question,
        history: messages.value.slice(-5).map(msg => ({
          role: msg.type === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      })
    })
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }
    
    const data = await response.json()
    
    // 移除思考中的消息
    messages.value.pop()
    
    // 添加AI回答
    addMessage('bot', data.answer || '抱歉，我暂时无法回答这个问题。')
    
  } catch (error) {
    console.error('API调用失败:', error)
    
    // 移除思考中的消息
    messages.value.pop()
    
    // 添加错误消息
    addMessage('bot', `网络连接出现问题。错误：${error.message}`)
    
    // 备用：使用本地关键词匹配
    try {
      const fallbackAnswer = getFallbackAnswer(question)
      addMessage('bot', fallbackAnswer)
    } catch (fallbackError) {
      addMessage('bot', '抱歉，系统暂时无法处理你的问题。请稍后再试。')
    }
    
  } finally {
    isLoading.value = false
  }
}

// 备用回答（关键词匹配）
function getFallbackAnswer(question) {
  const keywords = {
    '青春期': '青春期是儿童向成人过渡的时期，身体和心理都会发生很多变化。',
    '保护': '保护自己很重要：1. 隐私部位不能让别人碰 2. 学会说"不" 3. 告诉信任的成年人',
    '宝宝': '宝宝是精子和卵子结合后，在妈妈子宫里慢慢长大的。',
    '隐私': '隐私部位包括胸部、臀部、生殖器官等，这些地方要特别保护。',
    '拒绝': '如果感到不舒服，要大声说"不"，然后离开并告诉信任的人。'
  }
  
  for (const [key, answer] of Object.entries(keywords)) {
    if (question.includes(key)) {
      return answer
    }
  }
  
  return '关于这个问题，我建议你咨询专业的医生或老师。记得保护好自己的身心健康很重要！'
}

// 快捷提问
function askQuickQuestion(question) {
  userInput.value = question
  sendMessage()
}

// 跳转到知识库
function goToKnowledge() {
  uni.navigateTo({
    url: '/pages/knowledge/index'
  })
}

// 计算属性
const canSend = computed(() => {
  return userInput.value.trim().length > 0 && !isLoading.value
})
</script>

<style lang="scss">
.home-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 20rpx;
}

.header {
  text-align: center;
  padding: 40rpx 0;
  background: white;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.1);
  
  .logo {
    width: 120rpx;
    height: 120rpx;
    margin-bottom: 20rpx;
  }
  
  .title {
    display: block;
    font-size: 48rpx;
    font-weight: bold;
    color: #4a6fa5;
    margin-bottom: 10rpx;
  }
  
  .subtitle {
    display: block;
    font-size: 28rpx;
    color: #888;
  }
}

.chat-area {
  flex: 1;
  padding: 20rpx;
  background: white;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
}

.message {
  display: flex;
  margin-bottom: 30rpx;
  animation: fadeIn 0.3s ease;
  
  &.user {
    flex-direction: row-reverse;
    
    .avatar {
      margin-left: 20rpx;
      margin-right: 0;
    }
    
    .bubble {
      background: #4a6fa5;
      color: white;
      border-radius: 30rpx 30rpx 0 30rpx;
    }
  }
  
  &.bot {
    .bubble {
      background: #f0f4f8;
      color: #333;
      border-radius: 30rpx 30rpx 30rpx 0;
    }
  }
  
  .avatar {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20rpx;
    
    image {
      width: 100%;
      height: 100%;
    }
  }
  
  .bubble {
    max-width: 500rpx;
    padding: 20rpx 30rpx;
    position: relative;
    
    .text {
      font-size: 32rpx;
      line-height: 1.5;
    }
    
    .loading {
      display: inline-block;
      animation: blink 1.5s infinite;
    }
  }
}

.input-area {
  display: flex;
  padding: 20rpx;
  background: white;
  border-radius: 20rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.1);
  
  .input {
    flex: 1;
    height: 80rpx;
    padding: 0 30rpx;
    background: #f5f7fa;
    border-radius: 40rpx;
    font-size: 32rpx;
    margin-right: 20rpx;
  }
  
  .send-btn {
    width: 160rpx;
    height: 80rpx;
    line-height: 80rpx;
    background: #4a6fa5;
    color: white;
    border-radius: 40rpx;
    font-size: 32rpx;
    
    &:disabled {
      background: #ccc;
      opacity: 0.6;
    }
  }
}

.quick-questions {
  background: white;
  border-radius: 20rpx;
  padding: 30rpx;
  margin-bottom: 20rpx;
  box-shadow: 0 4rpx 12rpx rgba(0,0,0,0.05);
  
  .quick-title {
    display: block;
    font-size: 32rpx;
    color: #666;
    margin-bottom: 20rpx;
  }
  
  .quick-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 20rpx;
  }
  
  .quick-btn {
    padding: 15rpx 30rpx;
    background: #f0f4f8;
    color: #4a6fa5;
    border-radius: 40rpx;
    font-size: 28rpx;
    border: none;
    
    &:active {
      background: #e1e8f0;
    }
  }
}

.knowledge-entry {
  text-align: center;
  
  .knowledge-btn {
    width: 100%;
    height: 100rpx;
    line-height: 100rpx;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 50rpx;
    font-size: 36rpx;
    box-shadow: 0 8rpx 25rpx rgba(102, 126, 234, 0.3);
    
    &:active {
      transform: translateY(2rpx);
    }
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20rpx); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
EOF

# 替换后端URL
sed -i "s|{{BACKEND_URL}}|$BACKEND_URL|g" "$TEMP_FILE"

# 复制回原位置
cp "$TEMP_FILE" "$FRONTEND_FILE"

echo ""
echo "✅ 前端代码修改完成！"
echo "📁 文件: $FRONTEND_FILE"
echo "🌐 后端URL: $BACKEND_URL"
echo ""
echo "🔍 修改内容检查："
echo "--------------------------------------"
grep -n "API_BASE_URL" "$FRONTEND_FILE"
echo "--------------------------------------"
echo ""
echo "🚀 下一步："
echo "1. 在HBuilderX中重新运行UniApp项目"
echo "2. 测试聊天功能"
echo "3. 如果遇到问题，恢复备份："
echo "   cp $BACKUP_FILE $FRONTEND_FILE"
echo ""
echo "🎉 前端连接完成！"