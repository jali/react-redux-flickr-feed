import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer'

const middleware = applyMiddleware(promise(), thunk, logger());

export default createStore(reducer, composeWithDevTools(middleware));
