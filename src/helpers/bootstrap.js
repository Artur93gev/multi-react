import React from 'react';
import ReactDOM from 'react-dom';
import Loader from 'components/unControlled/loader';

const bootstrap = (Application, container, afterMount = console.log) => {

  // unmounting component that exists in the container if there is any
  const Component = (
    <React.Suspense fallback={<Loader />}>
      <Application />
    </React.Suspense>
  );
  if (ReactDOM.unmountComponentAtNode(container)) {
    console.info('Container has been cleared!!!');
  }

  // NOTE. new VDOM will be created for mounting component
  ReactDOM.render(Component, container, () => {
    console.log('%cNew component has been mounted successfully', 'color: green');
    afterMount();
  });
};

export default bootstrap;
