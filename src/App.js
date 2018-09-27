import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import './App.scss';

import NavigationBar from './components/NavigationBar/NavigationBar';

import Routing from './routing';
const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <header className="app-header">
          <NavigationBar />
        </header>
        <Routing />
      </div>
    </Router>
  </Provider>
);

export default App;
