import React from 'react';

import { navigateToRoute } from 'helpers';

const Home = props => (
  <div>
    In platform Component
    <button onClick={() => navigateToRoute(props.history, '/first', true)}>
      go to the first app
    </button>
    <button onClick={() => navigateToRoute(props.history, '/second', true)}>
      go to the second app
    </button>
  </div>
);

export default React.memo(Home);
