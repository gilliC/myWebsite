import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';

import {AppBody} from '../app_components';

import Home from '../screens/Home/Home';
import EcologicalTips from '../screens/EcologicalTips';
import Projects from '../screens/Projects/Projects';
import NoMatch from '../components/defaultPage';

//import './App.scss';
const routing = props => {
  let {location} = props.history;
  let {screenSize} = props;
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
          children={({match, ...rest}) => (
            <Home {...rest} screenSize={screenSize} />
          )}
        />
        <Route
          exact
          path="/ecologicalTips"
          children={({match, ...rest}) => <EcologicalTips {...rest} />}
        />
        <Route
          exact
          path="/projects"
          children={({match, ...rest}) => (
            <Projects {...rest} screenSize={screenSize} />
          )}
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
