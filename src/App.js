import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CSSTransitionGroup, TransitionGroup} from 'react-transition-group';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';

import './App.scss';

import NavigationBar from './components/NavigationBar/NavigationBar';

import Home from './Home/Home';
import Links from './Links/Links';
import Dashboard from './Dashboard/Dashboard';
import EcologicalTips from './EcologicalTips/EcologicalTips';
import UnderConstruction from './components/construction';

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
        <CSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>
          <Switch>
            <Route
              exact
              path="/"
              children={({match, ...rest}) => (
                <TransitionGroup component={firstChild}>
                  {match && <Home {...rest} />}
                </TransitionGroup>
              )}
            />
            <Route
              exact
              path="/articles"
              children={({match, ...rest}) => (
                <TransitionGroup component={firstChild}>
                  {match && <Links {...rest} />}
                </TransitionGroup>
              )}
            />
            <Route
              exact
              path="/dashboard"
              children={({match, ...rest}) => (
                <TransitionGroup component={firstChild}>
                  {match && <Dashboard {...rest} />}
                </TransitionGroup>
              )}
            />
            <Route
              exact
              path="/ecologicalTips"
              children={({match, ...rest}) => (
                <TransitionGroup component={firstChild}>
                  {match && <EcologicalTips {...rest} />}
                </TransitionGroup>
              )}
            />
            <Route
              exact
              path="*"
              children={({match, ...rest}) => (
                <TransitionGroup component={firstChild}>
                  {match && <UnderConstruction {...rest} />}
                </TransitionGroup>
              )}
            />
          </Switch>
        </CSSTransitionGroup>
      </div>
    </Router>
  </Provider>
);

export default App;
