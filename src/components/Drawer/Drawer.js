import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import HomeIcon from '../../assets/home.svg';
import SessionIcon from '../../assets/session.svg';
import ContactIcon from '../../assets/contact.svg';
import TeamIcon from '../../assets/team.svg';
import './styles.scss';
const pages = [
  {
    key: '1',
    path: '/',
    name: 'Home',
    icon: HomeIcon
  },
  {
    key: '2',
    path: '/session',
    name: 'Session',
    icon: SessionIcon
  },
  {
    key: '3',
    path: '/suggestions',
    name: 'Contact Us',
    icon: ContactIcon
  },
  {
    key: '4',
    path: '/team',
    name: 'Team',
    icon: TeamIcon
  }
];
class Drawer extends Component {
  render() {
    const {
      isOpen,
      history: { location }
    } = this.props;
    return (
      <div id="mySidenav" className={`sidenav ${isOpen ? 'active' : ''}`}>
        <div className="column">
          <div className="company-profile">
            <img
              src={require('../../assets/logo.svg')}
              className="logo"
              alt=""
            />
          </div>
          <div className="">
            <ul className="side-link">
              {pages.map(page =>
                page.path === location.pathname ? (
                  ''
                ) : (
                  <li key={page.key}>
                    <img src={page.icon} alt="" className="link-icon" />
                    <Link to={page.path}>{page.name}</Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Drawer);
