import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from 'pages/home';
import DynamicImporter from 'components/unControlled/dynamicImporter';

const Configs = _ => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/first" render={props => <DynamicImporter {...props} componentName="first" />} />
    <Route path="/second" render={props => <DynamicImporter {...props} componentName="second" />} />
  </Switch>
);

export default Configs;
