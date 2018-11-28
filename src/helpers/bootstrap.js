import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'components/unControlled/loader';

const cache = {};

const bootstrap = (Application, containerId, afterMount = console.log) => {
  // unmounting component that exists in the container if there is any
  const Component = (
    <React.Suspense fallback={<Loader />}>
      <Application />
    </React.Suspense>
  );

  const oldContainer = cache.containerId || document.getElementById(containerId);

  if (oldContainer) {
    
    if (ReactDOM.unmountComponentAtNode(oldContainer)) {
      console.info('Container has been cleared!!!');
    }

    const newContainer = document.getElementById(containerId);

    // NOTE. new VDOM will be created for mounting component
    return ReactDOM.render(Component, newContainer, () => {
      cache.containerId = newContainer;
      afterMount();
      console.log('%cNew component has been mounted successfully', 'color: green');
    });
  }
};

export default bootstrap;
