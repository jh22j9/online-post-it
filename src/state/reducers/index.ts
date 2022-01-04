import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import boardReducer from './boardReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({
  postBoard: boardReducer,
});

export default persistReducer(persistConfig, reducers);

export type State = ReturnType<typeof reducers>;
