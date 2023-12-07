# Changelog

## 0.4.0

### Minor Changes

- [#87](https://github.com/iTwin/iTwinUI-layouts/pull/87): Added support for `@itwin/itwinui-react` v3 and removed dependency on `@itwin/itwinui-variables`.

## 0.3.0 (2023-09-20)

### Changes

- [#72](https://github.com/iTwin/iTwinUI-layouts/pull/72): Breakpoints:
  - Removed landscape-mobile breakpoint.
  - Using rem instead of px.

### What's new

- [#70](https://github.com/iTwin/iTwinUI-layouts/pull/70): Page layout:
  - Added bottom-bar area in page grid.
  - Added action-bar layout for bottom-bar.

## 0.2.0 (2022-11-16)

- Using `iTwinUI-variables`
- Removed dependency on `iTWinUI-css`

## 0.1.3 (2022-06-22)

- **`Grid.Item`**: Added `max-width: 100%` to fix overflow in Firefox.

## 0.1.1 (2022-05-25)

### What's new

- **Added `PageLayout` component.** It has sub-components that place content in the correct places.
- **Added `FluidGrid` component.**
  - Use it for items (e.g. tiles) array.
  - It has `--_iui-grid-item-min-width` CSS variable that defines minimum width of the item that is used for responsiveness.
- **Added `Grid` component.** It is based on CSS grid and has 12 columns. As children pass `iui-layouts-grid-item` sub-component which has:
  - `--_iui-grid-item-column-span-[BREAKPOINT]` prop that defines how many columns the item should span.
  - `--_iui-grid-item-column-start-[BREAKPOINT]` prop that defines the column the item should start in.
