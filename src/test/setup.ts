import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterEach, beforeEach, vi } from 'vitest'

// Initialize i18n for tests
import './mocks/i18n-mock'

// Cleanup after each test (required when globals: true)
afterEach(() => {
  cleanup()
})

// Reset language to English before each test
beforeEach(async () => {
  const { default: i18n } = await import('./mocks/i18n-mock')
  await i18n.changeLanguage('en')
})

// Mock import.meta.env
vi.stubEnv('VITE_COMING_SOON_MODE', 'false')
vi.stubEnv('VITE_CLERK_PUBLISHABLE_KEY', 'pk_test_mock-key')

// Mock window.matchMedia (required for some UI components)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock ResizeObserver (required for Radix UI components)
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
  root: null,
  rootMargin: '',
  thresholds: [],
}))

// Mock scrollTo (used by some components)
window.scrollTo = vi.fn()

// Mock Clerk module
vi.mock('@clerk/tanstack-react-start', () => ({
  ClerkProvider: ({ children }: { children: React.ReactNode }) => children,
  useUser: vi.fn().mockReturnValue({
    isLoaded: true,
    isSignedIn: false,
    user: null,
  }),
  useAuth: vi.fn().mockReturnValue({
    isLoaded: true,
    isSignedIn: false,
    userId: null,
    sessionId: null,
    getToken: vi.fn().mockResolvedValue(null),
  }),
  useClerk: vi.fn().mockReturnValue({
    openSignIn: vi.fn(),
    openSignUp: vi.fn(),
    signOut: vi.fn(),
  }),
  SignInButton: ({ children }: { children: React.ReactNode }) => children,
  SignOutButton: ({ children }: { children: React.ReactNode }) => children,
  SignUpButton: ({ children }: { children: React.ReactNode }) => children,
  UserButton: () => null,
}))
