import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { applyMiddleware, compose } from 'redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'                  

const store=createStore(rootReducer, compose(   
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore})),            
  reduxFirestore(fbConfig),
  reactReduxFirebase(fbConfig)
  ));   
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>          
  </React.StrictMode>,
  document.getElementById('root')
);
                     


       