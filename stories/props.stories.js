import React from 'react';

import { storiesOf } from '@storybook/react';

import { stylish, css } from '../src/dist';

let color = '#a2a2a2';
let bg = '#ffffff';

let randomColor = () => `#${Array.apply(null, Array(6)).map(el => '0123456789ABCDEF'[Math.floor(Math.random() * 16)]).join('')}`;

const Button = stylish.button`
  background: ${bg};
  color: ${color};
  border: 1px solid ${randomColor()};
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
  margin: 10px;
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

  ${props => props.hello && css`
    background: palevioletred;
    color: yellow;
  `}
`;

const ExtendedButton = Button.extend`
  ${props => props.extended && css`
    background: yellow;
    color: white;
  `}
`;

storiesOf('Props', module)
  .add('button', () => {
    return <div>
      <Button>Button 🚀</Button>
      <Button primary="true">Button 🚀</Button>
      <Button hello="true">Button 🚀</Button>
    </div>;
  })
  .add('extended button', () => {
    return <div>
      <Button hello="true">Button 🚀</Button>
      <ExtendedButton extended="true">Extended 🚀</ExtendedButton>
    </div>;
  });;