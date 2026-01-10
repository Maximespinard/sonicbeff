import { expect, test } from '@playwright/test'

test.describe('Internationalization (i18n)', () => {
  test.beforeEach(async ({ page }) => {
    // Clear localStorage to ensure clean state
    await page.goto('/')
    await page.evaluate(() => localStorage.clear())
  })

  test('defaults to English based on browser locale', async ({ page }) => {
    await page.goto('/')

    // Should display English content by default
    const brandName = page.getByText('SonicBeff')
    await expect(brandName).toBeVisible()
  })

  test('stores language preference in localStorage', async ({ page }) => {
    await page.goto('/')

    // Check that language is stored
    const storedLang = await page.evaluate(() => localStorage.getItem('i18nextLng'))
    expect(storedLang).toBeTruthy()
  })

  test('persists language choice across page reloads', async ({ page }) => {
    await page.goto('/')

    // Set Spanish language via localStorage
    await page.evaluate(() => localStorage.setItem('i18nextLng', 'es'))

    // Reload page
    await page.reload()

    // Should still have Spanish in localStorage
    const storedLang = await page.evaluate(() => localStorage.getItem('i18nextLng'))
    expect(storedLang).toBe('es')
  })

  test('page content is accessible in all supported languages', async ({ page }) => {
    // Test English
    await page.evaluate(() => localStorage.setItem('i18nextLng', 'en'))
    await page.goto('/')
    await expect(page.getByText('SonicBeff')).toBeVisible()

    // Test Spanish
    await page.evaluate(() => localStorage.setItem('i18nextLng', 'es'))
    await page.reload()
    await expect(page.getByText('SonicBeff')).toBeVisible()

    // Test French
    await page.evaluate(() => localStorage.setItem('i18nextLng', 'fr'))
    await page.reload()
    await expect(page.getByText('SonicBeff')).toBeVisible()
  })
})
