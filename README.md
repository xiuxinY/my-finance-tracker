# my-finance-tracker

> 🎓 **学习项目** — 本项目主要目的是学习和实践全栈开发技术栈

一个基于 **React + Django + FastAPI + MySQL** 的全栈 Web 记账与预算管理应用。

## 🎯 学习目标

通过构建这个实际项目，掌握以下技术能力：

- **前端开发**：React 组件化开发、状态管理、路由、数据可视化
- **后端开发**：Django ORM、DRF RESTful API 设计、FastAPI 异步编程
- **数据库设计**：MySQL 数据建模、关系设计、查询优化
- **工程化实践**：Docker 容器化、Nginx 反向代理、API 网关设计
- **全栈整合**：前后端分离架构、JWT 认证、跨服务通信

## 📋 功能特性

- 消费记录（CRUD）
- 多账户管理
- 分类管理
- 预算设置 / 预算进度展示
- 图表与统计分析
- 管理后台（Django Admin）
- 后续支持：AI 消费预测、消费分类自动识别

---

## 🏗️ 系统架构

```
           ┌───────────────────────┐
           │        React          │
           │   (前端界面 + 图表)    │
           └─────────▲─────────────┘
                     │  HTTP/JSON
                     ▼
     ┌──────────────────────────────────────┐
     │         API Gateway / Nginx          │
     │   /api/core/* → Django               │
     │   /api/analytics/* → FastAPI         │
     └───────────▲──────────────────────────┘
                 │
   ┌─────────────┴─────────────┐
   │          Django           │
   │ CRUD / 权限 / Admin / ORM │
   └─────────────▲─────────────┘
                 │   共用 MySQL
                 ▼
          ┌──────────────┐
          │    MySQL     │
          │ 数据存储 / ORM│
          └──────────────┘

           FastAPI
   ┌──────────────────────────┐
   │ 报表统计 / 聚合查询 / AI │
   │ 月度趋势 / 分类占比      │
   └──────────────────────────┘
```

---

## 🧰 技术栈

### 前端

| 技术 | 版本 | 用途 |
|------|------|------|
| React | 19.x | UI 组件库 |
| React Router | 7.x | 客户端路由 |
| Axios | latest | HTTP 请求 |
| Apache ECharts | 5.x | 数据可视化 |
| Tailwind CSS | 4.x | 原子化 CSS |

> **为什么选 React 19?**
> - Server Components 稳定支持
> - 新 Hooks：`useActionState`、`useOptimistic`
> - Actions 用于处理异步操作和表单提交
> - 更好的性能和开发体验

### 后端 1：Django（CRUD + Admin）

| 技术 | 版本 | 用途 |
|------|------|------|
| Django | 6.0 | Web 框架 |
| Django REST Framework | 3.15+ | RESTful API |
| djangorestframework-simplejwt | latest | JWT 认证 |
| Python | 3.12+ | 运行时 |

> **为什么选 Django 6.0?**
> - 支持 Python 3.12, 3.13, 3.14
> - 更好的异步支持
> - 强大的 Admin 后台

### 后端 2：FastAPI（统计 + 报表）

| 技术 | 版本 | 用途 |
|------|------|------|
| FastAPI | 0.122+ | 异步 API 框架 |
| Uvicorn | latest | ASGI 服务器 |
| Pydantic | 2.x | 数据验证 |
| SQLAlchemy | 2.0+ | ORM / 聚合查询 |

> **为什么选 FastAPI?**
> - 原生异步支持，高性能
> - 自动生成 OpenAPI 文档
> - Pydantic v2 核心用 Rust 重写，性能提升 20x+
> - 适合计算密集型的统计分析

### 数据库

| 技术 | 版本 | 用途 |
|------|------|------|
| MySQL | 8.x | 关系型数据库 |

### DevOps

| 技术 | 用途 |
|------|------|
| Docker / Docker Compose | 容器化部署 |
| Nginx | 反向代理 / API 网关 |
| Pre-commit / Ruff | 代码质量 |

---

## 📂 项目结构

```
my-finance-tracker/
│
├── frontend/                 # React 前端
│   ├── src/
│   │   ├── components/      # UI 组件
│   │   ├── pages/           # 页面组件
│   │   ├── hooks/           # 自定义 Hooks
│   │   ├── services/        # API 调用
│   │   └── utils/           # 工具函数
│   ├── public/
│   └── package.json
│
├── backend-django/           # Django 后端
│   ├── finance_core/        # 核心业务模块
│   │   ├── models.py        # 数据模型
│   │   ├── serializers.py   # DRF 序列化器
│   │   ├── views.py         # 视图
│   │   ├── urls.py          # 路由
│   │   └── admin.py         # Admin 配置
│   ├── config/              # 项目配置
│   │   └── settings.py
│   └── manage.py
│
├── backend-fastapi/          # FastAPI 后端
│   ├── app/
│   │   ├── main.py          # 入口
│   │   ├── routers/         # 路由模块
│   │   │   └── analytics.py
│   │   ├── models/          # SQLAlchemy 模型
│   │   └── deps.py          # 依赖注入
│   └── requirements.txt
│
├── nginx/
│   └── nginx.conf            # 反向代理配置
│
├── docker-compose.yml        # 一键启动
└── README.md
```

---

## 📊 功能模块

### 1. 消费记录（Transaction）

- CRUD 操作
- 字段：`amount`, `category`, `account`, `time`, `remark`, `tags`
- 后端：Django + DRF
- 图表：FastAPI 聚合 + React ECharts 绑图

### 2. 分类管理（Category）

- 分类 CRUD
- 分类颜色、图标、排序
- Django Admin 管理

### 3. 多账户（Account）

- 支持：微信、现金、银行卡、信用卡
- 资产统计

### 4. 预算系统（Budget）

- 月度预算总额
- 分类预算
- 预算进度条 / 超支提醒

### 5. 报表系统（FastAPI）

| 接口 | 说明 |
|------|------|
| `GET /api/analytics/monthly-trend` | 月度趋势 |
| `GET /api/analytics/category-breakdown` | 分类占比 |
| `GET /api/analytics/budget-status` | 预算状态 |

---

## 🔐 认证设计

```
┌──────────┐    登录请求     ┌──────────┐
│  React   │ ──────────────> │  Django  │
│ Frontend │                 │   JWT    │
└──────────┘ <────────────── └──────────┘
                返回 Token
       │
       │ 携带 Authorization: Bearer <token>
       ▼
┌──────────────────────────────────────┐
│         Django / FastAPI             │
│     (共享 JWT 验证密钥)              │
└──────────────────────────────────────┘
```

- 统一使用 Django 完成用户认证
- JWT Token 存储在 localStorage
- 所有 API 请求携带 `Authorization: Bearer` 头
- Django 和 FastAPI 共享 JWT 验证密钥

---

## 🔌 API 设计

### Django CRUD API

```http
GET    /api/core/transactions/
POST   /api/core/transactions/
GET    /api/core/transactions/{id}/
PUT    /api/core/transactions/{id}/
DELETE /api/core/transactions/{id}/

GET    /api/core/categories/
GET    /api/core/accounts/
GET    /api/core/budgets/
```

### FastAPI 报表 API

```http
GET /api/analytics/category-breakdown?month=2025-12
GET /api/analytics/monthly-trend?year=2025
GET /api/analytics/budget-status
```

---

## 🗂️ 学习阶段计划

> 📋 详细任务已创建为 [GitHub Issues](https://github.com/xiuxinY/my-finance-tracker/issues)，每个 Issue 包含代码示例和完成标准。

### 🟢 阶段 1：MVP（最小可行产品）

**目标**：跑通核心流程 | **预计时间**：2-3 周

| # | Issue | 状态 |
|---|-------|------|
| #1 | [📋 阶段总览](https://github.com/xiuxinY/my-finance-tracker/issues/1) | Epic |
| #2 | [📁 项目基础结构搭建](https://github.com/xiuxinY/my-finance-tracker/issues/2) | 待开始 |
| #3 | [🗄️ 数据库设计与建表](https://github.com/xiuxinY/my-finance-tracker/issues/3) | 待开始 |
| #4 | [⚡ FastAPI CRUD API](https://github.com/xiuxinY/my-finance-tracker/issues/4) | 待开始 |
| #5 | [⚛️ React 前端基础页面](https://github.com/xiuxinY/my-finance-tracker/issues/5) | 待开始 |
| #6 | [📊 ECharts 数据可视化](https://github.com/xiuxinY/my-finance-tracker/issues/6) | 待开始 |

**学习重点**：FastAPI 异步编程、React 19 新特性、前后端联调

### 🔵 阶段 2：Django 集成

**目标**：引入管理能力 | **预计时间**：2-3 周

| # | Issue | 状态 |
|---|-------|------|
| #7 | [📋 阶段总览](https://github.com/xiuxinY/my-finance-tracker/issues/7) | Epic |
| #8 | [🐍 Django 项目初始化](https://github.com/xiuxinY/my-finance-tracker/issues/8) | 待开始 |
| #9 | [🔌 Django REST Framework API](https://github.com/xiuxinY/my-finance-tracker/issues/9) | 待开始 |
| #10 | [🔐 JWT 用户认证](https://github.com/xiuxinY/my-finance-tracker/issues/10) | 待开始 |
| #11 | [🛠️ Django Admin 后台](https://github.com/xiuxinY/my-finance-tracker/issues/11) | 待开始 |

**学习重点**：Django ORM、DRF 序列化器、JWT 认证流程

### 🟣 阶段 3：系统集成

**目标**：工程化部署 | **预计时间**：1-2 周

| # | Issue | 状态 |
|---|-------|------|
| #12 | [📋 阶段总览](https://github.com/xiuxinY/my-finance-tracker/issues/12) | Epic |
| #13 | [🐳 Docker 容器化](https://github.com/xiuxinY/my-finance-tracker/issues/13) | 待开始 |
| #14 | [🌐 Nginx 反向代理](https://github.com/xiuxinY/my-finance-tracker/issues/14) | 待开始 |
| #15 | [📦 Docker Compose 全栈部署](https://github.com/xiuxinY/my-finance-tracker/issues/15) | 待开始 |

**学习重点**：Docker 容器化、Nginx 配置、多服务编排

### 🟠 阶段 4：高级功能（可选）

| # | Issue | 说明 |
|---|-------|------|
| #16 | [🚀 高级功能](https://github.com/xiuxinY/my-finance-tracker/issues/16) | AI、PWA、数据导入等 |

**可选挑战**：
- 多账户资产管理
- 消费预测（简单 ML 模型）
- AI 分类推荐
- CSV/Excel 账单导入
- PWA 移动端适配

### 📈 学习路径图

```
#2 → #3 → #4 → #5 → #6   （MVP 完成 ✅）
            ↓
#8 → #9 → #10 → #11      （Django 集成 ✅）
            ↓
#13 → #14 → #15          （部署上线 ✅）
            ↓
#16                       （高级功能 🎯）
```

---

## 🚀 快速开始

### 前置条件

- Node.js 20+
- Python 3.12+
- Docker & Docker Compose
- MySQL 8.x（或使用 Docker）

### 1. 启动 MySQL

```bash
docker-compose up -d mysql
```

### 2. 启动 Django

```bash
cd backend-django
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000
```

### 3. 启动 FastAPI

```bash
cd backend-fastapi
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8001
```

### 4. 启动 React 前端

```bash
cd frontend
npm install
npm run dev
```

### 一键启动（Docker Compose）

```bash
docker-compose up -d
```

访问：
- 前端：http://localhost:3000
- Django API：http://localhost:8000
- FastAPI API：http://localhost:8001
- Django Admin：http://localhost:8000/admin

---

## 📚 学习资源

### 官方文档

- [React 19 文档](https://react.dev/)
- [Django 6.0 文档](https://docs.djangoproject.com/en/6.0/)
- [FastAPI 文档](https://fastapi.tiangolo.com/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Apache ECharts](https://echarts.apache.org/)

### 推荐学习路径

1. **Week 1-2**：React 基础 + Tailwind CSS
2. **Week 3-4**：FastAPI + MySQL + 基础 CRUD
3. **Week 5-6**：Django + DRF + 认证
4. **Week 7-8**：Docker + Nginx + 部署

---

## 📝 License

MIT License

---

## 🧑‍💻 作者

Cody — Digital Project Manager / Data Scientist / AI Engineer

本项目用于个人学习全栈架构、数据分析、API 设计与工程化实践。
