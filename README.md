<div align="center">

# [🎋 Bamboo UI](https://bamboo.connor.li) <!-- omit in toc -->

[Bamboo UI](https://bamboo.connor.li) is the web incarnation of the [SumUp](https://sumup.com) Bamboo Design System. Our primary goal is to create a system that can be used to build a wide variety of SumUp websites and apps, while providing a consistent user experience to our end users. In addition, the design system and component library should be easy to use for developers and designers.

</div>

## Table of Contents <!-- omit in toc -->

- [Getting started](#getting-started)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Linting and formatting](#linting-and-formatting)
- [Testing](#testing)
- [Utils](#utils)
- [Creating components](#creating-components)
- [Contributing](#contributing)

## Getting started

Here are a few helpful links for getting started with Bamboo UI:

- [Getting started](http://bamboo.connor.li/#/getting-started/developers) - Install and configure Bamboo for your React app
- [Styles](http://bamboo.connor.li/#/styles/colors) - Learn about our foundations such as colors, spacing, and typography.
- [Guidelines](http://bamboo.connor.li/#/guidelines/content) - Use the design system in a compliant way.
- [Components](http://bamboo.connor.li/#/components/badge) - Explore the available UI components.

## Installation

```
yarn add @madebyconnor/bamboo-ui
```

## Development

```
yarn && yarn start
```

## Deployment

```
yarn deploy
```

## Linting and formatting

```
yarn fix:prettier
yarn fix:estlint
yarn fix:stylelint

yarn fix # Run all autofixing
```

## Testing

```
yarn test:unit:watch
```

```javascript
import React from 'react';
import Button from '.';

describe('Button', () => {
  it('should not render if there is no click handler, label, or children', () => {
    const button = create(<Button />);
    expect(button).toMatchSnapshot();
  });
  it('should take the body text as a child', () => {
    const output = mount(<Button onClick={() => {}}>Hello World</Button>);
    expect(output.text()).toContain('Hello World');
  });
});
```

## Utils

Besides the component library, we also export some utilities which you
might need in order to use the components. Two main ones:

- `numbersUtils` - a module for dealing with number localization.
- `currencyUtils` - a module for formatting currency amounts.
- `styleHelpers` - a module containing helpers for writing styles.

## Creating components

This project uses [@sumup/foundry](https://www.npmjs.com/package/@sumup/foundry) and the provided `plop` command to generate new React components. The functionality is exposed as the `create-component` npm script from package.json.

To create a new component, run `yarn create-component` inside the project. You'll see a CLI that guides you through the process.

After the CLI has finished, all files will have been created in the location you specified.

## Contributing

If you have ideas for how we could improve this readme or the project in general, [let us know](https://github.com/connor-baer/bamboo-ui/issues) or [contribute some](https://github.com/connor-baer/bamboo-ui/edit/master/README.md)!
