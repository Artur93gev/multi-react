import React from 'react';

import { RouteWrapper } from 'helpers';

import routes from './routes';
import FirstRouterError from './routes/error';

const First = _ => (
  <FirstRouterError>
    <RouteWrapper>
      {routes}
    </RouteWrapper>
  </FirstRouterError>
);

export default React.memo(First);
