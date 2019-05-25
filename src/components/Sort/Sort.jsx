import React, { Component } from 'react';
import Dropdown from '../util/dropdown';

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const resultTypes = ['Stories', 'Comments', 'All'];

    return (
      <section className="c-sort">
        <span>Search</span> <Dropdown items={resultTypes} /> <span>by Popularity by All-time</span>
      </section>
    );
  }
}

export default Sort;