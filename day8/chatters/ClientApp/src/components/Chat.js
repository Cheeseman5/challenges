import React, { Component } from 'react';
import './Chat.css'
import { MessageForm } from './MessageForm';

export class Chat extends Component {
    static displayName = Chat.name;

    constructor(props) {
        super(props);
        // this.rerenderParentCallback = this.rerenderParentCallback.bind(this);

        this.state = { messages:[], loading: true };
    }

    rerenderParentCallback() {
        console.log('rerendering from callback...');
        this.fetchMessages();
    }

    componentDidMount() {
        this.fetchMessages();
    }

    async fetchMessages() {
        const response = await fetch('api/chat');
        const data = await response.json();

        console.log(`data retreived: ${JSON.stringify(data, null, 4)}`);

        this.setState({ messages: data, loading: false });
          
    }

    static formatDate(date){
        let formatted = new Date(date);
        return formatted.toLocaleString();
    }

    static renderMessages(messages) {
        messages.map(m => (console.log(JSON.stringify(m, null, 4))));
        return messages.map((message, i) => (
            <li className='message no-bullet' key={i}>
                <div className='message-header'>
                    <p className='message-postdate'>({Chat.formatDate(message.postDateTime)})</p>
                    <p className='message-author'>{message.author}:</p>
                </div>
                <div className='message-body'>
                    <p className='message-text'>{message.text}</p>
                </div>
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
                <MessageForm rerenderCallback={this.rerenderParentCallback}/>
            </div>
        )
    }
}