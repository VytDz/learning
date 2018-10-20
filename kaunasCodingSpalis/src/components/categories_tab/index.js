import React, { Component } from 'react';
import './style.css'

class CatTab
 extends Component {
    state = {  }
    render() {
        return (
            <nav className='catTab'>
                <ul className='catTab__ul--styles'>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Hardware</a></li>
                    <li><a href="#">Gadgets</a></li>
                    <li><a href="#">Software</a></li>
                    <li><a href="#">Coding</a></li>
                    <li><a href="#">Gaming</a></li>
                </ul>
            </nav>
         );
    }
}

export default CatTab;