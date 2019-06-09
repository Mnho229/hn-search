import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleChange = (e) => {
    this.props.changeSearch('sortQuery', e.target.value);
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