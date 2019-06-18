import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    this.timer = null;
  }
  //add timeout for typing query
  handleChange = (e) => {
    if (this.timer !== null) {
      window.clearTimeout(this.timer);
    }
    const newQuery = e.target.value;

    this.timer = window.setTimeout(() => {
      this.props.changeSearch('sortQuery', newQuery);  
    }, 1000);
  }

  render() {
    return (
      <form className="form">
        <input placeholder="Search" id="hnSearch" className="c-nav__input" onChange={this.handleChange} />
      </form>
    );
  }
}

export default Search;