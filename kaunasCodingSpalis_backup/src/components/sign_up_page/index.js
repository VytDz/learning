import React, { Component } from 'react';
import CatTab from '../categories_tab';
import Header from '../header';
import './style.css'

class SignUp extends Component {
    state = {  }
    render() {
        return (
            <div className='wrapperSignUp'>
                <div className='wrapperSignUp__header'>
                    <Header />
                    <div className='wrapperSignUp__elements__catTab'>
                        <CatTab />
                    </div>
                </div>
                <div className='wrapperSignUp__elements'>
                    <div className='wrapperSignUp__elements__main'>
                        <form action="#" method='post'>
                        <h2>Username</h2>
                        <input required type="text"/>
                        <h2>Password</h2>
                        <input required type="password"/>
                        <button type="submit" value="Submit">Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}

export default SignUp;