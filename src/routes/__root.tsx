import {
  HeadContent,
  Link,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/Header'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import ClerkProvider from '../integrations/clerk/provider'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'TanStack Start Starter',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  shellComponent: RootDocument,
  component: RootLayout,
  notFoundComponent: NotFoundPage,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <ClerkProvider>
          {children}
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
              TanStackQueryDevtools,
            ]}
          />
        </ClerkProvider>
        <Scripts />
      </body>
    </html>
  )
}

function RootLayout() {
  const isComingSoon = import.meta.env.VITE_COMING_SOON_MODE === 'true'
  return (
    <>
      {!isComingSoon && <Header />}
      <Outlet />
    </>
  )
}

function NotFoundPage() {
  return (
    <div className="bg-background relative flex h-screen flex-col items-center justify-center overflow-hidden">
      {/* Diagonal speed lines background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `repeating-linear-gradient(
          -75deg, transparent 0px, transparent 60px,
          oklch(0.7686 0.1647 70.0804 / 0.06) 60px,
          oklch(0.7686 0.1647 70.0804 / 0.06) 61px
        )`,
        }}
      />

      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, oklch(0.7686 0.1647 70.0804 / 0.1) 0%, transparent 50%)`,
        }}
      />

      <h1
        className="text-primary font-display hero-entrance opacity-0"
        style={{
          fontSize: 'clamp(8rem, 25vw, 16rem)',
          letterSpacing: '0.05em',
          textShadow: '0 0 80px oklch(0.7686 0.1647 70.0804 / 0.3)',
        }}
      >
        404
      </h1>

      <h2 className="text-foreground font-display hero-entrance stagger-1 text-2xl tracking-[0.3em] uppercase opacity-0 md:text-4xl">
        Trail Not Found
      </h2>

      <p className="text-muted-foreground font-body hero-entrance stagger-2 mt-4 max-w-md text-center opacity-0">
        You've gone off the beaten path. This trail doesn't exist.
      </p>

      <Link
        to="/"
        className="bg-primary text-primary-foreground font-display hover:bg-primary/90 hero-entrance stagger-3 mt-10 px-8 py-3 tracking-widest uppercase opacity-0 transition-colors"
      >
        Back to Base
      </Link>
    </div>
  )
}
