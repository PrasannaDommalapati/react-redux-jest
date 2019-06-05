import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from '../reducers/root-reducer';

// Create store
export const middleswares = [ReduxThunk];
export const createStoreWithMiddlesware = applyMiddleware(...middleswares)(createStore);

const store = createStoreWithMiddlesware(reducers);

// store.dispatch(actionLoadElements());

export default store;
