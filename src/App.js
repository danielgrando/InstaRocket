import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    );
  }
}
