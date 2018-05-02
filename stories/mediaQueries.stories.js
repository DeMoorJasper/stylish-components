import React from 'react';

import { storiesOf } from '@storybook/react';

import { stylish } from '../index';

const Div = stylish.div`
  background: #ffffff;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  padding: 5px 10px;
  @media (max-width: 400px) {
    background: #000000;
    color: #ffffff;
  }
  &:hover {
    color: red;
    background: #a2a2a2;
  }
`;

const P = stylish.p`
  font-family: sans-serif;
`;

storiesOf('Media queries', module)
  .add('div', () => {
    return <Div>
      <P>Resize the screen to see the effect (trigger is 400px width)</P>
    </Div>;
  });