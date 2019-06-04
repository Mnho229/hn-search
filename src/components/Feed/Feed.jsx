import React, { Component } from 'react';
import Story from './Story';
import Comment from './Comment';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _genStory(propsObj, counter) {
    return (
      <li key={counter}> <Story {...propsObj} /> </li>
    )
  }
  _genComment(propsObj, counter) {
    return (
      <li key={counter}> <Comment {...propsObj} /> </li>
    )
  }

  //Destructuring assignment with different variable names
  render() {
    let itemKey = -1;
    const articles = this.props.list.map( (value, index) => {
      itemKey++;
      return value.comment_text !== null ? 
        this._genComment(value, itemKey) : 
        this._genStory(value, itemKey);
    });
    return (
      <ul className="c-feed">
        { articles }
      </ul>
    )
  }
}

export default Feed;