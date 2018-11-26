import React from 'react';

import { bootstrap } from 'helpers';

class DynamicImporter extends React.PureComponent {

  componentDidMount() {
    const container = document.getElementById('container');
    const Application = import(`applications/${this.props.componentName}`);

    bootstrap(Application, container);
  }

  render() {
    return (
      <div id="container">
      </div>
    );
  }
}

export default DynamicImporter;
