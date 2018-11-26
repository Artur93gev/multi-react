import React from 'react';
import ReactDOM from 'react-dom';

export default (Component, container, afterMount = console.log) => {

  // unmounting component that exists in the container if there is any
  if (ReactDOM.unmountComponentAtNode(container)) {
    console.info('Container has been cleared!!!');
  }

  // NOTE. new VDOM will be created for mounting component
  ReactDOM.render(<Component />, container, afterMount);
  console.log('%cNew component has been mounted successfully', 'color: green');
};
