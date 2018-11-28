import React from 'react';

import { navigateToRoute } from 'helpers';

const Home = props => (
    <div>
        <button className='button yellow' onClick={() => navigateToRoute(props.history, '/', true)}>
            home
        </button>
        <button className='button green' onClick={() => navigateToRoute(props.history, '/inner')}>
            inner page
        </button>
    </div>
);

export default React.memo(Home);
