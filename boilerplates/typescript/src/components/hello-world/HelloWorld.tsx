import * as React from 'react';

import './HelloWorld.scss';

export interface Props {
  title: string;
}

export default class HelloWorld extends React.Component<Props> {
  render() {
    const title = this.props.title;

    throw new Error('Error!!!');

    return <div className="hello-world">{title}</div>;
  }
}
