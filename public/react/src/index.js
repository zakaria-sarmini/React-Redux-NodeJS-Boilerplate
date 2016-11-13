import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory} from 'react-router'
import Routes from './routes';
import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";
import {Provider} from "react-redux";

const dataReducer = (state = {
    greet: "Hello World !"
}, action) => {
    switch (action.type) {
        case "CHANGE":
            state = {
                ...state,
                greet: action.payload
            };
            break;

    }
    return state;
};

const store = createStore(combineReducers({data: dataReducer}), {}, applyMiddleware(logger()));

ReactDOM.render(
    <Provider store={store}>
        <Routes history={browserHistory}/>
    </Provider>,
    document.getElementById('root')
);
