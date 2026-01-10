# SonicBeff Project - Claude Development Guidelines

## Project Overview

SonicBeff is a downhill hardware e-commerce platform built by riders, for riders. This project uses modern React patterns with TanStack Router, Vite, and Tailwind CSS v4.

---

## Tech Stack

- **Framework:** React (TanStack ecosystem)
- **Build Tool:** Vite
- **Router:** TanStack Router
- **Styling:** Tailwind CSS v4 ⚠️ (NOT v3 - see critical differences below)
- **Language:** TypeScript (strict mode)
- **Authentication:** Clerk
- **Query Management:** TanStack Query v5

---

## 🚨 CRITICAL: Tailwind CSS v4 Differences

### ⚠️ This project uses Tailwind CSS v4 - NOT v3!

The following syntax changes are **MANDATORY** and will cause linting errors if not followed:

### 1. **Gradient Syntax (BREAKING CHANGE)**

#### ❌ NEVER use v3 syntax:

```html
<div class="bg-gradient-to-r from-blue-500 to-purple-500">
  <div class="bg-gradient-to-b from-red-500 to-yellow-500"></div>
</div>
```

#### ✅ ALWAYS use v4 syntax:

```html
<!-- Linear gradients -->
<div class="bg-linear-to-r from-blue-500 to-purple-500">
  <div class="bg-linear-to-b from-red-500 to-yellow-500">
    <div class="bg-linear-to-bl from-violet-500 to-fuchsia-500">
      <div class="bg-linear-65 from-purple-500 to-pink-500">
        <!-- Radial gradients -->
        <div class="bg-radial from-pink-400 to-fuchsia-700">
          <div class="bg-radial-[at_50%_75%] from-sky-200 to-indigo-900">
            <!-- Conic gradients -->
            <div class="bg-conic from-blue-600 to-sky-400">
              <div class="bg-conic-180 from-indigo-600 to-indigo-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

**Why:** `bg-gradient-to-*` does not exist in v4. Use `bg-linear-to-*`, `bg-radial`, or `bg-conic`.

---

### 2. **CSS Variable Syntax (BREAKING CHANGE)**

#### ❌ NEVER use v3 syntax:

```html
<div class="bg-[--brand-color]">
  <div class="text-[var(--navbar-accent)]">
    <div class="from-[--primary-color]"></div>
  </div>
</div>
```

#### ✅ ALWAYS use v4 syntax:

```html
<div class="bg-(--brand-color)">
  <div class="text-(--navbar-accent)">
    <div class="from-(--primary-color)">
      <div class="from-(--navbar-accent)/20 to-(--navbar-accent)/40"></div>
    </div>
  </div>
</div>
```

**Why:** Parentheses `()` replace square brackets `[]` for CSS variables. The `var()` wrapper is automatically added.

**Examples:**

- `bg-(--my-color)` → `background-color: var(--my-color)`
- `text-(--navbar-accent)` → `color: var(--navbar-accent)`
- `h-(--my-height)` → `height: var(--my-height)`

---

### 3. **Canonical Classes (Linting Rules)**

#### ❌ Avoid arbitrary values when canonical classes exist:

```html
<div class="h-[2px]">
  <!-- ⚠️ Will trigger suggestCanonicalClasses -->
  <div class="w-[2px]">
    <!-- ⚠️ Will trigger suggestCanonicalClasses -->
    <div class="h-[1px]">
      <!-- ⚠️ Will trigger suggestCanonicalClasses -->
      <div class="m-[4px]">
        <!-- ⚠️ Will trigger suggestCanonicalClasses -->
      </div>
    </div>
  </div>
</div>
```

#### ✅ Use canonical classes from spacing scale:

```html
<div class="h-0.5">
  <!-- 2px -->
  <div class="w-0.5">
    <!-- 2px -->
    <div class="h-px">
      <!-- 1px -->
      <div class="m-1"><!-- 4px --></div>
    </div>
  </div>
</div>
```

**Spacing Scale Reference:**

- `px` = `1px`
- `0.5` = `2px`
- `1` = `4px`
- `1.5` = `6px`
- `2` = `8px`
- `2.5` = `10px`
- `3` = `12px`
- `4` = `16px`
- `5` = `20px`
- `6` = `24px`
- `8` = `32px`
- `10` = `40px`
- `12` = `48px`
- `16` = `64px`
- `20` = `80px`
- `24` = `96px`

**When to use arbitrary values:**
Only use `[value]` syntax when the value doesn't exist in the spacing scale:

```html
<div class="h-[35vh]">
  <!-- Viewport units -->
  <div class="w-[calc(100%-2rem)]">
    <!-- Calculations -->
    <div class="top-[2.5rem]"><!-- Non-standard spacing --></div>
  </div>
</div>
```

---

### 4. **Theme Configuration**

#### ❌ v3 way (tailwind.config.js):

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
      },
    },
  },
}
```

#### ✅ v4 way (@theme in CSS):

```css
@theme {
  --color-primary: oklch(0.7686 0.1647 70.0804);
  --spacing: 1px;
}
```

**Why:** v4 uses CSS-based theme configuration via `@theme` directive in your styles.css file.

---

### 5. **@reference Directive for Component Styles**

When using CSS in Vue `<style>` blocks, Svelte components, or CSS modules:

```vue
<template>
  <h1>Hello world!</h1>
</template>

<style>
@reference "../../app.css";

h1 {
  @apply text-2xl font-bold text-red-500;
}
</style>
```

**Why:** Isolated style blocks need `@reference` to access external theme definitions without duplicating CSS.

---

## Brand Guidelines

### Colors

- **Primary (Brand):** Golden Yellow `oklch(0.7686 0.1647 70.0804)`
- **Background:** White `oklch(1 0 0)`
- **Foreground:** Dark Navy `oklch(0.141 0.005 285.823)`

### Typography

- **Display Font:** Bebas Neue, Anton (for titles/headings)
- **Body Font:** Inter (for body text)

### Design Philosophy

- **Speed-focused:** Use diagonal lines, motion blur, speed streaks
- **Premium feel:** Dark accents, golden yellow highlights, grain textures
- **Rider-centric:** Aggressive, bold, action-sport aesthetic

---

## Project Structure

```
sonicbeff/
├── src/
│   ├── routes/
│   │   ├── __root.tsx          # Root layout with conditional Header
│   │   ├── index.tsx            # Home page
│   │   └── ...
│   ├── components/
│   │   ├── ComingSoon.tsx       # Coming soon page
│   │   ├── Header.tsx           # Navigation header
│   │   └── ...
│   ├── integrations/
│   │   ├── clerk/               # Clerk authentication
│   │   └── tanstack-query/      # TanStack Query setup
│   └── styles.css               # Global styles + Tailwind config
└── ...
```

---

## Environment Variables

### Coming Soon Mode

Toggle between normal site and coming soon page:

```env
VITE_COMING_SOON_MODE=true   # Show coming soon page
VITE_COMING_SOON_MODE=false  # Show normal site
```

---

## Coding Standards

### TypeScript

- Use strict mode
- No `any` types
- Use `import type` for type-only imports
- Functional React components only

### Tailwind CSS

- **ALWAYS** use v4 syntax (see critical differences above)
- Prefer canonical classes over arbitrary values
- Use CSS variables with parentheses: `bg-(--variable)`
- Use `bg-linear-to-*` NOT `bg-gradient-to-*`

### React

- Functional components only
- Use TanStack Router for routing
- Use TanStack Query v5 for data fetching
- Follow `queryOptions` pattern for queries

---

## Common Patterns

### Route Definition (TanStack Router)

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/example')({
  component: ExamplePage,
})

function ExamplePage() {
  return <div>Example</div>
}
```

### Conditional Header (Root Layout)

The Header is conditionally rendered based on `VITE_COMING_SOON_MODE`:

```tsx
// In __root.tsx
function RootLayout() {
  const isComingSoon = import.meta.env.VITE_COMING_SOON_MODE === 'true'
  return (
    <>
      {!isComingSoon && <Header />}
      <Outlet />
    </>
  )
}
```

---

## File Deletion Notice

⚠️ **IMPORTANT:** Claude Code does not have access to delete files or folders.

If file deletion is needed during implementation:

1. Stop implementation
2. Provide user with exact commands to run
3. Let user delete files manually
4. Resume implementation after confirmation

Example:

```bash
# Commands to delete files
rm -rf src/old-component/
rm src/deprecated-file.tsx
```

---

## Testing & Verification

### Before Committing

1. Run linting: `npm run lint`
2. Type check: `npx tsc --noEmit`
3. Test build: `npm run build`

### Coming Soon Page Testing

1. Set `VITE_COMING_SOON_MODE=true`
2. Verify: No header, no scroll, 100vh height, animations work
3. Set `VITE_COMING_SOON_MODE=false`
4. Verify: Header appears, normal navigation works

### 404 Page Testing

1. Navigate to `/nonexistent`
2. Verify: "Trail Not Found" page shows
3. Click "Back to Base" - should return to home

---

## Quick Reference: Tailwind v4 Migration

| v3 Syntax             | v4 Syntax        | Notes                 |
| --------------------- | ---------------- | --------------------- |
| `bg-gradient-to-r`    | `bg-linear-to-r` | Linear gradients      |
| `bg-gradient-to-b`    | `bg-linear-to-b` | Linear gradients      |
| `bg-[--color]`        | `bg-(--color)`   | CSS variables         |
| `text-[var(--color)]` | `text-(--color)` | CSS variables         |
| `h-[2px]`             | `h-0.5`          | Use canonical classes |
| `w-[1px]`             | `w-px`           | Use canonical classes |
| `tailwind.config.js`  | `@theme` in CSS  | Theme configuration   |

---

## Resources

- [Tailwind CSS v4 Docs](https://tailwindcss.com)
- [TanStack Router Docs](https://tanstack.com/router)
- [TanStack Query v5 Docs](https://tanstack.com/query)
- [Vite Docs](https://vitejs.dev)

---

**Remember:** This project uses Tailwind CSS v4. Always use `bg-linear-to-*`, `bg-(--variable)`, and canonical classes!
