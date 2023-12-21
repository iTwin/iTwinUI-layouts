# Changelog

## 0.4.1

### Patch Changes

- 3bc9e7e: Fix dependency version.

## 0.4.0 (2023-12-07)

### Minor Changes

- [#87](https://github.com/iTwin/iTwinUI-layouts/pull/87): Added support for `@itwin/itwinui-react` v3 and removed dependency on `@itwin/itwinui-variables`.
  - Updated dependencies: `@itwin/itwinui-layouts-css@0.4.0`

## 0.3.0 (2023-09-20)

### Changes

- [#72](https://github.com/iTwin/iTwinUI-layouts/pull/72): **GridItem**: removed `landscapeMobile` breakpoint from `ColumnSpan` and `ColumnStart` types.
- [#72](https://github.com/iTwin/iTwinUI-layouts/pull/72): Improved breakpoints for page and grid layouts.

### What's new

- [#70](https://github.com/iTwin/iTwinUI-layouts/pull/70): Added a sticky `BottomBar` and `ActionBar` layout to use within BottomBar. ActionBar has 3 slots for custom components: `ActionBar.Left`, `ActionBar.Center` and `ActionBar.Right`.

```
<PageLayout.BottomBar>
  <ActionBar>
    <ActionBar.Left/>
    <ActionBar.Center/>
    <ActionBar.Right/>
  </ActionBar>
</PageLayout.BottomBar>
```

## 0.2.0 (2022-11-16)

- Using `iTwinUI-variables`
- Removed dependency on `iTWinUI-css`

## 0.1.3 (2022-06-22)

- **`Grid.Item`**: Added `max-width: 100%` to fix overflow in Firefox.

## 0.1.2 (2022-05-26)

### What's new

- **Added `PageLayout` component.** It has `PageLayout.Header`, `PageLayout.SideNavigation`, `PageLayout.Content`, `PageLayout.TitleArea` and `PageLayout.ToolsArea` sub-components that place content in the correct places.
- **Added `FluidGrid` component.**
  - Use it for items (e.g. tiles) array.
  - It has `minItemWidth` prop that defines minimum width of the item that is used for responsiveness.
- **Added `Grid` component.** It is based on CSS grid and has 12 columns. As children pass `Grid.Item` sub-component which has:
  - `columnSpan` prop that defines how many columns the item should span.
  - `columnStart` prop that defines the column the item should start in.
