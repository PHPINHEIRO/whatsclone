import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from '@firebase/app'

import Routes from './src/Routes';
import reducers from './src/reducers'
import {config} from './firebaseConfig'

export default class App extends Component {

  componentWillMount(){
    firebase.initializeApp(config);
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes></Routes>
      </Provider>
    );
  }
}

