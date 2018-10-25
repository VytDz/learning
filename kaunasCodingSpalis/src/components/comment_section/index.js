import React, { Component } from 'react';
import Comment from '../comment'
import './style.css'

class CommentSection extends Component {
    state = {  }
    render() {
        return (
            <div>
                <div className='commentSection'>
                    <h2>Comment Section:</h2>
                    <Comment />
                </div>
            </div>
         );
    }
}

export default CommentSection;