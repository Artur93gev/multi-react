import React from 'react';
import { Link } from 'react-router-dom';

const InnerPage = props => (
  <div>
    in Second application InnerPage
    <Link to="/">
      back home
    </Link>
  </div>
);

export default React.memo(InnerPage);
