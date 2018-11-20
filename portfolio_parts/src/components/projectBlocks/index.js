import React, { Component } from 'react';
import "./index.css"

class ProjectBlock extends Component {
    render() {
        return (
            <div className="pWrapper">
                <div className="pBlock mx-4">
                    <a className="snekkerThumb" target="_blank" rel="noopener noreferrer" href="http://snekkerpoulsen.com/"></a>
                </div>
                <div className="gitBlock">
                    <a className="gitThumb" target="_blank" rel="noopener noreferrer" href="https://github.com/VytDz"><i class="fab fa-github fa-7x"></i></a>
                    <p className="git-text"><strong>My github account</strong></p>
                </div>
                <div className="dots">...</div>

            </div>
          );
    }
}

export default ProjectBlock;