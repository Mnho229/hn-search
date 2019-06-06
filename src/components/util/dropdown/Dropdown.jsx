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

  _toggleActive = (dClass) => {
    return this.state.isActive ? dClass : '';
  }

  _handleFocus = () => {
    this.setState({
      isActive: true
    });
  }
  _handleDefocus = () => {
    this.setState({
      isActive: false,
    })
  }

  _setMenuItem = (e) => {
    const newValue = e.target.getAttribute('data');
    this.setState({
      currItem: newValue,
      isActive: false
    }, this.props.changeOption(this.props.id, newValue) );
    this.eleRef.current.blur();
  }

  render() {
    let activeMenu = this._toggleActive('h-show');

    const menuItems = this.props.items.map( (value, index) => {
      return (
        <li key={index}
            className="l-dropdown__menuItem"
            onClick={this._setMenuItem}
            data={value}>
          {value}
        </li>
      )
    });

    return (
      <div className="l-dropdown" 
           tabIndex='0'
           onFocus={this._handleFocus} 
           onBlur={this._handleDefocus}
           ref={this.eleRef}>
        {this.state.currItem} &#9662;
        <ul className={`l-dropdown__menu ${activeMenu}`}>
          {menuItems}
        </ul>
      </div>
    )
  }
}