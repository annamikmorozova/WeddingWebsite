import {createStore, applyMiddleware} from "redux";
import {createLogger} from "redux-logger";
import thunkMiddleware from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./store";
window.React1 = require('react');

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

const middleware = composeWithDevTools(
	applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./store";