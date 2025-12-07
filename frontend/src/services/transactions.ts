import { api } from './api'
import type { Transaction, TransactionCreate, PaginatedResponse } from '@/types'

export const transactionService = {
  // 获取交易列表
  getAll: (params?: { month?: string; type?: string; page?: number }) =>
    api.get<PaginatedResponse<Transaction>>('/transactions/', { params }),

  // 获取单个交易
  getById: (id: number) => api.get<Transaction>(`/transactions/${id}/`),

  // 创建交易
  create: (data: TransactionCreate) => api.post<Transaction>('/transactions/', data),

  // 更新交易
  update: (id: number, data: Partial<TransactionCreate>) =>
    api.put<Transaction>(`/transactions/${id}/`, data),

  // 删除交易
  delete: (id: number) => api.delete(`/transactions/${id}/`),
}
