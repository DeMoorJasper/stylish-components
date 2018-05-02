# Stylish components

Stylish components is a blazing fast, lightweight, component styling library similar to `styled-components`.

## Getting started

Install:

```bash
  yarn add tiny-stylish-components
```

or

```bash
  npm install tiny-stylish-components -S
```

Creating a component:

```Javascript
import { stylish } from 'tiny-stylish-components';

const Button = stylish.button`
  background: #ffffff;
  color: #a2a2a2;
  border: none;
`;

render() {
  return <Button>I am a button! Click Me!</Button>;
}
```

Have a look at the full [documentation](documentation.md) for more advanced use-cases!