// 交易记录
export interface Transaction {
  id: number
  amount: number
  type: 'expense' | 'income'
  category_id: number
  category?: Category
  account_id: number
  account?: Account
  description?: string
  transaction_date: string
  created_at: string
}

export interface TransactionCreate {
  amount: number
  type: 'expense' | 'income'
  category_id: number
  account_id: number
  description?: string
  transaction_date: string
}

// 分类
export interface Category {
  id: number
  name: string
  icon?: string
  color?: string
  type: 'expense' | 'income'
  sort_order: number
}

// 账户
export interface Account {
  id: number
  name: string
  type: 'cash' | 'debit' | 'credit' | 'wechat' | 'alipay'
  balance: number
  icon?: string
}

// 预算
export interface Budget {
  id: number
  category_id?: number
  amount: number
  month: string // 格式: 2025-01
}

// API 响应
export interface ApiResponse<T> {
  data: T
  message?: string
}

export interface PaginatedResponse<T> {
  results: T[]
  count: number
  next?: string
  previous?: string
}
