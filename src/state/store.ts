import { createStore } from 'redux';
import reducers from './reducers';
import { persistStore } from 'redux-persist';

import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools());
const persistor = persistStore(store);

export { store, persistor };
