# z11
Monorepo for the z11 design language, SASS library, and Components

## Packages

* `@z11/build`
  * Tools for building the z11 library consistently.
  * Distributes a CommonJS module.
  * Located in [`./scripts`](./scripts).
* `@z11/docs`
  * Documentation for the z11 design guidelines and components.
  * Located in [`./docs`](./docs).
* `@z11/shared-tokens`
  * Utility library containing useful values based on the z11 design guidelines.
  * Distributes CommonJS modules (`lib/`).
  * Located in [`./packages/shared-tokens`](./packages/shared-tokens).
* `@z11/z11-theme`
  * Default theme for z11 components and web pages.
  * Distributes AMD (`lib-amd/`), ES2015 (`lib/`), and CommonJS(`lib-commonjs/`) modules, as well as a `dist/` folder containing a `sass/` and `css/` folder, which themeselves contain the several theme folder, which contain files theme variables or custom properties. The available themes are:
    * `default` 
    * `gray`
    * `dark`
  * Located in [`./packages/z11-theme`](./packages/z11-theme).
* `@z11/prototype`
  * A prototyping library to help with building components and themes based on the `@z11/shared-tokens` tokens.
  * Provides a massive amount of utility classes.
  * Distributes `.css` files (`dist/css`)
  * Located in [`./packages/prototype`](./packages/prototype).
* `@z11/webpages`
  * HTML/CSS library for web pages.
  * Uses `@z11/z11-theme` by default, but can be cloned and built with another theme.
  * Distributes a single `.css` file.
  * Does **NOT** cont ain components.
  * Located in [`./packages/webpages`](./packages/webpages).
* `@z11/vanilla-components`
  * HTML/CSS components using standard JavaScript for component interaction.
  * Uses `@z11/z11-theme` by default, but can be cloned and built with another theme.
  * Distributes both modular and bundled CSS and JS.
  * Located in [`./packages/vanilla-components`](./packages/vanilla-components).
* `@z11/react-components`
  * Components built using React for rendering and component interaction.
  * Uses `@z11/z11-theme` by default, but another theme can be provided at app startup.
  * Distributes AMD, ES2015, and CommonJS modules.
  * Located in [`./packages/react-components`](./packages/react-components).
* `@z11/svelte-components`
  * Components built using Svelte for rendering and component interaction.
  * Uses `@z11/z11-theme` by default, but another theme can be provided at app startup.
  * Distributes AMD, ES2015, and CommonJS modules.
  * Located in [`./packages/svelte-components`](./packages/svelte-components).

## Workflow
### Distribution
1. Load a distributed theme `.css` file containing the custom properties for the theme.
2. Load the distributed `@z11/webpages` `.css` file.
3. Use components.

**Example**
```html
<html>
  <head>
    <title>My App</title>
    <link id="theme-switcher" rel="stylesheet" type="text/css" href="/assets/css/z11-theme-default.css" />
    <link rel="stylesheet" type="text/css" href="/assets/css/z11-webpages.css" />
    <link rel="stylesheet" type="text/css" href="/assets/css/z11-vanilla-components.css" />
  </head>
  <body>
    ...
    <script type="text/javascript" src="/assets/js/z11-vanilla-components.js"></script>
    <script type="text/javascript" src="/app/main.js">
  </body>
</html>
```


## Components

## Documentation
