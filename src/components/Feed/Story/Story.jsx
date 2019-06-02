import React, { PureComponent } from 'react';

class Story extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const { title, url, points, author, created_at_i, num_comments } = this.props;
    const date = new Date(created_at_i * 1000).toLocaleDateString("en-US");
    
    return (
      <div className="c-story">
        <h4 className="c-story__title">{title}</h4>
        <ul className="c-story__row">
          <li className="c-story__stats">{points} points</li>
          <li className="c-story__stats">{author}</li>
          <li className="c-story__stats">{date}</li>
          <li className="c-story__stats">{num_comments} comments</li>
          <li className="c-story__stats">({url})</li>
        </ul>
      </div>
    )
  }
}

export default Story;