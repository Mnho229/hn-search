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
    const timeRanges = ['All Time', 'Last 24h', 'Past Week', 'Past Month', 'Past Year'];

    return (
      <section className="c-sort">
        <span>Search</span>
        <Dropdown id="sortType" items={resultTypes} changeOption={this.props.changeOption} />
        <span> by </span>
        <Dropdown id="sortBy" items={popuOrDate} changeOption={this.props.changeOption} />
        <span> by </span>
        <Dropdown id="sortDateRange" items={timeRanges} changeOption={this.props.changeOption} />
      </section>
    );
  }
}

export default Sort;