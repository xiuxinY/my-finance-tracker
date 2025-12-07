import { useState, useEffect, useCallback } from 'react'
import { transactionService } from '@/services/transactions'
import type { Transaction } from '@/types'

interface UseTransactionsOptions {
  month?: string
  type?: 'expense' | 'income'
}

export function useTransactions(options?: UseTransactionsOptions) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchTransactions = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await transactionService.getAll({
        month: options?.month,
        type: options?.type,
      })
      setTransactions(response.data.results)
    } catch (err) {
      setError(err instanceof Error ? err : new Error('获取交易记录失败'))
    } finally {
      setLoading(false)
    }
  }, [options?.month, options?.type])

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return {
    transactions,
    loading,
    error,
    refetch: fetchTransactions,
  }
}
