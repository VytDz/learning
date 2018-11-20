import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomePage from '../home_page';
import './style.css'


       
      {/* <Route path="/topics" component={Topics} /> */}

class Header extends Component {
// Finish if there's time
// needs a componentDidMount to rerender time on real time
// check the states

// state = {
//     time:LocalTime;
// }
//     var LocalTime = new Date();



    render() {
        const home = <Route path="../home_page/index.js" component={HomePage} />;

        return (
            <header className='header'>
                <div className='header__searchBar'>
                    <input type='text' placeholder='Search articles'/>
                </div>
                <div className='header__logins'>
                    {/* needs an a link in li */}
                    <ul>
                        <li>Sign Up</li>
                        <li>Sign In</li>
                    </ul>
                </div> 
                <div className='header__logoHome'>
                   <p><i className="fas fa-power-off"></i>Nerdrage</p> 
                </div>
                <div className='header__socMedia'>
                    <div className='header__socMedia--twitter'>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                    <div className='header__socMedia--facebook'>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-2x"></i></a>
                    </div>
                </div>
                {/* <div className='header_time'>{this.state.time}</div> */}
            </header>

          );
    }
}

export default Header;

