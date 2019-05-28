import React, { Component } from 'react';

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.eleRef = React.createRef();
    this.state = {
      isActive: false,
      currItem: this.props.items[0]
    }
  }

  __toggleActive = (dClass) => {
    return this.state.isActive ? dClass : '';
  }

  __handleFocus = () => {
    this.setState({
      isActive: true
    });
  }
  __handleDefocus = () => {
    this.setState({
      isActive: false,
    })
  }

  __setMenuItem = (e) => {
    this.setState({
      currItem: e.target.getAttribute('data'),
      isActive: false
    });
    this.eleRef.current.blur();
  }

  render() {
    let activeMenu = this.__toggleActive('h-show');

    const menuItems = this.props.items.map( (value, index) => {
      return (
        <li key={index}
            className="l-dropdown__menuItem"
            onClick={this.__setMenuItem}
            data={value}>
          {value}
        </li>
      )
    });

    return (
      <div className="l-dropdown" 
           tabIndex='0'
           onFocus={this.__handleFocus} 
           onBlur={this.__handleDefocus}
           ref={this.eleRef}>
        {this.state.currItem} &#9662;
        <ul className={`l-dropdown__menu ${activeMenu}`}>
          {menuItems}
        </ul>
      </div>
    )
  }
}