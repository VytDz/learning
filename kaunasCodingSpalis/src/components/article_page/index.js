import React, { Component } from 'react';
import CatTab from '../categories_tab';
import Header from '../header';
import ArticleFull from '../article_full';
import TwitterFeedWindow from '../twitter_feed_window';
import CommentSection from '../comment_section';
import './style.css'

class ArticlePage extends Component {
    state = {  }
    render() {
        return (
            <div className='wrapperArticle'>
                <div className='wrapperArticle__header'>
                    <Header />
                </div>
                <div className='wrapperArticle__elements'>
                    <div className='wrapperArticle__elements__main'>
                        <CatTab />
                        <ArticleFull />
                    </div>
                    <div className='wrapperArticle__elements__aside'>
                        <TwitterFeedWindow />
                    </div>
                </div>
                <CommentSection />
            </div>
          );
    }
}
 
export default ArticlePage;