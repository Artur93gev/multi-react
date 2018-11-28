import React from 'react';
import { Link } from 'react-router-dom';

const InnerPage = props => (
  <div>
      <button className='button yellow'>
          <Link to="/">
              home
          </Link>
      </button>
  </div>
);

export default React.memo(InnerPage);
