import React from 'react';

const styles = {
  header: {
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontSize: '25px',
    padding: '10px',
    color: 'rgb(162, 145, 124)',
    textAlign: 'center'
  },
  body: {
    fontFamily: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
    fontSize: '15px',
    padding: '10px',
    color: 'rgb(162, 145, 124)',
    textAlign: 'center',
    lineHeight: '25px',
  }
}

export default () => (
  <div>
    <div style={styles.header}>How to play</div>
    <div style={styles.body}>
      To remove a peg, jump over it with another peg.<br />
      Can only jump up, down left or right. No diagonal jumps.
    </div>
    <div style={styles.header}>Controls</div>
    <div style={styles.body}>
      <b>Arrow keys</b> to move.<br />
      <b>Space bar</b> to select a peg.<br />
      <b>Arrow keys</b>, again to jump while a peg is selected.<br />
      <b>Z</b> to undo.<br />
      <b>R</b> to reload.<br />
    </div>
  </div>
)