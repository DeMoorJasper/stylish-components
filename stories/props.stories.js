import React from 'react';

import { storiesOf } from '@storybook/react';

import { stylish, css } from '../index';

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

storiesOf('Props', module)
  .add('button', () => {
    return <div>
      <Button>Button 🚀</Button>
      <Button primary="true">Button 🚀</Button>
    </div>;
  });