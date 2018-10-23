import React, { Component } from 'react';
import HomePage from '../home_page';
import ArticlePage from '../article_page'
import SignIn from '../sign_in_page'
import SignUp from '../sign_up_page'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HomePage />
      </div>
    );
  }
}

export default App;
