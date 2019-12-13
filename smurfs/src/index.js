import React from "react";
import ReactDOM from "react-dom";

//import createStore and applyMiddleware
import { createStore, applyMiddleware } from 'redux';
import { Povider } from 'react-redux'
import thunk from 'redux-thunk'
import { smurfReducer } from './reducers/smurfReducer.js'

import "./index.css";
import App from "./components/App";

const store = createStore(
    smurfReducer,
    applyMiddleware(thunk)
);


//wrap App with Provider 
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById("root"));
