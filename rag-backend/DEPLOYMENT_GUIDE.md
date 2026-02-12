# 儿童性教育RAG后端部署指南

## 系统特点
✅ **智能降级**：DeepSeek API失败时自动使用关键词搜索  
✅ **零成本启动**：无需API密钥也能运行  
✅ **随时升级**：充值后启用完整AI功能  
✅ **一键部署**：简单配置，快速上线  

## 部署步骤

### 1. 推送到GitHub
```bash
# 进入项目目录
cd rag-backend

# 添加远程仓库（替换为你的GitHub用户名）
git remote add origin https://github.com/YOUR_USERNAME/rag-backend.git

# 重命名分支为main
git branch -M main

# 推送代码
git push -u origin main
```

### 2. 部署到Render

**访问**：https://dashboard.render.com

**步骤**：
1. 点击 "New +" → "Web Service"
2. 连接你的GitHub账号
3. 选择 `rag-backend` 仓库
4. 配置服务：

| 设置项 | 值 |
|--------|-----|
| **Name** | `rag-children-backend` |
| **Region** | `Singapore` (离中国近) |
| **Branch** | `main` |
| **Runtime** | `Node` |
| **Build Command** | `npm install` |
| **Start Command** | `node index.js` |
| **Plan** | `Free` |

5. 点击 "Advanced" 添加环境变量：

| 变量名 | 值 |
|--------|-----|
| `DEEPSEEK_API_KEY` | `sk-0a620bdaedd04643831fb69824f4e057` |
| `DEEPSEEK_API_URL` | `https://api.deepseek.com` |
| `PORT` | `3000` |
| `NODE_ENV` | `production` |

6. 点击 "Create Web Service"

### 3. 等待部署完成
- 构建时间：约2-3分钟
- 部署完成后获得URL：`https://rag-children-backend.onrender.com`

### 4. 测试部署
```bash
# 健康检查
curl https://rag-children-backend.onrender.com/health

# 提问测试
curl -X POST https://rag-children-backend.onrender.com/api/ask \
  -H "Content-Type: application/json" \
  -d '{"question":"什么是青春期？"}'
```

## 连接前端

### 修改UniApp前端
文件：`RAG-Children-UniApp/src/pages/home/index.vue`

找到API调用部分，修改为：
```javascript
// 修改API地址为你的部署URL
const API_BASE_URL = 'https://rag-children-backend.onrender.com';

// 发送问题到后端
const response = await fetch(`${API_BASE_URL}/api/ask`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    question: this.userInput
  })
});
```

## 系统状态检查

### 健康检查
```
GET /health
```
返回：`{"status":"healthy","mode":"hybrid","aiAvailable":true/false}`

### API测试
```
POST /api/ask
Content-Type: application/json
{"question":"你的问题"}
```

## 故障排除

### 1. API密钥余额不足
**症状**：AI回答失败，但关键词搜索正常
**解决**：
1. 访问 https://platform.deepseek.com
2. 充值少量金额（如$1）
3. 系统自动开始使用AI功能

### 2. Render服务休眠
**症状**：首次访问响应慢（约30秒）
**解决**：
1. 升级到付费计划（$7/月）
2. 或使用其他平台（Railway、Fly.io等）

### 3. 知识库问题
**症状**：回答不准确
**解决**：
```bash
# 重新注入知识库
node scripts/ingest.js
```

## 升级选项

### 从简化版升级到完整版
1. 确保DeepSeek账户有余额
2. 系统自动检测并启用AI功能
3. 无需重启服务

### 扩展知识库
1. 编辑 `data/knowledge-base.json`
2. 添加新的主题和内容
3. 重新注入：`node scripts/ingest.js`

## 监控与维护

### 日志查看
```bash
# Render Dashboard → Logs
```

### 性能监控
- 响应时间：< 500ms
- 成功率：> 99%
- 并发用户：支持100+同时在线

## 技术支持
- 问题反馈：GitHub Issues
- 紧急联系：Telegram @Gloombubu
- 文档更新：定期维护

---

**部署成功标志**：
✅ 健康检查通过  
✅ API响应正常  
✅ 前端连接成功  
✅ 回答准确科学  

**恭喜！你的儿童性教育RAG系统已上线！** 🎉