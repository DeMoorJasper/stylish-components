# Stylish components

Stylish components is a blazing fast, lightweight, component styling library similar to `styled-components`.

## Usage

### Creating a simple stylish-component

```Javascript
import { stylish } from 'stylish-components';

const Button = stylish.button`
  background: #ffffff;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
`;
```

### Handle css events

```Javascript
import { stylish } from 'stylish-components';

const Button = stylish.button`
  background: #ffffff;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
  &:hover {
    color: red;
    background: #a2a2a2;
  }
`;
```

### Handle media queries

```Javascript
import { stylish } from 'stylish-components';

const Button = stylish.button`
  background: #ffffff;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
  @media (max-width: 400px) {
    background: #000000;
    color: #ffffff;
  }
`;
```

### Extending a stylish-component

Extending components can be chained

```Javascript
import { stylish } from 'stylish-components';

const Button = stylish.button`
  background: #ffffff;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
`;

const ExtendedButton = Button.extend`
  color: pink;
`;

const SuperExtendedButton = ExtendedButton.extend`
  border-radius: 50px;
`;

const MegaExtendedButton = SuperExtendedButton.extend`
  display: block;
`;
```