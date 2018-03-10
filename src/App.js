import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import RegionPicker from './components/RegionPicker/RegionPicker';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/' component={RegionPicker} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
