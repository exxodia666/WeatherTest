import { createStore } from 'redux';
import rootReducer from './reducers';
import { applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import root from './sagas';


const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch;
sagaMiddleware.run(root);