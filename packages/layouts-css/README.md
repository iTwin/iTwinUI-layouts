<p align="center">
  <img src="https://itwin.github.io/iTwinUI-layouts/logo.png" alt="iTwinUI Layouts logo" style="width: 300px;"/>
</p>

<p align="center">An open-source design system that helps us build a unified web experience.</p>
  
<div align="center">
  
  [![itwinui-layouts on npm](https://img.shields.io/npm/v/@itwin/itwinui-layouts-css)](https://www.npmjs.com/package/@itwin/itwinui-layouts-css)
  [![Build status](https://github.com/iTwin/iTwinUI-layouts/actions/workflows/build.yml/badge.svg?branch=main)](https://github.com/iTwin/iTwinUI-layouts/actions/workflows/build.yml?query=branch%3Amain)

</div>
<div align="center">
  
  [Key features](#key-features) • [Installation](#Installation) • [Usage](#Usage) • [Contributing](#contributing)

</div>

## Key features

iTwinUI-Layouts places given elements (eg. [iTwinUI](https://github.com/iTwin/iTwinUI)) accordingly within the page with minimal effort on the development side.

---

## Installation

```
npm install @itwin/itwinui-layouts-css
```

```
yarn add @itwin/itwinui-layouts-css
```

---

## Usage

```css
// app.css
import "@itwin/itwinui-layouts-css";
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

---

## Contributing

We welcome you to contribute and make this layouts library better. You can submit feature requests or bugs by creating an [issue](https://github.com/iTwin/iTwinUI-layouts/issues).
Please read our [CONTRIBUTING.md](https://github.com/iTwin/iTwinUI-layouts/blob/main/CONTRIBUTING.md) for more information.
