import { vi } from 'vitest'

import type { QueryClient } from '@tanstack/react-query'

// Mock query data helper
export function mockQueryData<TData>(
  queryClient: QueryClient,
  queryKey: ReadonlyArray<unknown>,
  data: TData
) {
  queryClient.setQueryData(queryKey, data)
}

// Create a mock fetch for server functions
export function createMockFetch<TData>(data: TData, options?: { delay?: number }) {
  return vi.fn().mockImplementation(async () => {
    if (options?.delay) {
      await new Promise((resolve) => setTimeout(resolve, options.delay))
    }
    return data
  })
}

// Mock error response
export function createMockErrorFetch(error: Error) {
  return vi.fn().mockRejectedValue(error)
}

// Helper for mocking queryOptions pattern
export function mockQueryOptions<TData>(data: TData) {
  return {
    queryKey: ['mock'] as const,
    queryFn: () => Promise.resolve(data),
  }
}

// Mock mutation handler
export function createMockMutation<TData, TVariables = unknown>(
  handler: (variables: TVariables) => TData | Promise<TData>
) {
  return vi.fn().mockImplementation(handler)
}

// Wait for query to settle
export async function waitForQueryToSettle(queryClient: QueryClient) {
  await queryClient.cancelQueries()
  await new Promise((resolve) => setTimeout(resolve, 0))
}
