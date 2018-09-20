import React from 'react';
import ReactDom from 'react-dom';
import App from '../src/views/App'
import {Provider} from 'react-redux'
import configureStore from './reducers/index'
let store = configureStore()

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
