# 儿童性教育RAG后端系统

基于检索增强生成(RAG)的儿童性教育AI助手后端系统。

## 功能特性

- ✅ 智能问答：基于知识库的准确回答
- ✅ 向量搜索：语义理解用户问题
- ✅ 知识管理：可扩展的知识库系统
- ✅ API接口：RESTful API设计
- ✅ 多平台支持：Web、小程序、App

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 配置环境变量
复制 `.env.example` 为 `.env` 并填写：
```bash
cp .env.example .env
# 编辑 .env 文件，添加你的API密钥
```

### 3. 注入知识库数据
```bash
npm run ingest
```

### 4. 启动服务
```bash
npm start
# 或开发模式
npm run dev
```

## API接口

### 健康检查
```
GET /health
```

### 智能问答
```
POST /api/ask
Content-Type: application/json

{
  "question": "什么是青春期？",
  "userId": "optional_user_id"
}
```

响应：
```json
{
  "answer": "青春期是儿童发育为成年人的过渡时期...",
  "sources": [
    {"title": "儿童性教育基础", "relevance": 0.95}
  ],
  "timestamp": "2024-01-01T00:00:00Z"
}
```

### 知识库管理
```
GET /api/knowledge/topics
```

## 项目结构
```
rag-backend/
├── index.js              # 主服务器文件
├── package.json         # 依赖配置
├── .env                 # 环境变量
├── scripts/
│   └── ingest.js       # 知识库注入脚本
├── data/               # 知识库数据
├── src/               # 源代码目录（后续扩展）
│   ├── rag/           # RAG核心逻辑
│   ├── database/      # 数据库操作
│   └── utils/         # 工具函数
└── public/            # 静态文件
```

## 技术栈
- **后端框架**: Node.js + Express
- **向量数据库**: ChromaDB
- **AI模型**: OpenAI API / DeepSeek
- **部署**: Render / Vercel

## 开发计划

### 阶段1：基础RAG（当前）
- [x] 基础服务器框架
- [x] 知识库数据准备
- [ ] 向量数据库集成
- [ ] AI模型集成
- [ ] 基础问答API

### 阶段2：功能增强
- [ ] 用户会话管理
- [ ] 知识库管理界面
- [ ] 回答质量评估
- [ ] 多语言支持

### 阶段3：商业化
- [ ] 用户账户系统
- [ ] 付费套餐
- [ ] 数据分析面板
- [ ] 机构管理后台

## 部署指南

### Render部署
1. 推送代码到GitHub
2. 在Render创建Web Service
3. 连接GitHub仓库
4. 设置环境变量
5. 部署完成

### 本地测试
```bash
# 安装依赖
npm install

# 注入知识库
npm run ingest

# 启动服务
npm start

# 访问 http://localhost:3000/health
```

## 贡献指南
1. Fork项目
2. 创建功能分支
3. 提交更改
4. 发起Pull Request

## 许可证
MIT License