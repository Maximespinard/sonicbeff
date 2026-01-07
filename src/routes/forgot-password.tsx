import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/forgot-password')({
  component: ForgotPasswordPage,
})

function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-foreground">Forgot Password</h1>
      </div>
    </div>
  )
}
