import React, { Component } from "react";
import HiButton from '../hiButton';
import Images from '../images';
import TextBlock from '../textBlocks';
import "./App.css";
import 'normalize.css';


class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navigation">
            <h1 className="navigation__title">Vytenis Dzvonkas</h1>
            <HiButton />
        </nav>

        <header className="header">
          <Images />
        </header>

        <div className="App__title">
          <h2 className="App__title--h2">Beginner Front-end Developer*</h2>
          <p className="App__title--p">*some bonus skills included</p>
        </div>

        <main>
          <TextBlock />
        </main>

        <div className="App__title">
          <h3 className="App__title--h3">My Projects</h3>
        </div>

        <footer>

        </footer>

        <div className="social">
          <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/vytenis-dzvonkas"><i class="fab fa-linkedin fa-5x"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/Vytenis87225335"><i class="fab fa-twitter fa-5x mx-3"></i></a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/vytenis.dzvonkas"><i class="fab fa-facebook fa-5x"></i></a>
        </div>

        <p className="text-center mx-2">webpage designed and coded by me &copy; 2018 </p>

      </div>
    );
  }
}

export default App;
