import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//BOILERPLATE CODE. need ALL of these following lines in order for Redux to part of React application. 
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import marvelApp from './reducers'

//Bringing in bootstrap-React
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

//create a store, passing a reducer and applying this store to the entire React application as middleware using Thunk. Making this store part of our React app.
let store = createStore(marvelApp, applyMiddleware(thunk))

ReactDOM.render(
//provider's goal is to pass a store 
<Provider store={store}>
    <App />   
</Provider> 
, document.getElementById('root'));
registerServiceWorker();
