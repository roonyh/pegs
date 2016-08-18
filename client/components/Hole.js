import React from 'react'
import {StaggeredMotion, spring} from 'react-motion';

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

  if(moved && selected) {
    const movedStyle = {};
    const cutStyle = {};

    let propRelative = 'top';
    switch (moved) {
      case 'up':
        propRelative = 'top';
        cutStyle.top = '32px';
        break;
      case 'down':
        propRelative = 'bottom';
        cutStyle.bottom = '128px';
        break;
      case 'left':
        propRelative = 'left';
        cutStyle.bottom = '48px';
        cutStyle.left = '80px';
        break;
      case 'right':
        propRelative = 'right';
        cutStyle.bottom = '48px';
        cutStyle.right = '80px';
        break;
      default:
    }

    peg = (
      <StaggeredMotion
        defaultStyles={[{h: 160}, {h: 48}]}
        styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
          return i === 0
            ? {h: spring(0, {stiffness: 300, damping: 27})}
            : {h: spring(0, {stiffness: 10, damping: 2})}
        })}>
        {
          interpolatingStyles => {
            movedStyle[propRelative] = interpolatingStyles[0].h;
            cutStyle.width = interpolatingStyles[1].h;
            cutStyle.height = interpolatingStyles[1].h;

            return (
              <div>
                <div style={{...is, ...movedStyle}}>
                  &nbsp;
                </div>
                <div style={{...is, ...cutStyle}}>
                  &nbsp;
                </div>
              </div>
            );
          }
        }
      </StaggeredMotion>
    );
  }

  return (
    <div style={ws}>
      { peg }
    </div>
  );
}

export default Hole