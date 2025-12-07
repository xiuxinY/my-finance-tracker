-- Finance Tracker 数据库初始化脚本
-- 此脚本在 MySQL 容器首次启动时自动执行

-- 确保使用正确的字符集
ALTER DATABASE finance_tracker CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- 授予用户权限
GRANT ALL PRIVILEGES ON finance_tracker.* TO 'finance_user'@'%';
FLUSH PRIVILEGES;

-- 表结构将在 Issue #3 中通过 SQLAlchemy 迁移创建

