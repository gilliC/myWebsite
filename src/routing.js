import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import {AppBody} from './app_components';

import Home from './Home/Home';
import Links from './Links/Links';
import Dashboard from './Dashboard/Dashboard';
import EcologicalTips from './EcologicalTips/EcologicalTips';
import Projects from './Projects/Projects';
import NoMatch from './components/defaultPage';

import './App.scss';
const routing = props => {
  let {location} = props.history;
  return (
    <AppBody
      classNames="fade"
      timeout={500}
      locationKey={location.key}
      mountOnEnter={true}
      unmountOnExit={true}>
      <Switch {...location}>
        <Route
          exact
          path="/"
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
          path="/projects"
          children={({match, ...rest}) => <Projects {...rest} />}
        />
        <Route
          exact
          path="*"
          children={({match, ...rest}) => <NoMatch {...rest} />}
        />
      </Switch>
    </AppBody>
  );
};
export default withRouter(routing);
