import React from 'react';

import { navigateToRoute } from 'helpers';

const Home = props => (
  <div>
    in First application
    <strong onClick={() => navigateToRoute(props.history, '/', true)}>
      Home Component
    </strong>
    <button onClick={() => navigateToRoute(props.history, '/inner')}>
      inner page
    </button>
  </div>
);

export default React.memo(Home);
