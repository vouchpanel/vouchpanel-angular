# @vouchpanel/angular

[![Package Version][package-image]][package-url]
[![Open Issues][issues-image]][issues-url]
[![Build Status][build-image]][build-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependencies Status][dependencies-image]][dependencies-url]
[![Dev Dependencies Status][dev-dependencies-image]][dev-dependencies-url]
[![Commitizen Friendly][commitizen-image]][commitizen-url]

Quickly embed a vouchpanel into your Angular project.

### How To Use

Install with yarn (or `npm install`):

```bash
yarn add @vouchpanel/angular
```

Include it as a module.

```tsx
import { VouchpanelModule } from '@vouchpanel/angular'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    VouchpanelModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Add the following to the corresponding angular template. Replace `id` with your wall id from [app.vouchpanel.com](https://app.vouchpanel.com).
```tsx
// *.component.html
<vouchpanel darkMode="off" id="4"></vouchpanel>
```

[project-url]: https://github.com/vouchpanel/vouchpanel-angular
[package-image]: https://img.shields.io/npm/v/@vouchpanel/angular
[package-url]: https://www.npmjs.com/package/@vouchpanel/angular
[issues-image]: https://img.shields.io/github/issues/vouchpanel/vouchpanel-angular.svg?style=popout
[issues-url]: https://github.com/vouchpanel/vouchpanel-angular/issues
[build-image]: https://travis-ci.org/vouchpanel/vouchpanel-angular.svg?branch=master
[build-url]: https://travis-ci.org/vouchpanel/vouchpanel-angular
[coverage-image]: https://coveralls.io/repos/github/vouchpanel/vouchpanel-angular/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/vouchpanel/vouchpanel-angular?branch=master
[dependencies-image]: https://img.shields.io/david/vouchpanel/vouchpanel-angular
[dependencies-url]: https://www.npmjs.com/package/@vouchpanel/angular
[dev-dependencies-image]: https://img.shields.io/david/dev/vouchpanel/vouchpanel-angular
[dev-dependencies-url]: https://www.npmjs.com/package/@vouchpanel/angular
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]: http://commitizen.github.io/cz-cli
