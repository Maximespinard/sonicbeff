import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('loads the home page successfully', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/SonicBeff/i)
  })

  test('displays coming soon page content', async ({ page }) => {
    await page.goto('/')

    // Check for brand name
    const brandName = page.getByRole('heading', { level: 1, name: /SonicBeff/i })
    await expect(brandName).toBeVisible()

    // Check for tagline
    const tagline = page.getByRole('heading', { level: 2 })
    await expect(tagline).toBeVisible()
  })

  test('has proper meta viewport', async ({ page }) => {
    await page.goto('/')

    const viewport = await page.locator('meta[name="viewport"]').getAttribute('content')
    expect(viewport).toContain('width=device-width')
  })

  test('displays launching soon badge', async ({ page }) => {
    await page.goto('/')

    const badge = page.getByText(/Launching Soon|Próximamente|Bientôt disponible/i)
    await expect(badge).toBeVisible()
  })
})

test.describe('Navigation', () => {
  test('shows 404 page for unknown routes', async ({ page }) => {
    await page.goto('/nonexistent-page')

    await expect(page.getByText(/Trail Not Found|Sendero no encontrado|Sentier introuvable/i)).toBeVisible()
  })

  test('404 page has back to home link', async ({ page }) => {
    await page.goto('/unknown-route')

    const backLink = page.getByRole('link', { name: /Back to Base|Volver al inicio|Retour à la base/i })
    await expect(backLink).toBeVisible()
  })

  test('404 back link navigates to home', async ({ page }) => {
    await page.goto('/unknown-route')

    await page.getByRole('link', { name: /Back to Base|Volver al inicio|Retour à la base/i }).click()

    await expect(page).toHaveURL('/')
  })
})
