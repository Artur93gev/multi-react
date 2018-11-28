import React from 'react';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import configs from 'configs';
import Loader from 'components/unControlled/loader';

class RouteError extends React.PureComponent {

  state = { hasError: false };

  static Component = <h1>Something went wrong.</h1>;

  static getDerivedStateFromError(error) {

    console.error(error);

    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.info(`${error}:: ${info}`);
  }

  render() {

    return this.state.hasError ? RouteError.Component : this.props.children;
  }
}

const navigateToRoute = (history, url, isAbsolute = false) => history.push(`${isAbsolute ? '' : configs.routePrefix}${url}`);

const history = createBrowserHistory();

const RouteWrapper = props => (
  <Router history={history}>
    <React.Suspense fallback={<Loader />}>
      {props.children}
    </React.Suspense>
  </Router>
);

export {
  RouteError,
  RouteWrapper,
  navigateToRoute,
};
