import React from 'react';

import Loader from '../loader';

const Suspense = props => (
  <React.Suspense fallback={<Loader />}>
    {props.children}
  </React.Suspense>
);

export default React.memo(Suspense);
