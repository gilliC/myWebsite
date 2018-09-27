import React, {Component} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

import Home from './Home/Home';
import Links from './Links/Links';
import Dashboard from './Dashboard/Dashboard';
import EcologicalTips from './EcologicalTips/EcologicalTips';
import NoMatch from './components/defaultPage';

import './App.scss';
class Routing extends Component {
  render() {
    return (
      <TransitionGroup className="transition-group">
        <CSSTransition
          classNames="fade"
          timeout={300}
          key={this.props.history.location.key}
          mountOnEnter={true}
          unmountOnExit={true}>
          <Switch location={this.props.history.location}>
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
              path="*"
              children={({match, ...rest}) => <NoMatch {...rest} />}
            />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}
export default withRouter(Routing);
