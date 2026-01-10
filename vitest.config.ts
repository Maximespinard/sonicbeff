import react from '@vitejs/plugin-react'
import viteTsConfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    viteTsConfigPaths({
      projects: ['./tsconfig.json'],
    }),
    react(),
  ],
  test: {
    // Environment
    environment: 'jsdom',
    globals: true,

    // Test patterns
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    exclude: ['**/node_modules/**', '**/dist/**', '**/e2e/**'],

    // Setup files
    setupFiles: ['./src/test/setup.ts'],

    // Timeouts
    testTimeout: 10000,
    hookTimeout: 10000,

    // Mocking
    clearMocks: true,
    restoreMocks: true,

    // Coverage configuration (no thresholds)
    coverage: {
      provider: 'v8',
      enabled: false, // Run with --coverage flag
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './coverage',
      include: ['src/**/*.{ts,tsx}'],
      exclude: [
        'src/**/*.{test,spec}.{ts,tsx}',
        'src/test/**',
        'src/routeTree.gen.ts',
        'src/generated/**',
      ],
    },

    // Reporter
    reporters: ['default'],
  },
})
