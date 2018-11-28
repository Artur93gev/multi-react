import React from 'react';

import { navigateToRoute } from 'helpers';

const Home = props => (
  <div>
    <button className='button blue' onClick={() => navigateToRoute(props.history, '/first', true)}>
       first
    </button>
    <button className='button green' onClick={() => navigateToRoute(props.history, '/second', true)}>
        second
    </button>
  </div>
);

export default React.memo(Home);
