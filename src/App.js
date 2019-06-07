import React from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import FolderTree from './components/FolderTree'

class App extends React.Component {
  static displayName = App.name;
  render() {
    return (
      <Layout data-layout>
        <Switch>
          <Route exact path='/' component={FolderTree} />
        </Switch>
      </Layout>
    );
  }
}

export default App;