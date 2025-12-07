from fastapi import APIRouter

router = APIRouter()


@router.get("/category-breakdown")
async def category_breakdown(month: str | None = None):
    """获取分类支出占比

    Args:
        month: 月份，格式 YYYY-MM，默认当前月
    """
    # TODO: 实现真实的统计逻辑
    return {
        "month": month or "2025-01",
        "data": [
            {"name": "餐饮", "value": 1500, "color": "#f43f5e"},
            {"name": "交通", "value": 500, "color": "#3b82f6"},
            {"name": "购物", "value": 2000, "color": "#10b981"},
            {"name": "娱乐", "value": 800, "color": "#f59e0b"},
        ],
    }


@router.get("/monthly-trend")
async def monthly_trend(year: int | None = None):
    """获取月度趋势

    Args:
        year: 年份，默认当前年
    """
    # TODO: 实现真实的统计逻辑
    return {
        "year": year or 2025,
        "data": [
            {"month": "01", "expense": 5000, "income": 10000},
            {"month": "02", "expense": 4500, "income": 10000},
            {"month": "03", "expense": 6000, "income": 10500},
        ],
    }


@router.get("/budget-status")
async def budget_status(month: str | None = None):
    """获取预算状态

    Args:
        month: 月份，格式 YYYY-MM，默认当前月
    """
    # TODO: 实现真实的统计逻辑
    return {
        "month": month or "2025-01",
        "total_budget": 8000,
        "total_expense": 4800,
        "remaining": 3200,
        "progress": 60,
    }
