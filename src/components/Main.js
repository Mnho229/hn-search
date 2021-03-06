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
      sortType: 'Stories',
      sortBy: 'Popularity',
      sortDateRange: 'All Time',
      sortQuery: ''
    };
  }

  componentDidMount() {
    this._handleData();
  }

  _handleData() {
    console.log(this.state);
    this._fetchData(this.state).then(data => {
      this.setState({
        feedList: data.hits,
      });
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

  _fetchData = async ( {sortType, sortBy, sortDateRange, sortQuery} ) => {
    const typeFilter = this._determineType(sortType);
    const dateFilter = this._determineRange(sortDateRange);
    const searchFilter = typeof sortQuery !== "undefined" && sortQuery !== '' ? `&query=${sortQuery}` : '';
    const sortByFilter = sortBy === 'Popularity' ? 'search' : 'search_by_date';

    const url = `https://hn.algolia.com/api/v1/${sortByFilter}?tags=${typeFilter}${searchFilter}${dateFilter}&hitsPerPage=15`;
    
    let res = await fetch(url);
    return res.json();
  }

  //TODO: Add timeout for when query is modified 
  changeOptions = (optionName, value) => {
    this.setState( (state) => {
      return {[optionName]: value}
    }, () => { this._handleData() } );

  }

  render() {
    console.log(this.state.feedList);
    return (
      <div className="Main">
        <Nav changeOption={this.changeOptions} />
        <Sort changeOption={this.changeOptions} />
        <Feed query={this.state.sortQuery} list={this.state.feedList} />
      </div>
    );
  }
}

export default Main;
