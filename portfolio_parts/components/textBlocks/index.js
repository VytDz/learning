import React, { Component } from 'react';
import "./index.css"

class TextBlock extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="block">
                    <h1>&lt;/&gt;</h1>

                    <h2>Front-end Developer</h2>

                    <p>
                        I like to code things from scratch,<br/>
                        bring ideas to life on the screen,<br/>
                        make sure that everything is<br/>
                        working as intended, and hope<br/>
                        I don&#39;t have to say :<br/>
                        &quot;It was working like 5 minutes<br/>
                        ago man!&quot;
                    </p>

                    <h2>Languages I&#39;m learning to speak:</h2>

                    <p>
                        HTML, CSS, JavaScript<br/>
                        I also fiddled a bit with<br/>
                        PHP, MySQL, Python, Java,<br/>
                        MaxScript
                    </p>

                    <h2>Tools I&#39;m learning:</h2>

                    <p>
                        Visual Studio Code<br/>
                        Bootstrap<br/>
                        Sass<br/>
                        React.js<br/>
                        Node.js<br/>
                        Figma<br/>
                        Eclipse IDE<br/>
                        MAMP<br/>
                        Git<br/>
                        I had some encounters<br/>
                        with WordPress cms
                    </p>
                </div>

                <div className="block">
                    <h1>*</h1>

                    <h2>Those bonus skills I mentioned</h2>

                    <p>
                        As it is written on my diploma<br/>
                        I&#39;m a bachelor of arts, so there<br/>
                        are some skills and experiences<br/>
                        that come with it.<br/>
                    </p>

                    <h2>Skills/Experiences:</h2>

                    <p>
                        When inspiration hits I might be<br/>
                        able to scribble stuff on paper.<br/>
                        I have attention to detail, and<br/>
                        a lot of patience. I am familiar<br/>
                        with animation, game development,<br/>
                        and tools asociated with it.<br/>
                        I have done some design<br/>
                        and technical drawings in my<br/>
                        previous lines of work. Also I&#39;m used<br/>
                        to working in a team.
                    </p>

                    <h2>Software I have used:</h2>

                    <p>
                        Adobe Photoshop<br/>
                        Adobe After Effects<br/>
                        3ds Max<br/>
                        Maya<br/>
                        Corel Draw<br/>
                        Corel Painter<br/>
                        Krita<br/>
                        Perforce<br/>
                        and  other.<br/>
                    </p>
                </div>

                <div className="block">
                    <h1>:)</h1>

                    <h2>Short rant about me</h2>

                    <p>
                        I always liked pretty stuff<br/>
                        and technology so I kind of didn&#39;t<br/>
                        choose web development, it<br/>
                        chose me. I&#39;m driven by learning<br/>
                        new stuff, and aspiring to be<br/>
                        a full stack web developer<br/>
                        someday. At the moment I&#39;m<br/>
                        doing my best to crack the basics<br/>
                        and this website is one of<br/>
                        the attempts to do so.<br/>
                    </p>
                </div>
            </div>
          );
    }
}

export default TextBlock;