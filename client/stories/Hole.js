import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import Hole from '../components/Hole';

storiesOf('Hole', module)
  .add('Empty hole', () => (
    <Hole hole='E'/>
  ))
  .add('Filled', () => (
    <Hole hole='P'/>
  ))
  .add('Selected', () => (
    <Hole hole='P' selected/>
  ))
  .add('Locked', () => (
    <Hole hole='P' locked selected/>
  ))
  .add('Moved peg', () => (
    <div style={{width: '80px'}}>
      <Hole hole='P' moved selected/>
      <Hole hole='E' />
      <Hole hole='E' />
    </div>
  ))

