import React from 'react';

import { navigateToRoute } from 'helpers';

const InnerPage = props => (
  <div>
    in
    <strong onClick={() => navigateToRoute(props.history, '/first', true)}>
      First
    </strong>
    application InnerPage Component
    <button onClick={() => navigateToRoute(props.history, '/', true)}>
      Home
    </button>
    <button onClick={() => navigateToRoute(props.history, '/second', true)}>
      Second application
    </button>
  </div>
);

export default React.memo(InnerPage);
