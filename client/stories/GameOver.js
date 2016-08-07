import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import GameOver from '../components/GameOver';

storiesOf('Game Over', module)
  .add('you lost', () => (
    <div style={{width: "400px"}}>
     <GameOver remaining={7} />
    </div>
  ))
  .add('you won', () => (
    <div style={{width: "400px"}}>
      <GameOver remaining={1} />
    </div>
  ))