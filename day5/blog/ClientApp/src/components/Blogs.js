import React, { Component } from 'react';
import './Blogs.css';

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
        <ul className='blog-list'>
            { blogs.map(data => this.renderBlog(data)) }
        </ul>
      </div>
    );
  }

  static renderBlog(blog) {
    return (
      <li key={blog.id} className='blog-list-item'>
        <h5>Title: {blog.title}</h5>
        <p>{blog.content}</p>
      </li>
    )
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
    // const blogs = data.map((blog) => {
    //     <li key={blog.id}>{blog.title}</li>
    // });
    // console.log(`res:${JSON.stringify(response)}, data:${JSON.stringify(data)}, blogs:${JSON.stringify(blogs, null, 4)}`);
    this.setState({ blogs: data, loading: false });
  }
}
