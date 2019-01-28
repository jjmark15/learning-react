// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// create a React component
const App = () => {
  return <div>Hi there!</div>
}

// Show the react component on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);