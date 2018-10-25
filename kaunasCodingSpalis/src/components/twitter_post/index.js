import React, { Component } from 'react';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './style.css'

class TwitterPost extends Component {
    state = {  }
    render() {
        return (
            <div className='twitterPost'>
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="JavaScriptDaily"
                options={{height: 900}}
                />
            </div>
         );
    }
}

export default TwitterPost;