import React, { PureComponent } from 'react';
import reactStringReplace from 'react-string-replace';
import detectQuery from '../../util/detect-query';

class Comment extends PureComponent {

  render() {
    const { story_title, author, created_at_i, comment_text, query} = this.props;
    const date = new Date(created_at_i * 1000).toLocaleDateString("en-US");
    
    return (
      <div className="c-comment">
        <h4 className="c-comment__title">{detectQuery(story_title, query)}</h4>
        <ul className="c-comment__row">
          <li className="c-comment__stats">{author}</li>
          <li className="c-comment__stats">{date}</li>
          <li className="c-comment__stats">comments</li>
        </ul>
        <section className="c-comment__content"
          dangerouslySetInnerHTML={{__html: detectQuery(comment_text, query, true) }} >
        </section>
      </div>
    )
  }
}

export default Comment;