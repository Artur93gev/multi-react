import React from 'react';

import { RouteError, RouteWrapper } from 'helpers';
import RouteConfigs from 'routes';

class App extends React.PureComponent {
  render() {
    return (
      <RouteError>
        <RouteWrapper>
          <RouteConfigs />
        </RouteWrapper>
      </RouteError>
    );
  }
}

export default App;
