import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './hoc/Layout/Layout';
import RegionPicker from './containers/RegionPicker/RegionPicker';
import Comparison from './containers/Comparison/Comparison';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path='/comparison' component={Comparison} />
            <Route path='/' component={RegionPicker} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
