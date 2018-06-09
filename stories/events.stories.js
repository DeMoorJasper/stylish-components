import React from 'react';

import { storiesOf } from '@storybook/react';

import { stylish } from '../src/dist';

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

storiesOf('Event styles', module)
  .add('button', () => {
    return <Button>Button 🚀</Button>;
  });