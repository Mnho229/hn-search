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
  _genComments(propsObj, counter) {
    return (
      <li key={counter}> <Comment {...propsObj} /> </li>
    )
  }

  //Destructuring assignment with different variable names
  render() {
    let itemKey = -1;
    const articles = this.props.list.map( (value, index) => {
      itemKey++;
      return this._genStory(value, itemKey);
    });

    const commentProps = {
      title: 'Behold the Comments',
      points: 9039,
      op: 'Shana',
      unixDate: 1175714200,
      text: "See also the blog.stackoverflow.com side of the partnership here:<p><a href=\"http://blog.stackoverflow.com/2011/08/facebook-stackoverflow/\" rel=\"nofollow\">http://blog.stackoverflow.com/2011/08/facebook-stackoverflow...</a><p>Basically, it's a siloed version of stackoverflow.com containing only the tags relevant to Facebook.  They're thinking about creating mini-sites for other major subdomains (see also <a href=\"http://meta.webapps.stackexchange.com/questions/913/is-this-site-not-running-as-well-as-it-deserves/915#915\" rel=\"nofollow\">http://meta.webapps.stackexchange.com/questions/913/is-this-...</a>)."
    };
    return (
      <ul className="c-feed">
        { articles }
        <li><Comment {...commentProps} /></li>
        <li><Comment {...commentProps} /></li>
        <li><Comment {...commentProps} /></li>
        <li><Comment {...commentProps} /></li>
        <li><Comment {...commentProps} /></li>
      </ul>
    )
  }
}

export default Feed;