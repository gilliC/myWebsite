import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import './App.scss';

import NavigationBar from './components/NavigationBar/NavigationBar';

import Home from './Home/Home';
import Links from './Links/Links';
import Dashboard from './Dashboard/Dashboard';
import EcologicalTips from './EcologicalTips/EcologicalTips';
import UnderConstruction from './components/defaultPage';

const store = createStore(reducers);

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const App = () => (
  <Provider store={store}>
    <Router>
      <div className="app">
        <header className="app-header">
          <NavigationBar />
        </header>
        <TransitionGroup className="transition-group">
          <CSSTransition classNames="fade" timeout={300} Component={firstChild}>
            <Switch>
              <Route
                exact
                path="/"
                className="cool"
                children={({match, ...rest}) => <Home {...rest} />}
              />
              <Route
                exact
                path="/articles"
                children={({match, ...rest}) => <Links {...rest} />}
              />
              <Route
                exact
                path="/dashboard"
                children={({match, ...rest}) => <Dashboard {...rest} />}
              />
              <Route
                exact
                path="/ecologicalTips"
                children={({match, ...rest}) => <EcologicalTips {...rest} />}
              />
              <Route
                exact
                path="*"
                children={({match, ...rest}) => <UnderConstruction {...rest} />}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Router>
  </Provider>
);

export default App;
