import { combineReducers } from 'redux';
import boardReducer from './boardReducer';

const reducers = combineReducers({
  postBoard: boardReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
