import React from 'react';

import { navigateToRoute } from 'helpers';

const InnerPage = props => (
  <div>
      <button className='button yellow' onClick={() => navigateToRoute(props.history, '/first', true)}>
          first
      </button>
      <button className='button blue' onClick={() => navigateToRoute(props.history, '/', true)}>
          Home
      </button>
      <button className='button green' onClick={() => navigateToRoute(props.history, '/second', true)}>
          Second application
      </button>
  </div>
);

export default React.memo(InnerPage);
