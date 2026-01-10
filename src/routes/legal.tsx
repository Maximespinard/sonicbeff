import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/legal')({
  component: LegalPage,
})

function LegalPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-foreground text-4xl font-bold">Legal</h1>
      </div>
    </div>
  )
}
