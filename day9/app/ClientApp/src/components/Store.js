import React, { Component } from 'react';

export class Store extends Component {
  static displayName = Store.name;

  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
  }

  async incrementCounter() {
    const newCount = this.state.count + 1;
    const postData = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
    };
    let result = await fetch(`api/store/${newCount}`, postData);
    console.log(JSON.stringify(result, null, 4));
  }

  async updateCount() {
    const result = await fetch('api/store');
    const data = await result.json();
    const count = 0;
    console.log(`data: ${JSON.stringify(data, null, 4)}`);
    // this.setState()
  }

  render() {
    return (
      <div>
        <h1>Store</h1>

        <p aria-live="polite">Current count: <strong>{this.state.count}</strong></p>

        <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}
