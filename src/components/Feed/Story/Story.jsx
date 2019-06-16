import React, { PureComponent } from 'react';
import detectQuery from '../../util/detect-query';

class Story extends PureComponent {

  render() {
    const { title, url, points, author, created_at_i, num_comments, story_text, query } = this.props;
    const date = new Date(created_at_i * 1000).toLocaleDateString("en-US");
    const textPresent = story_text !== null && story_text !== "";
    
    return (
      <div className="c-story">
        <h4 className="c-story__title">{detectQuery(title, query)}</h4>
        <ul className="c-story__row">
          <li className="c-story__stats">{points} points</li>
          <li className="c-story__stats">{author}</li>
          <li className="c-story__stats">{date}</li>
          <li className="c-story__stats">{num_comments} comments</li>
          {!textPresent && 
            <li className="c-story__stats">({url})</li>
          }
        </ul>
        {textPresent &&
          <section className="c-story__content"
            dangerouslySetInnerHTML={{ __html: detectQuery(story_text, query, true) }} >
          </section>
        }
      </div>
    )
  }
}

export default Story;