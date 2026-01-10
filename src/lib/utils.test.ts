import { describe, expect, it } from 'vitest'

import { cn } from './utils'

describe('cn utility', () => {
  it('merges class names correctly', () => {
    const result = cn('px-4', 'py-2')
    expect(result).toBe('px-4 py-2')
  })

  it('handles conditional classes - truthy', () => {
    const isActive = true as boolean
    const result = cn('base-class', isActive && 'active-class')
    expect(result).toBe('base-class active-class')
  })

  it('handles conditional classes - falsy', () => {
    const isActive = false as boolean
    const result = cn('base-class', isActive && 'ignored-class')
    expect(result).toBe('base-class')
  })

  it('handles undefined values', () => {
    const result = cn('base-class', undefined, null)
    expect(result).toBe('base-class')
  })

  it('merges tailwind classes correctly (last wins)', () => {
    const result = cn('px-2', 'px-4')
    expect(result).toBe('px-4')
  })

  it('merges conflicting tailwind utilities', () => {
    const result = cn('text-red-500', 'text-blue-500')
    expect(result).toBe('text-blue-500')
  })

  it('handles array of classes', () => {
    const result = cn(['class-a', 'class-b'])
    expect(result).toBe('class-a class-b')
  })

  it('handles empty inputs', () => {
    const result = cn()
    expect(result).toBe('')
  })

  it('handles complex tailwind class merging', () => {
    const result = cn(
      'bg-red-500 hover:bg-red-600',
      'bg-blue-500' // Should override bg-red-500 but keep hover
    )
    expect(result).toBe('hover:bg-red-600 bg-blue-500')
  })
})
