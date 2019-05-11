import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="starter-btn">
          <div className="btn join-now">
            <button
              onClick={() => this.props.history.push('/session')}
              className="round-btn"
            >
              Join Chat Now
            </button>
          </div>
          <div className="btn join-now">
            <button
              onClick={() => this.props.history.push('/suggestions')}
              className="round-btn"
            >
              Leave Suggestion
            </button>
          </div>
        </div>
      </div>
    );
  }
}
