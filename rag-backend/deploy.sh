#!/bin/bash
# RAG后端部署脚本

echo "🚀 儿童性教育RAG后端部署脚本"
echo "======================================"

# 检查Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js未安装，请先安装Node.js"
    exit 1
fi

echo "✅ Node.js版本: $(node --version)"

# 安装依赖
echo "📦 安装依赖..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo "✅ 依赖安装完成"

# 注入知识库
echo "📚 注入知识库数据..."
node scripts/ingest.js

if [ $? -ne 0 ]; then
    echo "⚠️ 知识库注入可能有问题，但继续部署..."
fi

# 测试
echo "🧪 运行简单测试..."
node test-direct.js

echo ""
echo "🎉 本地部署准备完成！"
echo ""
echo "下一步："
echo "1. 推送到GitHub:"
echo "   git remote add origin https://github.com/你的用户名/rag-backend.git"
echo "   git push -u origin main"
echo ""
echo "2. 部署到Render:"
echo "   a. 访问 https://dashboard.render.com"
echo "   b. 点击 'New +' → 'Web Service'"
echo "   c. 连接GitHub仓库"
echo "   d. 配置:"
echo "      - Name: rag-children-backend"
echo "      - Build Command: npm install"
echo "      - Start Command: node index.js"
echo "      - 添加环境变量:"
echo "        DEEPSEEK_API_KEY=你的密钥"
echo "        DEEPSEEK_API_URL=https://api.deepseek.com"
echo ""
echo "3. 测试部署:"
echo "   curl https://你的域名.onrender.com/health"
echo ""
echo "4. 连接前端:"
echo "   修改UniApp的API地址为部署的URL"
echo ""
echo "💡 提示：确保.env文件中的API密钥正确"
echo "======================================"