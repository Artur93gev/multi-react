import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import InnerPage from '../pages/innerPage';
import configs from 'configs';

const RouteConfigs = _ => (
  <Switch>
    <Route path={`${configs.routePrefix}/inner`} component={InnerPage} />
    <Redirect to={`${configs.routePrefix}/inner`} />
  </Switch>
);

export default RouteConfigs();
