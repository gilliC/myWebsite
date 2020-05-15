import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Home from "screens/Home/ScreenHome";

const routes = (props) => {
  let { location } = props.history;
  let { screenSize } = props;
  return (
    <Switch {...location}>
      <Route
        exact
        path="/homenew"
        children={({ match, ...rest }) => (
          <Home {...rest} screenSize={screenSize} />
        )}
      />
    </Switch>
  );
};
export default withRouter(routes);
