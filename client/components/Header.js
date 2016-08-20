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
    textAlign: 'center'
  }
}

export default () => (
  <div>
    <div style={styles.header}>Pegs</div>
    <div style={styles.body}>remove all pegs but one</div>
  </div>
)