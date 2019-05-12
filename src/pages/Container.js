import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Drawer from '../components/Drawer/Drawer';
import Home from './Home';
import Session from './Session';
import Suggestion from './Suggestion';
import './styles.scss';
import Team from './Team';
import PersonalChat from './Chat';
export default class Container extends Component {
  state = {
    openDrawer: false
  };
  componentDidMount() {
    document.addEventListener('mousedown', this.closeDrawer);
  }

  closeDrawer = e => {
    if (!this.drawerRef.contains(e.target)) {
      console.log('hello world');
      this.setState({
        openDrawer: false
      });
    }
  };
  toggleDrawer = () => {
    this.setState(state => ({
      openDrawer: !state.openDrawer
    }));
  };
  componentWillReceiveProps() {
    this.setState({
      onOpenDrawer: false
    });
  }
  setDrawer = node => {
    this.drawerRef = node;
  };
  render() {
    const { openDrawer } = this.state;
    return (
      <Router>
        <div>
          <div ref={this.setDrawer}>
            <Navbar onOpenDrawer={this.toggleDrawer} />
            <Drawer isOpen={openDrawer} />
          </div>
        </div>
        <div className="pages-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/suggestions" component={Suggestion} />
            <Route exact path="/team" component={Team} />

            <Route
              exact
              path="/chat"
              render={props => (
                <PersonalChat isDrawerOpen={openDrawer} {...props} />
              )}
            />
            <Route
              exact
              path="/session"
              render={props => <Session isDrawerOpen={openDrawer} {...props} />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
