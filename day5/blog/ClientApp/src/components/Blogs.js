import React, { Component } from 'react';

export class Blogs extends Component {
  static displayName = Blogs.name;

  constructor(props) {
    super(props);
    const blogs = [
        {
            Id: 1,
            Title: "Some Rando Title",
            Content: "Some rando content"
        }
    ];
    this.state = { blogs: blogs, loading: true };
  }

  componentDidMount() {
    this.populateBlogData();
  }

  static renderBlogs(blogs) {
    return (
      <div className='Blogs'>
        <ul>
            {blogs}
        </ul>
      </div>
    );
  }

  render() {
    let contents = this.state.loading
      ? <p><em>Loading...</em></p>
      : Blogs.renderBlogs(this.state.blogs);

    return (
      <div>
        <h1 id="tabelLabel" >Blogs</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateBlogData() {
    // const response = await fetch('http://localhost:5201/blog', {mode: 'no-cors'});
    const response = await fetch('blog');
    // console.log(`res:${response}`);
    const data = await response.json();
    // console.log(`data:${data}`);
    const blogs = data.map(blog => {
        <li key={blog.id}>{blog.title}</li>
    });
    console.log(`res:${response}, data:${data}, blogs:${blogs}`);
    this.setState({ blogs: blogs, loading: false });
  }
}
