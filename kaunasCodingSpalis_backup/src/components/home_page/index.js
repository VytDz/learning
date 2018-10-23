import React, { Component } from 'react';
import CatTab from '../categories_tab';
import Header from '../header';
import ArticleHome from '../article_thumb';
import TwitterFeedWindow from '../twitter_feed_window';
import './style.css'

class HomePage extends Component {
    state = {  }
    render() {
        return (
            <div className='wrapperHome'>
                <div className='wrapperHome__header'>
                    <Header />
                </div>
                <div className='wrapperHome__elements'>
                    <div className='wrapperHome__elements__main'>
                        <CatTab />
                        <ArticleHome />
                        <ArticleHome />
                        <ArticleHome />
                        <ArticleHome />
                        <ArticleHome />
                    </div>
                    <div className='wrapperHome__elements__aside'>
                        <TwitterFeedWindow />
                    </div>
                </div>
            </div>
          );
    }
}
 
export default HomePage;