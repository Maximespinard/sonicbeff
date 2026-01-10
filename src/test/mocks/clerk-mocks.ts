import { vi } from 'vitest'

// Mock Clerk hooks - these are pre-configured in setup.ts
// Use these functions to change the mock state during tests

export const mockUseUser = vi.fn().mockReturnValue({
  isLoaded: true,
  isSignedIn: false,
  user: null,
})

export const mockUseAuth = vi.fn().mockReturnValue({
  isLoaded: true,
  isSignedIn: false,
  userId: null,
  sessionId: null,
  getToken: vi.fn().mockResolvedValue(null),
})

export const mockUseClerk = vi.fn().mockReturnValue({
  openSignIn: vi.fn(),
  openSignUp: vi.fn(),
  signOut: vi.fn(),
})

// Mock signed-in user state
export function mockSignedInUser(
  userData = {
    id: 'user_123',
    emailAddresses: [{ emailAddress: 'test@example.com' }],
    firstName: 'Test',
    lastName: 'User',
    fullName: 'Test User',
    imageUrl: 'https://example.com/avatar.png',
  }
) {
  mockUseUser.mockReturnValue({
    isLoaded: true,
    isSignedIn: true,
    user: userData,
  })
  mockUseAuth.mockReturnValue({
    isLoaded: true,
    isSignedIn: true,
    userId: userData.id,
    sessionId: 'session_123',
    getToken: vi.fn().mockResolvedValue('mock-token'),
  })
}

// Reset to signed-out state
export function mockSignedOutUser() {
  mockUseUser.mockReturnValue({
    isLoaded: true,
    isSignedIn: false,
    user: null,
  })
  mockUseAuth.mockReturnValue({
    isLoaded: true,
    isSignedIn: false,
    userId: null,
    sessionId: null,
    getToken: vi.fn().mockResolvedValue(null),
  })
}

// Mock loading state
export function mockLoadingAuth() {
  mockUseUser.mockReturnValue({
    isLoaded: false,
    isSignedIn: undefined,
    user: undefined,
  })
  mockUseAuth.mockReturnValue({
    isLoaded: false,
    isSignedIn: undefined,
    userId: undefined,
    sessionId: undefined,
    getToken: vi.fn().mockResolvedValue(null),
  })
}

// Reset all Clerk mocks to default state
export function resetClerkMocks() {
  mockSignedOutUser()
  mockUseClerk.mockReturnValue({
    openSignIn: vi.fn(),
    openSignUp: vi.fn(),
    signOut: vi.fn(),
  })
}
