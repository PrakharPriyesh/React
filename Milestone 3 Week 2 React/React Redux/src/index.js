import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import loginReducer from './store/reducers/login';
import productReducer from './store/reducers/product';


// const rootReducer = combineReducers({
//     login: loginReducer,
//     product: productReducer,
// })

const store = createStore(productReducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
