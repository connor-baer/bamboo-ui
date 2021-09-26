<div align="center">

# [🎋 Bamboo UI](https://bamboo.madebyconnor.co)

[Bamboo UI](https://bamboo.madebyconnor.co) is a component library built with [TypeScript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [CSS modules](https://github.com/css-modules/css-modules), and [Feather icons](https://feathericons.com/).

</div>

## Table of Contents

- [Quick start](#quick-start)
- [Usage](#usage)
  - [CSS module loader](#css-module-loader)
  - [Import base styles](#base-styles)
  - [Import components](#importing-components)
- [Contributing](#contributing)
  - [Installing dependencies](#installing-dependencies)
  - [Running Storybook](#running-storybook)
  - [Linting and formatting](#linting-and-formatting)
  - [Testing](#testing)
- [Design principles](#design-principles)
  - [Focused](#focused)
  - [Inclusive](#inclusive)
  - [Organic](#organic)
- [Why is it called Bamboo UI?](#why-is-it-called-bamboo-ui)

## Quick start

To add Bamboo UI to your project, run the following command:

```sh
yarn add @madebyconnor/bamboo-ui
# or using npm
npm install @madebyconnor/bamboo-ui
```

Bamboo UI is built using [React](https://reactjs.org/), so `react` and `react-dom` are required peer dependencies. If you don't have them installed yet, run the following command in your project:

```sh
yarn add react react-dom
# or using npm
npm install react react-dom
```

## Usage

### CSS module loader

Bamboo UI uses [CSS modules](https://github.com/css-modules/css-modules) for styling which are imported into the JavaScript files. A custom loader is needed to make this work.

Popular React frameworks such as [Next.js](https://nextjs.org/docs/basic-features/built-in-css-support#adding-component-level-css) and [Create React App](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/) support CSS modules out of the box, though you might need additional configuration to enable this for node modules (e.g. [`next-transpile-modules`](https://github.com/martpie/next-transpile-modules#cssscss-support)).

If you are not using a framework or starter kit with CSS module support, you need to add and configure the [`css-loader`](https://github.com/webpack-contrib/css-loader#modules) for Webpack or find a similar loader for your bundler of choice.

### Import base styles

Bamboo UI's components rely on a two global stylesheet to work properly.

- `theme.css` contains the default CSS variables for both light and dark mode. You can override individual variables or create a custom theme.
- `base.css` contains a small [CSS reset](https://meyerweb.com/eric/tools/css/reset/) and a handful of other global styles such as font-face declarations and custom [`::selection`](https://developer.mozilla.org/en-US/docs/Web/CSS/::selection) styles.

Import the stylesheets in your application globally and before any other imports from Bamboo UI. For example, in Next.js you should import the stylesheets in the [`_app.js`](https://nextjs.org/docs/advanced-features/custom-app) file:

```ts
// ./pages/_app.js
import '@madebyconnor/bamboo-ui/theme.css';
import '@madebyconnor/bamboo-ui/base.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### Import components

Once the initial setup is done, importing and using the components is straightforward:

```tsx
import { Button } from '@madebyconnor/bamboo-ui';

function App() {
  return (
    <Button variant="primary" onClick={() => alert('Hello')}>
      Say hello
    </Button>
  );
}
```

You can add custom styles to a component by passing in a `className` prop:

```tsx
import { Button } from '@madebyconnor/bamboo-ui';

function App() {
  return (
    <Button className="spacing-bottom" onClick={() => alert('Hello')}>
      Say hello
    </Button>
  );
}
```

## Contributing

If you have ideas for how I could improve this README or the project in general, [let me know](https://github.com/connor-baer/bamboo-ui/issues) or [make a pull request](https://github.com/connor-baer/bamboo-ui/edit/master/README.md). Below are some tips how to make changes to the project:

### Installing dependencies

This project uses `yarn` to manage its dependencies. Once you've [cloned](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository) the repository, navigate to the project folder in your terminal and run the following command to install all dependencies:

```sh
yarn
```

### Running Storybook

I use [Storybook](https://storybook.js.org/) as a development workbench and to document the components. To start Storybook and open it in your browser, run the following command:

```sh
yarn start
```

### Linting and formatting

I use [Foundry](https://github.com/sumup-oss/foundry), SumUp's toolkit for building JavaScript & TypeScript applications, to manage the linting and formatting configs. The linter and TypeScript run on every commit to ensure high code quality. You can also lint manually by running the following commands:

```sh
# Lint and report issues
yarn lint
# Same as above, but also tries to fix issues automatically
yarn lint:fix
```

### Testing

The majority of the components are purely visual and TypeScript gives me a high level of confidence in the code. For these reasons and since this is only a personal project, I've opted to keep the number of tests to a minimum. You can run the tests using the following command:

```sh
yarn test
```

## Design principles

I use Bamboo UI primarily for small, personal side-projects. The 3 core principles below represent the experience I envision for these projects. My definition and understanding of these principles is constantly evolving and so is Bamboo UI.

### Focused

I get easily overwhelmed or distracted when using applications that present a lot of information at once. Bamboo UI inspires focus with a simple, distraction-free design: A single column layout guides the eye in a straight line through the flow of information. Plenty of white space provides room to breathe for the content and user. Large typography highlights important information and gives structure to a page.

### Inclusive

Although I mainly use Bamboo UI in personal projects, I strive to make it as accessible as possible. I use native HTML elements whenever possible and enhance custom components to be keyboard-navigable and have basic screen-reader support. Animations are designed to feel natural and can be turned off entirely.

### Organic

I want Bamboo UI to feel comforting and playful like an airy, sun-filled forest in spring, the soothing rhythm of ocean waves rolling onto a pebble beach, or the serene weightlessness when scuba diving among colorful fish around a coral reef. Nature is perfect in its imperfections: shapes are rounded, not square, motions are fluid and random, and colors change with the light and perspective.

## Why is it called Bamboo UI?

My family name translates to _bear_, my favourite bears are pandas, and pandas eat lots of bamboo. Plus, bamboo is a versatile and organic [building material](https://qz.com/367284/spectacular-bamboo-architecture/) — qualities that I strive for with this component library.
