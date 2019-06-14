import React, { PureComponent } from 'react';
import reactStringReplace from 'react-string-replace';

class Comment extends PureComponent {

  //Use arrow function in props field to add in arguments to parameters
  _detectQuery(propName) {
    if (this.props.query === '') {
      return propName;
    }
    const regex = new RegExp('(' + this.props.query + ')', 'gi');

    return reactStringReplace(propName, regex, (match) => 
      <span className="h-highlight">{match}</span>
    );
  };

  render() {
    const { story_title, author, created_at_i, comment_text} = this.props;
    const date = new Date(created_at_i * 1000).toLocaleDateString("en-US");
    //TODO: Format content of comment
    //May need to make use of split spring and isolate each one
    return (
      <div className="c-comment">
        <h4 className="c-comment__title">{this._detectQuery(story_title)}</h4>
        <ul className="c-comment__row">
          <li className="c-comment__stats">{author}</li>
          <li className="c-comment__stats">{date}</li>
          <li className="c-comment__stats">comments</li>
        </ul>
        <section className="c-comment__content"
          dangerouslySetInnerHTML={{__html: this._detectQuery(comment_text) }} >
        </section>
      </div>
    )
  }
}

export default Comment;