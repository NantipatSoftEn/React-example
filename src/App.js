import React, { Component } from 'react';

import Nameform from './NameForm';
import testredux from './testredux';
class App extends Component {

  render() {
    return (
      <div>
      <Nameform     />
      <testredux />
      </div>
    );
  }
}
export default App;
