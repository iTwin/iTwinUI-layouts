<p align="center">
  <img src="./demo/src/assets/logo.png" alt="iTwinUI Layouts logo" style="width: 300px;"/>
</p>

<p align="center">An open-source design system that helps us build a unified web experience.</p>
  
<div align="center">
  
  [![itwinui-layouts on npm](https://img.shields.io/npm/v/@itwin/itwinui-layouts)](https://www.npmjs.com/package/@itwin/itwinui-layouts)
  [![Build status](https://github.com/iTwin/iTwinUI-layouts/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/iTwin/iTwinUI-layouts/actions/workflows/build.yml?query=branch%3Amain)
  [![Dependencies Status](https://img.shields.io/badge/dependencies-none-brightgreen)](https://www.npmjs.com/package/@itwin/itwinui-layouts?activeTab=dependencies)

</div>

<div align="center">
  
  [Key features](#key-features) • [Installation](#Installation) • [Usage](#Usage) • [Contributing](#contributing)

</div>

## Key features

iTwinUI-Layouts places given React (eg. [iTWinUI-react](https://github.com/iTwin/iTwinUI-react)) components accordingly within the page with minimal effort on the development side.

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
import "@itwin/itwinui-layouts-css";
```

```html
<! --- app.html--->
<div class="iui-layouts-page">
  <div class="iui-layouts-page-header">
    <header>Your header code</header>
  </div>
  <div class="iui-layouts-page-sidenav">
    <div>Your side navigation</div>
  </div>
  <div class="iui-layouts-page-content iui-layouts-page-content-padded">
    <div>Your padded content</div>
  </div>
</div>
```

#### React package..

Import the component you want and start using it!

```jsx
import { PageLayout } from '@itwin/itwinui-layouts-react';

const App = () => (
  <PageLayout>
    <PageLayout.Header>{header}</PageLayout.Header>

    <PageLayout.SideNavigation>{sideNavigation}</PageLayout.SideNavigation>

    <PageLayout.Content>{content}</PageLayout.Content>
  </PageLayout>
);
```

---

## Contributing

We welcome you to contribute and make this layouts library better. You can submit feature requests or bugs by creating an [issue](https://github.com/iTwin/iTwinUI-layouts/issues).
Please read our [CONTRIBUTING.md](https://github.com/iTwin/iTwinUI-layouts/blob/main/CONTRIBUTING.md) for more information.
