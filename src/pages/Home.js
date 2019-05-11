import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="content">
          <div className="brand">
            <h1 className="brand-name">WeForHealth</h1>
          </div>
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
          <div className="quote">
            <p>
              I understood myself only after I destroyed myself. And only in the
              process of fixing myself, did I know who I really was.{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
