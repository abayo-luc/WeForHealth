import React, { Component } from 'react';
import Chat from '../components/Chat/Chat';
import { chatData } from '../data/chat';
export default class Session extends Component {
  render() {
    const { isDrawerOpen } = this.props;
    return (
      <div className={`session ${isDrawerOpen ? 'drawer-open' : ''}`}>
        <Chat chatData={chatData} />
      </div>
    );
  }
}
