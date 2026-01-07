import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/team-riders')({
  component: TeamRidersPage,
})

function TeamRidersPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground">Team Riders</h1>
      </div>
    </div>
  )
}
