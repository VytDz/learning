import React, { Component } from 'react';
import CatTab from '../categories_tab';
import Header from '../header';
import './style.css'

class SignIn extends Component {
    state = {  }
    render() {
        return (
            <div className='wrapperSignIn'>
                <div className='wrapperSignIn__header'>
                    <Header />
                    <div className='wrapperSignIn__elements__catTab'>
                        <CatTab />
                    </div>
                </div>
                <div className='wrapperSignIn__elements'>
                    <div className='wrapperSignIn__elements__main'>
                        <form action="#" method='post'>
                        <h2>Username</h2>
                        <input required type="text"/>
                        <h2>Password</h2>
                        <input required type="password"/>
                        <button type="submit" value="Submit">Sign In</button>
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}

export default SignIn;