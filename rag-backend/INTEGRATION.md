# RAG后端系统整合说明

## 项目结构

```
RAG-Chilren/                    # 主仓库（Web版本 + 小程序后端）
├── client/                     # Web前端（Vite + React）
├── server/                     # Web后端（Express）
├── rag-backend/                # 🆕 新增：小程序RAG后端
│   ├── index.js               # 完整版服务器（智能降级）
│   ├── index-simple.js        # 简化版服务器（关键词搜索）
│   ├── src/rag-core.js        # RAG核心逻辑
│   ├── scripts/ingest.js      # 知识库注入
│   ├── connect-frontend.sh    # 连接UniApp前端脚本
│   └── README_QUICK_START.md  # 快速启动指南
├── RAG-Children-UniApp/       # UniApp小程序前端（独立目录）
└── README.md                  # 主项目说明
```

## 部署方案

### 方案1：独立部署RAG后端（推荐）
**用途**：专门为小程序提供服务
**URL**：`https://rag-children-backend.onrender.com`

**步骤**：
1. 在Render创建新Web Service
2. 选择 `rag-backend` 目录作为根目录
3. 启动命令：`node index.js`
4. 环境变量：添加DeepSeek API密钥

### 方案2：整合到现有Web服务
**用途**：统一API端点
**URL**：`https://rag-chilren.onrender.com/api/rag`

**步骤**：
1. 修改现有 `server/` 代码
2. 添加 `/api/rag` 路由
3. 调用 `rag-backend` 功能

## 快速启动（5分钟部署）

### 1. 推送到GitHub
```bash
cd /root/.openclaw/workspace/RAG-Chilren
git add rag-backend/
git commit -m "添加RAG后端系统，支持小程序部署"
git push origin main
```

### 2. 部署到Render
1. 访问 https://dashboard.render.com
2. 点击 "New +" → "Web Service"
3. 连接GitHub仓库
4. **关键设置**：
   - **Root Directory**: `rag-backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node index.js`
   - **环境变量**：添加DeepSeek API密钥

### 3. 连接UniApp前端
```bash
cd rag-backend
./connect-frontend.sh
# 输入你的部署URL
```

## 功能对比

| 版本 | 技术栈 | 用途 | 部署URL |
|------|--------|------|---------|
| **Web版本** | React + Vite | 网页版"小白老师" | `https://rag-chilren.onrender.com` |
| **RAG后端** | Node.js + Express | 小程序API服务 | `https://rag-children-backend.onrender.com` |
| **UniApp前端** | Vue 3 + TypeScript | 微信小程序 | 本地开发/真机调试 |

## 数据流

```
微信小程序 (UniApp)
        ↓
[RAG后端 API] (Render部署)
        ↓
智能降级系统
├── DeepSeek API (优先)
└── 关键词搜索 (备用)
        ↓
知识库回答
        ↓
返回小程序
```

## 优势

1. **代码复用**：知识库内容共享
2. **独立部署**：不影响现有Web服务
3. **弹性扩展**：可根据需求单独扩容
4. **成本控制**：RAG后端可单独计费

## 维护说明

### 更新知识库
```bash
cd rag-backend
node scripts/ingest.js
```

### 监控日志
- Render控制台 → Logs
- 查看API调用情况
- 监控错误率

### 备份策略
- GitHub自动备份代码
- 知识库JSON文件版本控制
- 定期导出ChromaDB数据

## 联系支持
- 问题反馈：GitHub Issues
- 紧急联系：Telegram @Gloombubu
- 文档更新：定期维护

---

**🎯 目标**：通过RAG后端系统，为小程序提供专业的儿童性教育AI服务，实现商业化变现（1999元/部署）。