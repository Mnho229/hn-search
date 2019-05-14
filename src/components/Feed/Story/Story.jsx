import React, { PureComponent } from 'react';

class Story extends PureComponent {
  constructor(props) {
    super(props);

  }

  render() {
    const { title, link, points, op, unixDate, comments } = this.props;
    const dateObj = new Date(unixDate);
    const date = dateObj.getDate();
    //TODO: Inline List below title (border left for separator)
    return (
      <div>
        <h3>{title}</h3>
        <p>{points} points | {op} | {date} | {comments} comments | ({link}) </p>
      </div>
    )
  }
}

export default Story;