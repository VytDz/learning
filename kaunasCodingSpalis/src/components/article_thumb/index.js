import React, { Component } from 'react';
import './style.css'

class ArticleHome extends Component {
    state = {  }
    render() {
        return (
            <article className='articleHome'>
                <img src={require('../assets/articleThumb.jpg')} alt="thumb"/>
                <div className='articleHome__text'>
                    <h2>Temp heading</h2>
                    <p>
                        {/* need to get text from database, in heading aswell */}
                        Temp text!!!
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero totam eaque architecto at illum numquam, reiciendis non assumenda cum nihil dolore incidunt aliquam, exercitationem fugit et quisquam dicta beatae laboriosam!
                    </p>
                </div>
            </article>
         );
    }
}
 
export default ArticleHome;