import React from 'react'

const styles = {
  wrapper: {
    boxSizing: 'border-box',
    width: '80px',
    height: '80px',
    margin: '0 auto',
    display: 'inline-block',
    padding: '16px',
    verticalAlign: 'middle',
    backgroundColor: 'rgb(28, 29, 30)',
  },
  inside: {
    boxSizing: 'border-box',
    width: '48px',
    height: '48px',
    verticalAlign: 'middle',
    backgroundColor: 'rgb(56, 69, 77)',
    borderRadius: '25px',
    border: '5px solid rgb(28, 29, 30)',
  }
}

styles.selectedWrapper = {
  ...styles.wrapper,
  backgroundColor: 'rgb(120, 104, 86)',
  border: '5px solid rgb(28, 29, 30)',
  padding: '11px',
}

styles.lockedWrapper = {
  ...styles.wrapper,
  backgroundColor: 'rgb(120, 104, 86)',
  border: '0px',
  padding: '21px',
}

styles.lockedInside = {
  ...styles.inside,
  border: '0px',
  width: '38px',
  height: '38px',
}

styles.emptyInside = {
  ...styles.inside,
  display: 'none',
}

const Hole = ({hole, selected, locked, onKeyDown}) => {
  let ws = selected ? styles.selectedWrapper : styles.wrapper;
  ws = selected && locked ? styles.lockedWrapper : ws;
  let is = selected && locked ? styles.lockedInside : styles.inside;
  is = hole=='E' ? styles.emptyInside : is;

  return (
    <div style={ws}>
      <div style={is}>
        &nbsp;
      </div>
    </div>
  )
}

export default Hole