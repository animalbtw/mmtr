import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import {publicRoutes} from "../utils/routers";
import {HOME_ROUTE} from "../utils/constants";

const AppRoute = () => {
  return (
    <Switch>
      {
        publicRoutes.map(({path, component}, index) => (
          <Route
            path={path}
            component={component}
            exact
            key={index}
          />
        ))
      }
      <Redirect to={HOME_ROUTE} />
    </Switch>
  );
};

export default AppRoute;
