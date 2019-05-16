import React, { PureComponent } from 'react';

class Comment extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const { title, points, op, unixDate, text} = this.props;
    const date = new Date(unixDate * 1000).toLocaleDateString("en-US");
    //TODO: Format content of comment
    return (
      <div className="c-comment">
        <h4 className="c-comment__title">{title}</h4>
        <ul className="c-comment__row">
          <li className="c-comment__stats">{points} points</li>
          <li className="c-comment__stats">{op}</li>
          <li className="c-comment__stats">{date}</li>
          <li className="c-comment__stats">comments</li>
        </ul>
        <section className="c-comment__content">{text}</section>
      </div>
    )
  }
}

export default Comment;