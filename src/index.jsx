import React from 'react';
import ReactDOM from 'react-dom';
import immutable from 'immutable';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root';
import App from './components/App';

const reduxLogger = createLogger({
    duration: true
});

const middlewares = [thunk];

if (__DEV__ || __STAGING__) {
    const installDevTools = require('immutable-devtools');
    installDevTools(immutable);
    middlewares.push(reduxLogger);
}

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
);

if (__DEV__ || __STAGING__) {
    const installDevTools = require('immutable-devtools');
    installDevTools(immutable);
}

const rootEl = document.getElementById('app');

const render = (Component) => {
    ReactDOM.render(
        <Provider store={store}>
            <Component/>
        </Provider>,
        rootEl
    );
};

/**
 * The init function is used to be sure, that chayns® will be ready until render() is called
 * @return {Promise.<void>}
 */
async function init() {
    try {
        await chayns.ready;

        render(App);
    } catch (err) {
        console.error('no chayns environment found', err);
    }
}

init();
