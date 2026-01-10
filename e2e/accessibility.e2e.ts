import { expect, test } from '@playwright/test'

test.describe('Accessibility', () => {
  test('home page has proper heading hierarchy', async ({ page }) => {
    await page.goto('/')

    // Check for h1 heading
    const h1 = page.locator('h1')
    await expect(h1.first()).toBeVisible()

    // h1 should contain brand name
    await expect(h1.first()).toContainText('SonicBeff')
  })

  test('page has lang attribute', async ({ page }) => {
    await page.goto('/')

    const html = page.locator('html')
    const lang = await html.getAttribute('lang')
    expect(lang).toBeTruthy()
  })

  test('links have accessible text', async ({ page }) => {
    await page.goto('/')

    const links = page.getByRole('link')
    const count = await links.count()

    for (let i = 0; i < count; i++) {
      const link = links.nth(i)
      const text = await link.innerText()
      const ariaLabel = await link.getAttribute('aria-label')

      // Link should have either text content or aria-label
      expect(text.trim().length > 0 || ariaLabel !== null).toBeTruthy()
    }
  })

  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/')

    const buttons = page.getByRole('button')
    const count = await buttons.count()

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      const text = await button.innerText()
      const ariaLabel = await button.getAttribute('aria-label')

      // Button should have either text content or aria-label
      expect(text.trim().length > 0 || ariaLabel !== null).toBeTruthy()
    }
  })

  test('images have alt text', async ({ page }) => {
    await page.goto('/')

    const images = page.locator('img')
    const count = await images.count()

    for (let i = 0; i < count; i++) {
      const img = images.nth(i)
      const alt = await img.getAttribute('alt')
      const role = await img.getAttribute('role')

      // Image should have alt text or role="presentation"
      expect(alt !== null || role === 'presentation').toBeTruthy()
    }
  })
})

test.describe('Responsive Design', () => {
  test('renders correctly on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 })
    await page.goto('/')

    // Brand should still be visible
    const brand = page.getByText('SonicBeff')
    await expect(brand).toBeVisible()
  })

  test('renders correctly on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 })
    await page.goto('/')

    // Brand should be visible
    const brand = page.getByText('SonicBeff')
    await expect(brand).toBeVisible()
  })

  test('renders correctly on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 })
    await page.goto('/')

    // Brand should be visible
    const brand = page.getByText('SonicBeff')
    await expect(brand).toBeVisible()
  })
})
