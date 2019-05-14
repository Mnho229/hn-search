import React from 'react';
import '../dist/css/Main.min.css';
import Nav from './Nav';
import Sort from './Sort'
import Feed from './Feed'

class Main extends React.Component {
  render() { 
    return (
      <div className="Main">
        <Nav />
        <Sort />
        <Feed />
      </div>
    );
  }
}

export default Main;
