import React, { Component } from 'react';
import { Chat } from './Chat';

export class Home extends Component {
  static displayName = Home.name;

  render() {
    return (
      <div>
        <h1>Chatters</h1>
        <p>Welcome to your new chat application (chatpplication?)</p>
        <Chat />
      </div>
    );
  }
}
