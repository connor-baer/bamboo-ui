<div align="center">

# [🎋 Bamboo UI](https://bamboo.madebyconnor.co) <!-- omit in toc -->

[Bamboo UI](https://bamboo.madebyconnor.co) is a collection of React components and utils that I use across my various web projects to save development time and provide a consitency experience to the users.

</div>

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Linting and formatting](#linting-and-formatting)
- [Testing](#testing)
- [Utils](#utils)
- [Creating components](#creating-components)
- [Contributing](#contributing)

## Installation

```
yarn add @madebyconnor/bamboo-ui
```

## Development

```
yarn start
```

## Deployment

```
yarn deploy
```

## Linting and formatting

```
yarn lint
yarn fix
```

## Testing

```
yarn test:unit:watch
```

```js
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
might need in order to use the components. The main ones:

- `sharedPropTypes` - a module with common prop types used in the components.
- `themeHelpers` - a module containing helpers for generating a theme.
- `isServer` - a module that checks whether the code is running on a server.
- `isSaveData` - a module that checks the user's network speed and preferences.

## Creating components

This project uses [@sumup/foundry](https://www.npmjs.com/package/@sumup/foundry) and the provided `plop` command to generate new React components. The functionality is exposed as the `create:component` npm script from package.json.

To create a new component, run `yarn create:component` inside the project. You'll see a CLI that guides you through the process.

After the CLI has finished, all files will have been created in the location you specified.

## Contributing

If you have ideas for how we could improve this readme or the project in general, [let me know](https://github.com/connor-baer/bamboo-ui/issues) or [contribute some](https://github.com/connor-baer/bamboo-ui/edit/master/README.md)!
