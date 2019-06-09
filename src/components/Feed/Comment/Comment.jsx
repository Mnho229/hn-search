import React, { PureComponent } from 'react';

class Comment extends PureComponent {

  //Use arrow function in props field to add in arguments to parameters
  _detectQuery(propName) {
    //TODO
    //REGEX to match in Text with query
  };

  render() {
    const { story_title, author, created_at_i, comment_text} = this.props;
    const date = new Date(created_at_i * 1000).toLocaleDateString("en-US");
    //TODO: Format content of comment
    return (
      <div className="c-comment">
        <h4 className="c-comment__title">{story_title}</h4>
        <ul className="c-comment__row">
          <li className="c-comment__stats">{author}</li>
          <li className="c-comment__stats">{date}</li>
          <li className="c-comment__stats">comments</li>
        </ul>
        <section className="c-comment__content"
                 dangerouslySetInnerHTML={{__html:comment_text}} >
        </section>
      </div>
    )
  }
}

export default Comment;