import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <form className="form">
        <input placeholder="Search" id="hnSearch" className="c-nav__input" />
      </form>
    );
  }
}

export default Search;