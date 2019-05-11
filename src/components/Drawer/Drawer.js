import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
export default class Drawer extends Component {
  render() {
    const { isOpen, onClose } = this.props;
    return (
      <div id="mySidenav" className={`sidenav ${isOpen ? 'active' : ''}`}>
        <p className="closebtn" onClick={onClose}>
          &times;
        </p>
        <div className="">
          <ul className="side-link">
            <li>
              <Link to="/">Home </Link>
            </li>
            <li>
              <a href="/">Profile</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
