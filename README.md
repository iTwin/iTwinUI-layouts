<p align="center">
  <picture>
    <source
      media='(prefers-color-scheme: dark)'
      srcset='https://itwinplatformcdn.azureedge.net/iTwinUI/iTwinUI-new-dark-logo.png'
    />
    <img
      src='https://itwinplatformcdn.azureedge.net/iTwinUI/iTwinUI-new-logo.png'
      alt='iTwinUI logo'
    />
  </picture>
</p>

<p align="center">An open-source design system that helps us build a unified web experience.</p>
  
<div align="center">

[![Build status](https://github.com/iTwin/iTwinUI-layouts/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/iTwin/iTwinUI-layouts/actions/workflows/build.yml?query=branch%3Amain)

</div>
<div align="center">
  
  [Key features](#key-features) • [Installation](#Installation) • [Usage](#Usage) • [Contributing](#contributing)

</div>

## Key features

iTwinUI-layouts places given React (eg. [iTwinUI-react](https://github.com/iTwin/iTwinUI-react)) components accordingly within the page with minimal effort on the development side.

---

## Installation

#### CSS package

```
npm install @itwin/itwinui-layouts-css
```

```
yarn add @itwin/itwinui-layouts-css
```

#### React package

```
npm install @itwin/itwinui-layouts-react
```

```
yarn add @itwin/itwinui-layouts-react
```

---

## Usage

#### CSS package

```css
// app.css
import '@itwin/itwinui-layouts-css/styles.css';
```

```html
<!-- app.html -->
<div class="iui-layouts-page">
  <div class="iui-layouts-page-header">
    <!-- Your header code -->
  </div>
  <div class="iui-layouts-page-sidenav">
    <!-- Your side navigation -->
  </div>
  <div class="iui-layouts-page-content iui-layouts-page-content-padded">
    <!-- Your content (will be padded) -->
  </div>
</div>
```

#### React package

Import layouts CSS in your root component then the layouts component you want and start using it!

```jsx
import '@itwin/itwinui-layouts-css/styles.css';
import { PageLayout } from '@itwin/itwinui-layouts-react';

const App = () => (
  <PageLayout>
    <PageLayout.Header>{/* Your header code */}</PageLayout.Header>

    <PageLayout.SideNavigation>
      {/* Add side navigation here */}
    </PageLayout.SideNavigation>

    <PageLayout.Content>{/* Main page content goes here */}</PageLayout.Content>
  </PageLayout>
);
```

---

## Contributing

We welcome you to contribute and make this layouts library better. You can submit feature requests or bugs by creating an [issue](https://github.com/iTwin/iTwinUI-layouts/issues).
Please read our [CONTRIBUTING.md](https://github.com/iTwin/iTwinUI-layouts/blob/main/CONTRIBUTING.md) for more information.
