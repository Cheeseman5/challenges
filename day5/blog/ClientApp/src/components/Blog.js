import React, { Component } from 'react';

export class Blog extends Component {
  static displayName = Blog.name;

  constructor(props) {
    super(props);
    this.state = { articles: this.populateArticles() };
    this.incrementCounter = this.getArticles.bind(this);
    this.populateArticles = this.populateArticles.bind(this);

    // this.getArticles();
}

componentDidMount() {
    this.getArticles();
    this.populateArticleData();
}

getArticles() {
    const articles = this.populateArticles();
    this.setState({
        articles: articles
    });
}

populateArticles() {
    let newArticles = Array.from(Array(5).keys());
    // [...Array(5)].map((e, i) => {
    //     newArticles
    // });
    // this.setState({ articles: newArticles})
    console.log('populated Articles')
    return newArticles;
}
async populateArticleData() {
    // fetch('api/Notes')
    //     .then(res => console.log(res.json()))
    //     .then(data => {
    //         this.setState({ data: data });
    //     });
    const url = 'api/Notes';
    const res = this.Get(url);
    console.log(JSON.parse(res));
    
}
Get(url) {
    let req = new XMLHttpRequest();
    req.open('GET', url, false);
    req.send(null);
    return req.responseText;
}

render() {
    return (
      <div>
        <h1>Blog</h1>

        <p>This is a simple example of a React component.</p>

        <p aria-live="polite">Articles:</p>

        <ul>
        {
            this.state.articles.map((article, i) => (
                <li key={i}>{article}</li>
            ))
        }
        </ul>

        {/* <button className="btn btn-primary" onClick={this.incrementCounter}>Increment</button> */}
      </div>
    );
  }
}
