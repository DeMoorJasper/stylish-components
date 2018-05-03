# Stylish components

Stylish components is a blazing fast, lightweight, component styling library similar to `styled-components`.

## Compared to styled-components

This package is lacking a lot of the features styled-components provides, but provides all the features I personally use. I might add theming and animations if requested or if I need them personally.

### File size comparison

| Type        | styled-components | tiny-stylish-components      |
|---          |---                |---                           |
| **Regular** | 43kB              | **3.9kB**                    |
| **gzipped** | 16.3kB            | **1.7kB**                    |

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