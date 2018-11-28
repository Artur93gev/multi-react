import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/home';
import InnerPage from '../pages/innerPage';
import configs from 'configs';

const RouteConfigs = props => (
  <Switch>
    <Route exact path={`${configs.routePrefix}/`} component={Home} />
    <Route path={`${configs.routePrefix}/inner`} component={InnerPage} />
  </Switch>
);

export default RouteConfigs();
