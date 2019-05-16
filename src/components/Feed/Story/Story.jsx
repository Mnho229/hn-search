import React, { PureComponent } from 'react';

class Story extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const { title, link, points, op, unixDate, comments } = this.props;
    const date = new Date(unixDate * 1000).toLocaleDateString("en-US");
    
    return (
      <div className="c-story">
        <h4 className="c-story__title">{title}</h4>
        <ul className="c-story__row">
          <li className="c-story__stats">{points} points</li>
          <li className="c-story__stats">{op}</li>
          <li className="c-story__stats">{date}</li>
          <li className="c-story__stats">{comments} comments</li>
          <li className="c-story__stats">({link})</li>
        </ul>
      </div>
    )
  }
}

export default Story;