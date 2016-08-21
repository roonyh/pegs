import { combineReducers } from 'redux';
import undoable from 'redux-undo';

import game from './game';

const rootReducer = combineReducers({game});

export default undoable(rootReducer, {limit: 50});
