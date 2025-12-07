/**
 * 格式化金额
 */
export function formatCurrency(amount: number, currency = 'CNY'): string {
  return new Intl.NumberFormat('zh-CN', {
    style: 'currency',
    currency,
  }).format(amount)
}

/**
 * 格式化日期
 */
export function formatDate(
  date: string | Date,
  format: 'full' | 'short' | 'month' = 'short'
): string {
  const d = typeof date === 'string' ? new Date(date) : date

  const options: Intl.DateTimeFormatOptions = {
    full: { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' },
    short: { year: 'numeric', month: '2-digit', day: '2-digit' },
    month: { year: 'numeric', month: 'long' },
  }[format]

  return new Intl.DateTimeFormat('zh-CN', options).format(d)
}

/**
 * 获取当前月份字符串 (YYYY-MM)
 */
export function getCurrentMonth(): string {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  return `${year}-${month}`
}
