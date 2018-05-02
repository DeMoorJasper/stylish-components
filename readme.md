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

### Use props to create dynamic styling

```Javascript
import { stylish } from 'stylish-components';

const Button = stylish.button`
  background: #ffffff;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

export default () => {
  return <div>
    <Button>Button 🚀</Button>
    <Button primary="true">Button 🚀</Button>
  </div>;
}
```

You can also use variables that don't depend on props, using the standard template literal syntax.

```Javascript
import { stylish } from 'stylish-components';

let bg = '#ffffff';
let color = '#ffffff';
let randomColor = () => `#${Array.apply(null, Array(6)).map(el => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('')}`;

const Button = stylish.button`
  background: ${bg};
  color: ${color};
  border: 1px solid ${randomColor()};
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
`;

export default () => {
  return <div>
    <Button>Button 🚀</Button>
    <Button primary="true">Button 🚀</Button>
  </div>;
}
```

Always utilise props in a seperate block (preferably at the end of the css), otherwise it might not work

Bad example (⚠️ this will not work)

```Javascript
const AnotherWrongButton = stylish.button`
  background: ${props => props.primary && 'palevioletred'};
  color: #a2a2a2;
`;
```
