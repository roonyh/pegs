import React from 'react'

const styles = {
  wrapper: {
    boxSizing: 'border-box',
    width: '80px',
    height: '80px',
    margin: '0 auto',
    display: 'inline-block',
    padding: '15px',
    verticalAlign: 'middle',
    backgroundColor: 'rgb(75, 75, 115)',
  },
  inside: {
    boxSizing: 'border-box',
    width: '50px',
    height: '50px',
    lineHeight: '50px',
    verticalAlign: 'middle',
    backgroundColor: 'rgb(145, 135, 175)',
    borderRadius: '25px',
  }
}

styles.selectedWrapper = {
  ...styles.wrapper,
  backgroundColor: 'rgb(70, 20, 20)',
}

styles.lockedWrapper = {
  ...styles.wrapper,
  backgroundColor: 'rgb(70, 20, 20)',
  border: '5px solid',
  borderColor: 'rgb(125, 90, 90)',
  padding: '10px',
}

styles.lockedInside = {
  ...styles.inside,
  border: '5px solid',
  borderColor: 'rgb(125, 90, 90)',
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