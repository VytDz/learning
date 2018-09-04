import React, { Component } from 'react';
class Image extends Component {
    state = {
        profPicUrl: "../../assets/img/images/me.jpg",
        imgUrl: "../../assets/img/images/graphics.svg"
     }

    render() {
        return (
            <div>
                <img src={this.state.profPicUrl} alt="profile pic"/>
                <img src={this.state.imgUrl} alt=""/>
            </div>
         );
    }
}
 
export default Image;