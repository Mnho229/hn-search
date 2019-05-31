import React from 'react';
import '../dist/css/Main.min.css';
import Nav from './Nav';
import Sort from './Sort'
import Feed from './Feed'

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feedList: [],
      sortOptions: {
        type: 'Stories',
        sortBy: 'Popularity',
        dateRange: 'All Time',
        query: ''
      }
    };
  }
  componentDidMount() {
    this._fetchData(this.state.sortOptions).then(data => {
      console.log(data);
    });
  }

  _determineType(item) {
    return item === 'Stories' ? 'story' : 
          item === 'Comments' ? 'comment' : '(story,comment)';
  }

  _determineRange(item) {
    let result, limiter;
    const now = Math.floor(Date.now() / 1000);
    switch (item) {
      case "All Time":
        limiter = '0';
        break;
      case "Last 24h":
        limiter = now - 86400;
        break;
      case "Past Week":
        limiter = now - 604800;
        break;
      case "Past Month":
        limiter = now - 2629746;
        break;
      case "Past Year":
        limiter = now - 31556952;
        break;
      case "Custom range":
        break;
       //TODO: Some functionality that gets two dates
      default:
        break;
    }
    result = `&numericFilters=created_at_i>${limiter}`;

    return result;
  }

  //TODO: Test API CALLS
  async _fetchData( {type, sortBy, dateRange, query} ) {
    const typeFilter = this._determineType(type);
    const dateFilter = this._determineRange(dateRange);
    const searchFilter = typeof query !== "undefined" && query !== '' ? `&query=${query}` : '';
    const sortByFilter = sortBy === 'Popularity' ? 'search' : 'search_by_date';

    const url = `https://hn.algolia.com/api/v1/${sortByFilter}?tags=${typeFilter}${searchFilter}${dateFilter}`;

    let res = await fetch(url);
    return res.json();
  }
  //KNOW: FIRST TO GRAB IDs()
  //TODO: Stories/Comments/All
  //TODO: Popularity(Score) or Date
  //TODO: Date Range

  render() {
    return (
      <div className="Main">
        <Nav />
        <Sort />
        <Feed />
      </div>
    );
  }
}

export default Main;
