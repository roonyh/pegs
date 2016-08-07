import { createStore, compse } from 'redux';

// import the root reducer
import rootReducer from './reducers/index';

const board = [
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['P', 'P', 'P', 'E', 'P', 'P', 'P'],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
  ['X', 'X', 'P', 'P', 'P', 'X', 'X'],
]

const defaultState = {
  game: {
    board,
    selected: {x:3, y:3},
    locked: false,
    gameOver: false,
  }
};

const store = createStore(rootReducer, defaultState, window.devToolsExtension && window.devToolsExtension());

export default store;

export { defaultState };
