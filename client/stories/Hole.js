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
  .add('Moved up peg', () => (
    <div style={{width: '80px'}}>
      <Hole hole='P' moved={'up'} selected/>
      <Hole hole='E' />
      <Hole hole='E' />
    </div>
  ))
  .add('Moved down peg', () => (
    <div style={{width: '80px'}}>
      <Hole hole='E' />
      <Hole hole='E' />
      <Hole hole='P' moved={'down'} selected/>
    </div>
  ))
  .add('Moved left peg', () => (
    <div style={{width: '240px'}}>
      <Hole hole='P' moved={'left'} selected/>
      <Hole hole='E' />
      <Hole hole='E' />
    </div>
  ))
  .add('Moved right peg', () => (
    <div style={{width: '240px'}}>
      <Hole hole='E' />
      <Hole hole='E' />
      <Hole hole='P' moved={'right'} selected/>
    </div>
  ))


