import { createStore, applyMiddleware } from 'redux';

// Gives us access to redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';

// Middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method.
import thunk from 'redux-thunk';

import reducers from './reducers/index';

// import action to load all jobs from database
import { loadApps } from './actions/actions';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

// Dispatch load Apps to load all job entries
store.dispatch(loadApps());

export default store;
