import React, { Component } from 'react';
import TwitterPost from '../twitter_post'
import './style.css'

class TwitterFeedWindow extends Component {
    state = {  }
    render() {
        return (
            <aside className='twitterFeedWindow'>
                <h2>Related Twitter Feed</h2>
                <div>
                    <TwitterPost />
                </div>
            </aside>
         );
    }
}

export default TwitterFeedWindow;