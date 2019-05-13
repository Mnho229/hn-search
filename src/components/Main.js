import React from 'react';
import '../dist/css/Main.min.css';
import Nav from './Nav';
import Sort from './Sort'

class Main extends React.Component {
  render() { 
    return (
      <div className="Main">
        <Nav />
        <Sort />
      </div>
    );
  }
}

export default Main;
