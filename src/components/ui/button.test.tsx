import { describe, expect, it, vi } from 'vitest'

import { Button } from './button'

import { render, screen } from '@/test/test-utils'

describe('Button component', () => {
  it('renders with children', async () => {
    await render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })

  it('renders with default variant', async () => {
    await render(<Button>Default</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-variant', 'default')
  })

  it('renders with destructive variant', async () => {
    await render(<Button variant="destructive">Delete</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-variant', 'destructive')
  })

  it('renders with outline variant', async () => {
    await render(<Button variant="outline">Outline</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-variant', 'outline')
  })

  it('renders with ghost variant', async () => {
    await render(<Button variant="ghost">Ghost</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-variant', 'ghost')
  })

  it('renders with default size', async () => {
    await render(<Button>Default Size</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-size', 'default')
  })

  it('renders with small size', async () => {
    await render(<Button size="sm">Small</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-size', 'sm')
  })

  it('renders with large size', async () => {
    await render(<Button size="lg">Large</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-size', 'lg')
  })

  it('renders with icon size', async () => {
    await render(<Button size="icon">Icon</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-size', 'icon')
  })

  it('handles click events', async () => {
    const handleClick = vi.fn()
    const { user } = await render(<Button onClick={handleClick}>Click</Button>)

    await user.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is disabled when disabled prop is true', async () => {
    await render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })

  it('does not trigger click when disabled', async () => {
    const handleClick = vi.fn()
    const { user } = await render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    )

    await user.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders as child component when asChild is true', async () => {
    await render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })

  it('applies custom className', async () => {
    await render(<Button className="custom-class">Custom</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
  })

  it('has correct data-slot attribute', async () => {
    await render(<Button>Slot</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-slot', 'button')
  })
})
