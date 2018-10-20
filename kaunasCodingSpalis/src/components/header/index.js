import React, { Component } from 'react';
import './style.css'

class Header extends Component {
// Finish if there's time
// needs a componentDidMount to rerender time on real time
// check the states

// state = {
//     time:LocalTime;
// }
//     var LocalTime = new Date();

    

    render() {
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
                        <i className="fab fa-twitter fa-2x"></i>
                    </div>
                    <div className='header__socMedia--facebook'>
                       <i className="fab fa-facebook-f fa-2x"></i>
                    </div>
                </div>
                {/* <div className='header_time'>{this.state.time}</div> */}
            </header>

          );
    }
}

export default Header;