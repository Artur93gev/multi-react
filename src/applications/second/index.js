import React from 'react';

import { RouteWrapper } from 'helpers';

import routes from './routes';
import SecondRouterError from './routes/error';

const Second = _ => (
  <SecondRouterError>
    <RouteWrapper>
      {routes}
    </RouteWrapper>
  </SecondRouterError>
);

export default React.memo(Second);
