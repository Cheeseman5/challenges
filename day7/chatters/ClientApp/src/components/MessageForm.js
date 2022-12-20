import React, { Component } from 'react';
import './MessageForm.css';

export class MessageForm extends Component {
    static displayName = MessageForm.name;

    handleSubmit(event) {
        event.preventDefault();
        console.log(`author: ${event.target.author.value}, text: ${event.target.text.value}`);
    }

    render() {
        return (
            <div className='message-form'>
                <form onSubmit={ this.handleSubmit } >
                    <h5 className='message-form-header'>Send new message</h5>
                    <label className='message-form-author-label'>
                        User Name:
                        <input type='text' name='author'/>
                    </label>
                    <label className='message-form-text-label'>
                        Message:
                        <textarea className='message-form-text' name='text' rows='3' cols='100'/>
                    </label>
                    <input className='message-form-submit' type='submit' value='Send' />
                </form>
            </div>
        )
    }
}