import { describe, expect, it } from 'vitest'

import { changeLanguage, i18n } from '@/test/test-utils'

describe('i18n configuration', () => {
  it('defaults to English', () => {
    expect(i18n.language).toBe('en')
  })

  it('translates common.loading in English', () => {
    expect(i18n.t('common.loading')).toBe('Loading...')
  })

  it('translates common.loading in Spanish', async () => {
    await changeLanguage('es')
    expect(i18n.t('common.loading')).toBe('Cargando...')
  })

  it('translates common.loading in French', async () => {
    await changeLanguage('fr')
    expect(i18n.t('common.loading')).toBe('Chargement...')
  })

  it('translates nav keys in all languages', async () => {
    // English
    await changeLanguage('en')
    expect(i18n.t('nav.home')).toBe('Home')
    expect(i18n.t('nav.products')).toBe('Products')
    expect(i18n.t('nav.cart')).toBe('Cart')

    // Spanish
    await changeLanguage('es')
    expect(i18n.t('nav.home')).toBe('Inicio')
    expect(i18n.t('nav.products')).toBe('Productos')
    expect(i18n.t('nav.cart')).toBe('Carrito')

    // French
    await changeLanguage('fr')
    expect(i18n.t('nav.home')).toBe('Accueil')
    expect(i18n.t('nav.products')).toBe('Produits')
    expect(i18n.t('nav.cart')).toBe('Panier')
  })

  it('translates comingSoon keys in all languages', async () => {
    // English
    await changeLanguage('en')
    expect(i18n.t('comingSoon.tagline')).toBe('Something fast is coming')
    expect(i18n.t('comingSoon.badge')).toBe('Launching Soon')

    // Spanish
    await changeLanguage('es')
    expect(i18n.t('comingSoon.tagline')).toBe('Algo rápido está llegando')
    expect(i18n.t('comingSoon.badge')).toBe('Próximamente')

    // French
    await changeLanguage('fr')
    expect(i18n.t('comingSoon.tagline')).toBe('Quelque chose de rapide arrive')
    expect(i18n.t('comingSoon.badge')).toBe('Bientôt disponible')
  })

  it('translates notFound keys in all languages', async () => {
    // English
    await changeLanguage('en')
    expect(i18n.t('notFound.title')).toBe('Trail Not Found')
    expect(i18n.t('notFound.backHome')).toBe('Back to Base')

    // Spanish
    await changeLanguage('es')
    expect(i18n.t('notFound.title')).toBe('Sendero no encontrado')
    expect(i18n.t('notFound.backHome')).toBe('Volver al inicio')

    // French
    await changeLanguage('fr')
    expect(i18n.t('notFound.title')).toBe('Sentier introuvable')
    expect(i18n.t('notFound.backHome')).toBe('Retour à la base')
  })

  it('falls back to English for missing translations', async () => {
    await changeLanguage('en')
    // Using a non-existent key should return the key itself
    expect(i18n.t('nonexistent.key')).toBe('nonexistent.key')
  })
})
