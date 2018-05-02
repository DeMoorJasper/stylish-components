import React from 'react';

import { storiesOf } from '@storybook/react';

import { stylish, css } from '../index';

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
  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}

  ${props => props.hello && css`
    background: palevioletred;
    color: yellow;
  `}
`;

storiesOf('Props', module)
  .add('button', () => {
    return <div>
      <Button>Button 🚀</Button>
      <Button primary="true">Button 🚀</Button>
      <Button hello="true">Button 🚀</Button>
    </div>;
  });