import React, { Component } from 'react';
import Form from '../form/index.js'
import './index.css'

class HiButton extends Component {

    state = {  }
    render() {
        return (
            <button className='Contact-button'><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/vytenis-dzvonkas">Say Hi</a></button>
        );
    }
}

export default HiButton;