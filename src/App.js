import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import {AppContainer, HeaderContainer} from './app_components';

import NavigationBar from './components/NavigationBar/NavigationBar';

import Routing from './routing';
const store = createStore(reducers);

const App = () => (
  <Provider store={store}>
    <Router>
      <AppContainer>
        <HeaderContainer>
          <NavigationBar />
        </HeaderContainer>
        <Routing />
      </AppContainer>
    </Router>
  </Provider>
);

export default App;
