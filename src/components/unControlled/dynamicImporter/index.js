import React from 'react';

import configs from 'configs';
import { bootstrap } from 'helpers';
import { routeEnums } from 'constants/enums';

class DynamicImporter extends React.PureComponent {

  static containerId = 'container'

  componentDidMount() {
    const Application = React.lazy(_ => import(`applications/${this.props.componentName}`));

    configs.routePrefix = `/${routeEnums[this.props.componentName]}`;

    bootstrap(Application, document.getElementById(DynamicImporter.containerId));
  }

  render() {
    return (
      <div id="container">
      </div>
    );
  }
}

export default DynamicImporter;
