import React, { Component } from 'react';
import Chat from '../components/Chat/Chat';
const chatData = [
  {
    id: '1',
    message: 'Welcome to WeForHealth, how are you feeling today?',
    trigger: '2'
  },
  {
    id: '2',
    user: true,
    trigger: '3'
  },
  {
    id: '3',
    message: 'Oh sorry, may I hear a little bit more?',
    trigger: '4'
  },
  {
    id: '4',
    user: true
  }
];
export default class PersonalChat extends Component {
  render() {
    const { isDrawerOpen } = this.props;
    return (
      <div className={`session ${isDrawerOpen ? 'drawer-open' : ''}`}>
        <Chat chatData={chatData} />
      </div>
    );
  }
}
