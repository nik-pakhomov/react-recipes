import React, { Component } from 'react';

import './hello-world.css';

class HelloWorld extends Component {
  render() {
    const title = this.props.title;

    return <div className="hello-world">{title}</div>;
  }
}

export default HelloWorld;
