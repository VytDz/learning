import React, { Component } from 'react';
import Header from '../header';
import CommentSection from '../comment_section';

class CommentPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Header />
                <CommentSection />
            </div>
         );
    }
}
 
export default CommentPage;