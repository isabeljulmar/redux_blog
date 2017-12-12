import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import BlogForm from './components/BlogForm'

class App extends Component {
  render() {
    return (
      <div>
        <Header as='h1'>Blog</Header>
        <BlogForm />
      </div>
    )
  }
}

export default App;
