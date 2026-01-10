import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { I18nextProvider } from 'react-i18next'

import i18n, { changeLanguage } from './mocks/i18n-mock'

import type { RenderOptions, RenderResult } from '@testing-library/react'
import type { ReactElement, ReactNode } from 'react'

// Create a fresh QueryClient for each test
function createTestQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        gcTime: 0,
        staleTime: 0,
      },
      mutations: {
        retry: false,
      },
    },
  })
}

interface AllProvidersProps {
  children: ReactNode
  queryClient?: QueryClient
}

function AllProviders({ children, queryClient }: AllProvidersProps) {
  const client = queryClient ?? createTestQueryClient()
  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    </I18nextProvider>
  )
}

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  queryClient?: QueryClient
  locale?: 'en' | 'es' | 'fr'
}

async function customRender(
  ui: ReactElement,
  options: CustomRenderOptions = {}
): Promise<RenderResult & { user: ReturnType<typeof userEvent.setup> }> {
  const { queryClient, locale = 'en', ...renderOptions } = options

  // Set the language before rendering
  await changeLanguage(locale)

  const user = userEvent.setup()

  return {
    user,
    ...render(ui, {
      wrapper: ({ children }) => (
        <AllProviders queryClient={queryClient}>{children}</AllProviders>
      ),
      ...renderOptions,
    }),
  }
}

// Re-export everything from testing-library
export * from '@testing-library/react'
export { userEvent }

// Override render
export { customRender as render }

// Export utilities
export { changeLanguage, createTestQueryClient, i18n }
