import { describe, expect, it } from 'vitest'

import { ComingSoon } from './ComingSoon'

import { render, screen } from '@/test/test-utils'

describe('ComingSoon component', () => {
  it('renders the brand name', async () => {
    await render(<ComingSoon />)
    expect(screen.getByText('SonicBeff')).toBeInTheDocument()
  })

  it('displays the tagline', async () => {
    await render(<ComingSoon />)
    expect(screen.getByText('Something fast is coming')).toBeInTheDocument()
  })

  it('shows the launching soon badge', async () => {
    await render(<ComingSoon />)
    expect(screen.getByText('Launching Soon')).toBeInTheDocument()
  })

  it('displays the subtitle text', async () => {
    await render(<ComingSoon />)
    expect(screen.getByText(/Downhill hardware. Built by riders./i)).toBeInTheDocument()
  })

  it('displays the secondary subtitle text', async () => {
    await render(<ComingSoon />)
    expect(
      screen.getByText(/We are preparing something special for you./i)
    ).toBeInTheDocument()
  })

  it('renders the brand name as h1 heading', async () => {
    await render(<ComingSoon />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('SonicBeff')
  })

  it('renders the tagline as h2 heading', async () => {
    await render(<ComingSoon />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Something fast is coming')
  })

  it('has proper container structure', async () => {
    const { container } = await render(<ComingSoon />)
    const mainContainer = container.firstChild as HTMLElement
    expect(mainContainer).toHaveClass('fixed', 'inset-0', 'overflow-hidden')
  })
})

describe('ComingSoon component - i18n', () => {
  it('renders in Spanish when locale is es', async () => {
    await render(<ComingSoon />, { locale: 'es' })
    // Note: ComingSoon currently uses hardcoded text
    // When i18n is integrated, these texts will be translated
    expect(screen.getByText('SonicBeff')).toBeInTheDocument()
  })

  it('renders in French when locale is fr', async () => {
    await render(<ComingSoon />, { locale: 'fr' })
    // Note: ComingSoon currently uses hardcoded text
    // When i18n is integrated, these texts will be translated
    expect(screen.getByText('SonicBeff')).toBeInTheDocument()
  })
})
