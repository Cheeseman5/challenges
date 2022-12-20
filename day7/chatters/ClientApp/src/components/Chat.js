import React, { Component } from 'react';
import './Chat.css'
import { MessageForm } from './MessageForm';

export class Chat extends Component {
    static displayName = Chat.name;

    constructor(props) {
        super(props);

        this.state = { messages:[], loading: true };
    }

    componentDidMount() {
        this.fetchMessages();
    }

    async fetchMessages() {
        const response = await fetch('chat');
        const data = await response.json();

        this.setState({ messages: data, loading: false });
          
    }

    static renderMessages(messages) {
        return messages.map((message, i) => (
            <li className='message no-bullet' key={i}>
                <p className='message-author'>{message.author}:</p>
                <p className='message-text'>{message.text}</p>
            </li>
        ));
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Chat.renderMessages(this.state.messages);
        
        return (
            <div className='chat'>
                <ul className='message-list'>
                    { contents }
                </ul>
                <MessageForm />
            </div>
        )
    }
}