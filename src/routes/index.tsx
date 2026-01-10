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
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-foreground text-4xl font-bold">Home</h1>
      </div>
    </div>
  )
}
