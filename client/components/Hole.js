import React from 'react'
import {Motion, spring} from 'react-motion';

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
    position: 'relative',
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

const Hole = ({hole, selected, locked, moved, onKeyDown}) => {
  let ws = selected ? styles.selectedWrapper : styles.wrapper;
  ws = selected && locked ? styles.lockedWrapper : ws;
  let is = selected && locked ? styles.lockedInside : styles.inside;
  is = hole=='E' ? styles.emptyInside : is;

  let peg = (
    <div style={is}>
      &nbsp;
    </div>
  );

  if(moved) {
    peg = (
      <Motion defaultStyle={{x: 160}} style={{x: spring(0)}}>
        {
          value => (
            <div style={{...is, top: value.x}}>
              &nbsp;
            </div>
          )
        }
      </Motion>
    );
  }

  return (
    <div style={ws}>
      { peg }
    </div>
  );
}

export default Hole