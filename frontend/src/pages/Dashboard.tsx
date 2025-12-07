import { Card, CardHeader } from '@/components/ui'

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">💰 记账概览</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* 本月支出 */}
          <Card>
            <CardHeader title="本月支出" />
            <p className="text-3xl font-bold text-rose-500">¥0.00</p>
          </Card>

          {/* 本月收入 */}
          <Card>
            <CardHeader title="本月收入" />
            <p className="text-3xl font-bold text-emerald-500">¥0.00</p>
          </Card>

          {/* 预算进度 */}
          <Card>
            <CardHeader title="预算剩余" />
            <p className="text-3xl font-bold text-indigo-600">¥0.00</p>
          </Card>
        </div>

        {/* 占位：图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="h-80">
            <CardHeader title="分类占比" subtitle="本月支出分布" />
            <div className="flex items-center justify-center h-56 text-gray-400">
              📊 图表占位 - ECharts
            </div>
          </Card>

          <Card className="h-80">
            <CardHeader title="月度趋势" subtitle="近 6 个月" />
            <div className="flex items-center justify-center h-56 text-gray-400">
              📈 图表占位 - ECharts
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
