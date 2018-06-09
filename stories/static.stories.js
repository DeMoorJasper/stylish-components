import React from 'react';

import { storiesOf } from '@storybook/react';

import { stylish } from '../src/dist';

const Div = stylish.div`
  background: #ffffff;
  color: #a2a2a2;
  border: solid 5px #a2a2a2;
  padding: 20px;
`;

const Button = stylish.button`
  background: #ffffff;
  color: #a2a2a2;
  border: 1px solid #a2a2a2;
  border-radius: 5px;
  width: 100px;
  padding: 5px 10px;
`;

const Input = stylish.input`
  display: block;
  border: 1px solid #a2a2a2;
  color: #a2a2a2;
  border-radius: 5px;
  margin-bottom: 10px;
  width: 100px;
  padding: 5px 10px;
`;

storiesOf('Static styles', module)
  .add('div', () => {
    return <Div>This is a div</Div>;
  })
  .add('input', () => {
    return <Input type="text" placeholder="Hello 👋" />;
  })