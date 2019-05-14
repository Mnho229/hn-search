import React, { Component } from 'react';
import Story from './Story';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  //Destructuring assignment with different variable names
  render() {
    const storyProps = {
      title: 'Behold the Clone',
      link: 'https://www.google.com',
      points: 9029,
      op: 'Shara',
      unixDate: 1175714200,
      comments: 9030
    };
    return (
      <ul className="c-feed">
        <li><Story {...storyProps} /></li>
        <li><Story {...storyProps} /></li>
        <li><Story {...storyProps} /></li>
        <li><Story {...storyProps} /></li>
        <li><Story {...storyProps} /></li>
      </ul>
    )
  }
}

export default Feed;