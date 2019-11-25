import React from 'react';

import './styles/app.css';

import HelloWorld from './components/hello-world/hello-world.jsx';

function App() {
  return (
    <div>
      <h1>My React App!</h1>
      <HelloWorld title="Hello World!" />
    </div>
  );
}

export default App;
