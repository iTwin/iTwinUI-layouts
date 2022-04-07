<p align="center">
  <img src="https://itwinplatformcdn.azureedge.net/iTwinUI/iTwinUI-logo.png" alt="iTwinUI logo" />
</p>

<h1 align="center">iTwinUI-layouts</h1>

<p align="center">An open-source design system that helps us build a unified web experience.</p>
  
<div align="center">
  
  [![itwinui-layouts on npm](https://img.shields.io/npm/v/@itwin/itwinui-layouts)](https://www.npmjs.com/package/@itwin/itwinui-layouts)
  [![Build status](https://github.com/iTwin/iTwinUI/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/iTwin/iTwinUI/actions/workflows/build.yml?query=branch%3Amain)
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

TBD

#### React package

```
npm install @itwin/itwinui-layouts-react
```

```
yarn add @itwin/itwinui-layouts-react
```

---

## Usage

#### React package

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

---
