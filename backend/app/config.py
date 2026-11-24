from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="../.env", env_file_encoding="utf-8", extra="ignore")

    database_url: str = "postgresql+psycopg://cerato_demo:choose-a-local-password@127.0.0.1:5432/cerato_demo"
    jwt_secret: str = "local-only-change-me-before-deploying-cerato-demo"
    jwt_expire_minutes: int = 480
    cookie_secure: bool = False
    cookie_domain: str | None = None
    frontend_origin: str = "http://localhost:3000"
    app_public_url: str = "http://localhost:3000"
    app_env: str = "development"
    smtp_host: str | None = None
    smtp_port: int = 587
    smtp_username: str | None = None
    smtp_password: str | None = None
    smtp_from: str = "andria@ceratosystems.com"


@lru_cache
def get_settings() -> Settings:
    return Settings()


settings = get_settings()

if settings.app_env == "production":
    if settings.jwt_secret == "local-only-change-me-before-deploying-cerato-demo":
        raise RuntimeError("Set a unique JWT_SECRET before running Cerato Demo 1 in production.")
    if not settings.cookie_secure:
        raise RuntimeError("Set COOKIE_SECURE=true before running Cerato Demo 1 in production.")
