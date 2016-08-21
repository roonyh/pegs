import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
import persistState from 'redux-localstorage'

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

const enhancer = compose(
  persistState(),
  window.devToolsExtension && window.devToolsExtension()
)
const store = createStore(rootReducer, defaultState, enhancer);

export default store;
export { defaultState };
