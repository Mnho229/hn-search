import React, { Component } from 'react';
import logo from "../../images/logo-hn-search.webp";
import gear from "../../images/cog-solid.svg";
import Search from "../Sort/Search";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  //Set up with react-router
  render() {
    return (
      <nav className="c-nav">
        <ul className="c-nav__list">
          <li className="c-nav__home">
            <a href="/"><img className="c-nav__logo" src={logo} alt="hn-logo" /></a>
          </li>
          <li className="l-list-container c-nav__search">
            <Search changeSearch={this.props.changeOption} />
          </li>
        </ul>
      </nav>
    )
  }
}

export default Nav;