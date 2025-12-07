from typing import List

from pydantic_settings import BaseSettings


class Settings(BaseSettings):
    """应用配置"""

    # 应用
    APP_NAME: str = "Finance Tracker API"
    APP_VERSION: str = "0.1.0"
    DEBUG: bool = True

    # 数据库
    DATABASE_URL: str = (
        "mysql+aiomysql://finance_user:finance_password@localhost:3306/finance_tracker"
    )

    # JWT
    JWT_SECRET_KEY: str = "your-super-secret-key-change-in-production"
    JWT_ALGORITHM: str = "HS256"
    JWT_ACCESS_TOKEN_EXPIRE_MINUTES: int = 60

    # CORS
    CORS_ORIGINS: List[str] = ["http://localhost:5173", "http://localhost:3000"]

    class Config:
        env_file = ".env"
        case_sensitive = True
        extra = "ignore"  # 忽略 .env 中的额外字段


settings = Settings()
