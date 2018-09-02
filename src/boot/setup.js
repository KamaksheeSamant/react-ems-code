// setting up root component app

import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import App from './App';

export default class SetUp extends Component {

  constructor() {
    super();
    this.state = {
      store: configureStore()
    };
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App />
      </Provider>
    );
  }
}
