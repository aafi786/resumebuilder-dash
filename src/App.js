import React, { Component } from 'react';
import LayoutMain from './Layout';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import './App.css';

export default class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div>
            <Switch>

              <Route exact path="/" component={LayoutMain} />

            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

