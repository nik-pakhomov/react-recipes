import * as React from 'react';

import './styles/App.scss';

import HelloWorld from './components/hello-world/HelloWorld';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>My React App!</h1>
        <HelloWorld title="Hello World!" />
      </div>
    );
  }
}
