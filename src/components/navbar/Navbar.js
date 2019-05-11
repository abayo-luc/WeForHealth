import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PhoneCalls from '../../assets/telephone.svg';
import VideoCall from '../../assets/video.svg';
import './styles.scss';
class Navbar extends Component {
  render() {
    const { onOpenDrawer, history } = this.props;
    console.log(this.props.history);
    return (
      <div className="pos-f-t top-bar fixed-top">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark-mode p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark-mode">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={onOpenDrawer}
          >
            <span className="navbar-toggler-icon" />
          </button>
          {history.location.pathname === '/session' ? (
            <div className="left-side row">
              <div
                className="notification"
                onClick={() => alert('feature coming soon!')}
              >
                <img src={PhoneCalls} alt="N" className="nav-icon" />
              </div>
              <div
                className="notification"
                onClick={() => alert('feature coming soon!')}
              >
                <img src={VideoCall} alt="N" className="nav-icon" />
                <span className="icon-tip">active</span>
              </div>
            </div>
          ) : (
            ''
          )}
        </nav>
      </div>
    );
  }
}

export default withRouter(Navbar);
