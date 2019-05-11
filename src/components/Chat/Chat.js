import React, { Component } from 'react';
import ChatBot from 'react-simple-chatbot';
import DoctorIcon from '../../assets/doctor.svg';
import './styles.scss';
import ChatHeader from './ChatHeader';
import { chatData } from '../../data/chat';
export default class Chat extends Component {
  render() {
    return (
      <ChatBot
        headerTitle="Speech Recognition"
        recognitionEnable={true}
        steps={[...chatData]}
        className="my-chat"
        width="100%"
        height="100%"
        headerComponent={<ChatHeader />}
        botAvatar={DoctorIcon}
      />
    );
  }
}
