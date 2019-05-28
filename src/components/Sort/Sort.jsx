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
    const popuOrDate = ['Popularity', 'Date'];
    const timeRanges = ['All Time', 'Last 24h', 'Past Week', 'Past Month', 'Past Year', 'Custom Range'];

    return (
      <section className="c-sort">
        <span>Search</span><Dropdown items={resultTypes} /><span> by </span><Dropdown items={popuOrDate} /><span> by </span><Dropdown items={timeRanges} />
      </section>
    );
  }
}

export default Sort;