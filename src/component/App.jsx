import React from "react"
import { connect } from "react-redux"
import { fetchPosts } from '../actions';

class App extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="container">
        <header>
          <h1>Redux blog starter</h1>
        </header>

        {posts.map(post => (
          <div className="post" key={post.id}>
            <h3 className="title">{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  }
}

export default connect(mapStateToProps, { fetchPosts })(App);
