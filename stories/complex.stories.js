import React from 'react';

import { storiesOf } from '@storybook/react';

import { stylish } from '../index';

const Div = stylish.div`
  width: 100%;
  background: blue;
  color: white;
  &:hover {
    color: yellow;
  }
  @media (max-width: 400px) {
    background: #000000;
    color: #ffffff;
    &:hover {
      color: blue;
    }
  }
`;

storiesOf('Complex styles', module)
  .add('div', () => {
    return <Div>Complex styling 🚀</Div>;
  });