import { ActionCreators } from 'redux-undo';

// moves
export function moveUp() {
  return {
    type: 'MOVE_UP',
  }
}

export function moveDown() {
  return {
    type: 'MOVE_DOWN',
  }
}

export function moveLeft() {
  return {
    type: 'MOVE_LEFT',
  }
}

export function moveRight() {
  return {
    type: 'MOVE_RIGHT',
  }
}

export function moveTo(x, y) {
  return {
    type: 'MOVE_TO',
    x,
    y,
  }
}

export function lock() {
  return {
    type: 'LOCK',
  }
}

export function lockAt(x, y) {
  return {
    type: 'LOCK_AT',
    x,
    y,
  }
}

export function reset() {
  return {
    type: 'RESET',
  }
}

const { undo, redo } = ActionCreators;

export { undo, redo }
