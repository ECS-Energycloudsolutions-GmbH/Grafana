# Grafana Theme Reference

> What each field in a theme definition does, which UI elements it affects, and where to look.

Place this file alongside the `.ts` theme definitions for easy reference.

---

## Minimal example

You only need to set what you want to override. Everything else inherits from the base `dark` or `light` theme.

```typescript
import { NewThemeOptions } from '../createTheme';

const theme: NewThemeOptions = {
  name: 'My Theme',
  colors: {
    mode: 'dark',
    primary: { main: '#52E8FF' },
  },
};

export default theme;
```

The theme ID is derived from the **filename** (e.g., `my_theme.ts` → ID `my_theme`), not from a field in the object.

---

## Required fields

| Field         | Type                  | Description                                                            |
| ------------- | --------------------- | ---------------------------------------------------------------------- |
| `name`        | string                | Display name shown in the theme picker (Preferences > Interface theme) |
| `colors.mode` | `"dark"` or `"light"` | Base theme to inherit from. Determines all defaults                    |

---

## `colors.primary`

The main brand/accent color. Drives most interactive elements.

| Field  | What it affects                                                                                                                                                                  |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `main` | Focus outlines on buttons/inputs. Active/selected accent color. Primary button background. Link default color (unless `text.link` overrides). The "brand color" of the entire UI |

**Where you'll see it:** Focus rings, primary buttons, active tab indicators, selected states

**Auto-derived variants** (from `main` alone):
- `shade` — slightly lighter (dark mode) or darker (light mode) for hover/press states
- `text` — defaults to `main`, used for text on top of primary backgrounds
- `border` — defaults to `text`
- `transparent` — `main` at 15% opacity, used for subtle background tints
- `contrastText` — white or black, whichever is more readable on `main`

---

## `colors.secondary`

Neutral/de-emphasized UI elements.

| Field    | What it affects                                            |
| -------- | ---------------------------------------------------------- |
| `main`   | Secondary button backgrounds, toggle off-state backgrounds |
| `text`   | Secondary button text color                                |
| `border` | Secondary button borders                                   |

**Where you'll see it:** Secondary buttons, deselected pills/toggles, neutral badges

---

## `colors.background`

The layered surface system. Think of it as depth: canvas is the floor, elevated floats above everything.

| Field       | What it affects                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------- |
| `canvas`    | **Page/dashboard background.** The outermost layer. The "wall color" of the app                                   |
| `primary`   | **Panel and card backgrounds.** Main content areas that sit on top of canvas                                      |
| `secondary` | **Cards-on-cards.** List items, sub-panels, sidebar sections. Slightly different from primary to create hierarchy |
| `elevated`  | **Floating elements.** Dropdown menus, popovers, tooltips, modals. Appears "above" primary                        |

**Visual hierarchy:** canvas (furthest back) → primary → secondary → elevated (closest to user)

---

## `colors.text`

| Field         | What it affects                                                                                                                                                |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `primary`     | **All body text.** Headings, paragraphs, labels, form input values. The default text color everywhere                                                          |
| `secondary`   | **Muted/helper text.** Timestamps, subtitles, placeholder text, breadcrumbs, metadata                                                                          |
| `disabled`    | **Disabled element text.** Inactive form inputs, disabled buttons, grayed-out labels                                                                           |
| `link`        | **Hyperlink text.** Clickable links in body copy, "Edit"/"View" action text                                                                                    |
| `maxContrast` | **Maximum contrast text.** Always white (dark mode) or black (light mode). Used internally by `getContrastText()` for guaranteed readability on any background |

---

## `colors.border`

Three levels of border emphasis.

| Field    | What it affects                                                                                              |
| -------- | ------------------------------------------------------------------------------------------------------------ |
| `weak`   | **Subtle dividers.** Section separators, faint lines between sidebar items, tag borders. Barely visible      |
| `medium` | **Standard borders.** Form input outlines, card borders, panel dividers. The "normal" border                 |
| `strong` | **High-emphasis borders.** Error-state input outlines, focused element borders, important visual separations |

---

## `colors.action`

Interactive state feedback — what happens when users hover, click, or tab through the UI.

| Field                | What it affects                                                                                                    |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `hover`              | **Hover background tint.** Applied to menu items, list rows, dropdown options, cards on mouseover                  |
| `selected`           | **Selected/active background.** Currently active menu item, selected dropdown option, active filter pill           |
| `selectedBorder`     | **Selected item accent border.** Left-edge or bottom-edge accent line on the selected menu item or tab             |
| `focus`              | **Keyboard focus background.** Applied when tabbing through elements (can differ from hover)                       |
| `hoverOpacity`       | **Hover opacity multiplier** (number 0-1, default 0.08). Controls how much colored buttons lighten/darken on hover |
| `disabledText`       | **Disabled element text color.** Same role as `text.disabled`                                                      |
| `disabledBackground` | **Disabled element background.** Very subtle tint on inactive buttons/inputs                                       |
| `disabledOpacity`    | **Disabled opacity multiplier** (number 0-1, default 0.38). How faded disabled elements appear                     |

---

## `colors.gradients`

Brand gradient fills used for visual emphasis.

| Field             | What it affects                                                                                                                                          |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `brandHorizontal` | **Left-to-right gradient.** Feature/CTA button hover backgrounds, brand hero cards, upgrade prompts, "Create Dashboard" hover state                      |
| `brandVertical`   | **Top-to-bottom gradient.** Active menu item left accent bar (the colored stripe in the sidebar). Data source card hover. Filter sidebar hover gradients |

**Format:** CSS `linear-gradient(...)` string.

**Tip:** Use your two most distinctive brand colors. The gradient is subtle — it appears on hover states and as thin accent bars, not as large fills.

---

## `shape`

| Field          | Default | What it affects                                                                                                                               |
| -------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `borderRadius` | `2`     | **Global border radius** (in px). Applied to buttons, inputs, cards, panels, dropdowns, tooltips — essentially every rounded corner in the UI |

---

## Status colors (override only if needed)

These inherit from `palette.ts` defaults. Override sparingly — they carry semantic meaning.

| Token          | Default (dark)     | What it affects                                                    |
| -------------- | ------------------ | ------------------------------------------------------------------ |
| `error.main`   | `#d10e5c` (red)    | Error messages, validation errors, alert firing states, red badges |
| `success.main` | `#1a7f4b` (green)  | Success messages, healthy/OK states, resolved alerts               |
| `warning.main` | `#ff9900` (orange) | Warning badges, caution states, pending operations                 |
| `info.main`    | same as `primary`  | Info messages, hint badges, neutral status indicators              |

**Recommendation:** Don't override `error`, `success`, or `warning` in a brand theme — red/green/orange carry universal meaning (especially in monitoring/alerting dashboards). Override `info` only if it clashes with your primary.

---

## Calculation parameters

These control how the theme system auto-computes derived colors.

| Field               | Default       | What it controls                                                                                                                                                                                   |
| ------------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `contrastThreshold` | `3`           | WCAG contrast ratio threshold. When auto-picking text color on a background, if contrast with white >= this value → use white, else → use black. Higher = stricter (e.g., `4` for Aubergine theme) |
| `hoverFactor`       | `0.03`–`0.05` | How much a colored button lightens/darkens on hover. Higher = more obvious hover feedback (e.g., `0.07` for Aubergine)                                                                             |
| `tonalOffset`       | `0.15`–`0.2`  | How much the auto-generated `shade` variant differs from `main`. Dark mode: `lighten(main, tonalOffset)`. Light mode: `darken(main, tonalOffset)`. Higher = more dramatic shade difference         |

---

## Quick lookup: UI element → token

| UI Element                     | Token                       |
| ------------------------------ | --------------------------- |
| Dashboard/page background      | `background.canvas`         |
| Panel/card background          | `background.primary`        |
| Nested card / list item bg     | `background.secondary`      |
| Dropdown / tooltip / modal bg  | `background.elevated`       |
| Body text                      | `text.primary`              |
| Muted/label text               | `text.secondary`            |
| Hyperlinks                     | `text.link`                 |
| Disabled text                  | `text.disabled`             |
| Section separator lines        | `border.weak`               |
| Input borders                  | `border.medium`             |
| Emphasized borders             | `border.strong`             |
| Row/item hover background      | `action.hover`              |
| Selected item background       | `action.selected`           |
| Selected item accent bar       | `action.selectedBorder`     |
| Keyboard focus highlight       | `action.focus`              |
| Primary buttons, focus rings   | `primary.main`              |
| Secondary buttons              | `secondary.main`            |
| Menu active item accent stripe | `gradients.brandVertical`   |
| Feature/CTA button hover       | `gradients.brandHorizontal` |
| Error states                   | `error.main`                |
| Success states                 | `success.main`              |
| Warning badges                 | `warning.main`              |

---

## How to register a new theme

Four files need changes. Using `my_theme` as an example:

### 1. Create the theme file

Create `my_theme.ts` in this directory (`packages/grafana-data/src/themes/themeDefinitions/`):

```typescript
import { NewThemeOptions } from '../createTheme';

const theme: NewThemeOptions = {
  name: 'My Theme',
  colors: {
    mode: 'light',
    primary: { main: '#52E8FF' },
  },
};

export default theme;
```

The filename becomes the theme ID (`my_theme`).

### 2. Export from index.ts

Add to `packages/grafana-data/src/themes/themeDefinitions/index.ts`:

```typescript
export { default as my_theme } from './my_theme';
```

`registry.ts` auto-imports everything from this index — no changes needed there.

### 3. Add to the frontend theme selector

Add to the `allowedExtraThemes` array in `public/app/core/components/ThemeSelector/getSelectableThemes.ts`:

```typescript
if (config.featureToggles.grafanaconThemes) {
  // ... existing themes ...
  allowedExtraThemes.push('my_theme');
}
```

Themes are gated behind the `grafanaconThemes` feature toggle. It must be enabled via:
```
GF_FEATURE_TOGGLES_ENABLE=grafanaconThemes
```

### 4. Register in the Go backend

Add to the `themes` slice in `pkg/services/preference/themes.go`:

```go
{ID: "my_theme", Type: "light", IsExtra: true},
```

The `Type` field **must match** `colors.mode` in your `.ts` file (`"light"` or `"dark"`). This is used for server-side theme validation and fallback behavior.

### 5. Build and verify

- Rebuild frontend: `yarn start` (dev) or `yarn build` (production)
- Rebuild Go backend if you changed `themes.go`
- Go to Profile > Preferences > Interface theme — your theme appears in the dropdown

### Optional: Storybook

To see your theme in Storybook during development, add it to `packages/grafana-ui/.storybook/preview.ts`:

```typescript
if (process.env.NODE_ENV === 'development') {
  // ... existing themes ...
  allowedExtraThemes.push('my_theme');
}
```
