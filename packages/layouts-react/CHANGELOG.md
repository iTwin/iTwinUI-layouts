# Changelog

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
