import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from '../home_page';
import ArticlePage from '../article_page';
import SignIn from '../sign_in_page';
import SignUp from '../sign_up_page';
import CommentSection from '../comment_section';
import CommentPage from '../comment_page';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HomePage />
        </div>
      </Router>
    );
  }
}

export default App;
