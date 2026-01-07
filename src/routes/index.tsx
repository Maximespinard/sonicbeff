import { createFileRoute } from '@tanstack/react-router'
import { ComingSoon } from '../components/ComingSoon'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  // Check if coming soon mode is enabled
  const isComingSoon = import.meta.env.VITE_COMING_SOON_MODE === 'true'

  if (isComingSoon) {
    return <ComingSoon />
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground">Home</h1>
      </div>
    </div>
  )
}
