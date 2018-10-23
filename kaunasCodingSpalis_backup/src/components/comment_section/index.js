import React, { Component } from 'react';
import Comment from '../comment'
import './style.css'

class CommentSection extends Component {
    state = {  }
    render() {
        return (
            <div className='commentSection'>
                <h2>Comment Section:</h2>
                <Comment />
            </div>
         );
    }
}

export default CommentSection;