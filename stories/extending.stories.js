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
  display: inline-block;
`;

const ExtendedButton = Button.extend`
  background: purple;
  color: white;
`;

const SuperExtendedButton = ExtendedButton.extend`
  border-radius: 50px;
`;

const MegaExtendedButton = SuperExtendedButton.extend`
  display: block;
`;

storiesOf('Extending styles', module)
  .add('button', () => {
    return <div>
      <Button>Normal</Button>
      <ExtendedButton>Extended</ExtendedButton>
      <SuperExtendedButton>Double Extended</SuperExtendedButton>
      <MegaExtendedButton>Triple Extended</MegaExtendedButton>
    </div>;
  })