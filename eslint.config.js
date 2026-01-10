//  @ts-check

import { tanstackConfig } from '@tanstack/eslint-config'
import tailwind from 'eslint-plugin-tailwindcss'

export default [
  ...tanstackConfig,
  ...tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        // Tailwind v4 uses @theme in CSS, no config file needed
        config: null,
        cssFiles: ['src/styles.css'],
        callees: ['cn', 'clsx', 'cva'],
      },
    },
    rules: {
      // Disable custom classname warnings for Tailwind v4 @theme classes
      'tailwindcss/no-custom-classname': 'off',
    },
  },
  {
    ignores: ['*.config.js', 'prettier.config.js'],
  },
]
