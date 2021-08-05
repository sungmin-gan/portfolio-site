import React, { Component } from "react";
import "./InfoGrid2.css"

class InfoGrid2 extends Component {

    render() {

        return (
            <div className="about">
                <div id="info" className="grid-area" style={{ 
                    width: `${this.props.size === 'S' ? '95vw' : '77vw'}`,
                    height: `${this.props.size === 'S' ? '70vh' : '75vh'}`
                }}>

                    {this.props.size !== 'S' &&
                        <React.Fragment>
                            <div className="education card card-vertical">
                                <div className="cardInner">
                                    <div className="front">EDUCATION</div>
                                    <div className="v back vertical">
                                        <div className="education-icon section">
                                            <i className="fas fa-laptop-code"></i>
                                            <div className="label">Computer Science, B.S.</div>
                                            <div className="sublabel">Cal State East Bay, CA</div>

                                        </div>
                                        <div className="education-icon section">
                                            <i className="fas fa-city"></i>
                                            <div className="label">Business Admin., A.S.</div>
                                            <div className="sublabel">Laney College, CA</div>
                                        </div>
                                        <div className="education-icon section">
                                            <i className="fas fa-globe-americas"></i>
                                            <div className="label">Social Science, A.A.</div>
                                            <div className="sublabel">Laney College, CA</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="philosophy card card-vertical">
                                <div className="cardInner">
                                    <div className="front">PHILOSOPHY</div>
                                    <div id="philoBack" className="v back vertical">
                                        <i class="fas fa-mug-hot"></i>
                                        <div className="label" id="p1">
                                            I believe that a good balance of UX, Aesthetics, and
                                            Functionality is what makes or breaks a good
                                            website.
                                <br /><br />
                                Just like any good craftsman, I want to ensure that my products
                                are enjoyable to use, look beautiful, and work like they're supposed
                                to while maintaining maximum efficiency.
                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="internship card card-horizontal">
                                <div className="cardInner">
                                    <div className="front">INTERNSHIP</div>
                                    <div className="h back horizontal">
                                        <div className="job-icon">
                                            <div className="label">Web Developer</div>
                                            <img className='jobLogo' src='tt.png'></img>
                                            <div className="sublabel">TutorTree</div>

                                        </div>
                                        <div className="job-text vertical">
                                            <div className="sublabel">
                                                TutorTree is an educational management startup whose goal is to provide a platform for university
                                                tutors and tutees to connect.
                                    </div>
                                            <div className="sublabel">
                                                As a developer, I recreated the framework
                                                of the web app. I used technologies like WebFlow, Google Firebase, Heroku, and Python.
                                    </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="teaching card card-horizontal">
                                <div className="cardInner">
                                    <div className="front">TEACHING</div>
                                    <div className="h back horizontal">
                                        <div className="job-icon">
                                            <div className="label">Instructor</div>
                                            <img className='jobLogo' src='idtech.png'></img>
                                            <div className="sublabel">iD Tech</div>

                                        </div>
                                        <div className="job-text vertical">
                                            <div className="sublabel">
                                                iD Technology Camp is a place for young students
                                                to learn about coding, robotics, video game design, and more.
                                </div>
                                            <div className="sublabel">
                                                As an instructor, I taught kids to code in
                                                languages like JavaScript and Python. We created
                                                light shows, made small robots, and built laptops with coding.
                                </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="front fillerLeft">

                            </div>
                            <div className="front fillerRight">
                            </div>
                            <div className="front fillerMid"></div>

                            <div className={`toolkit card card-horizontal`}>
                                <div className=" cardInner">
                                    <div className="front">TOOLKIT</div>
                                    <div className="h back horizontal">
                                        <div className="toolkit-icon section">
                                            <i className="fab fa-js-square"></i>
                                            <div className="label">JavaScript</div>
                                        </div>
                                        <div className="toolkit-icon section">
                                            <i className="fab fa-html5"></i>
                                            <div className="label">HTML5</div>
                                        </div>

                                        <div className="toolkit-icon section">
                                            <i className="fab fa-css3-alt"></i>
                                            <div className="label">CSS3</div>
                                        </div>

                                        <div className="toolkit-icon section">
                                            <i className="fab fa-react"></i>
                                            <div className="label">React</div>
                                        </div>
                                        <div className="toolkit-icon section">
                                            <i className="fab fa-python"></i>
                                            <div className="label">Python</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={`contact card card-vertical`}>
                                <div className="cardInner">
                                    <div className="front">CONTACT</div>
                                    <div className="v back horizontal">
                                        <div className="contactWrap">
                                            <div id="contactIconsList">
                                                <i className="fas fa-map-pin"></i>
                                                <i className="fab fa-google" id="email"></i>
                                                <i className="fab fa-linkedin-in" id="linkedin"></i>
                                                <i className="fab fa-github-square" id="github"></i>
                                            </div>
                                            <div id="contactTextList">
                                                <div>San Francisco, CA</div>
                                                <div>gan.sungmin</div>
                                                <div><a className="contactLink" href="https://www.linkedin.com/in/sungmin-gan" target="_blank">/in/sungmin-gan</a></div>
                                                <div><a className="contactLink" href="https://github.com/sungmin-gan/portfolio" target="_blank">/sungmin-gan</a></div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    }



                    <div className={`front fillerTop backMobile ${this.props.size === 'S' ? 'fillerTopS' : null} `}>
                        <div className="profile pIcons">
                            {this.props.size !== 'S' && <div id="astro"><i class="fas fa-user-astronaut"></i></div> }
                            <div className="profileLabels">
                                <div>Full Name:</div>
                                <div>Country of Origin:</div>
                                <div>Canine Friendly:</div>
                                <div>Feline Friendly:</div>
                                <div>Hobbies:</div>
                            </div>
                            <div className="profileFields">
                                <div>SUNGMIN GAN</div>
                                <div>SOUTH KOREA</div>
                                <div >YES</div>
                                <div >YES</div>
                                <div >GAMING, BASEBALL</div>
                            </div>
                        </div>
                    </div>



                    {this.props.size === 'S' &&
                        <React.Fragment>
                            <div className={`toolkitS card card-horizontal`}>
                                <div className="cardInner cardInnerSH">
                                    <div className="h back horizontal">
                                        <div className="toolkit-icon section">
                                            <i className="fab fa-js-square"></i>
                                            <div className="label">JavaScript</div>
                                        </div>
                                        <div className="toolkit-icon section">
                                            <i className="fab fa-html5"></i>
                                            <div className="label">HTML5</div>
                                        </div>

                                        <div className="toolkit-icon section">
                                            <i className="fab fa-css3-alt"></i>
                                            <div className="label">CSS3</div>
                                        </div>

                                        <div className="toolkit-icon section">
                                            <i className="fab fa-react"></i>
                                            <div className="label">React</div>
                                        </div>
                                        <div className="toolkit-icon section">
                                            <i className="fab fa-python"></i>
                                            <div className="label">Python</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className={`contactS card card-vertical`}>
                                <div className="cardInner cardInnerSV">
                                    <div className="v back horizontal">
                                    <div className="contactWrap">
                                            <div id="contactIconsList">
                                                <i className="fas fa-map-pin"></i>
                                                <i className="fab fa-google" id="email"></i>
                                                <i className="fab fa-linkedin-in" id="linkedin"></i>
                                                <i className="fab fa-github-square" id="github"></i>
                                            </div>
                                            <div id="contactTextList">
                                                <div>San Francisco, CA</div>
                                                <div>gan.sungmin</div>
                                                <div><a className="contactLink" href="https://www.linkedin.com/in/sungmin-gan" target="_blank">/in/sungmin-gan</a></div>
                                                <div><a className="contactLink" href="https://github.com/sungmin-gan/portfolio" target="_blank">/sungmin-gan</a></div>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    }

                </div>


            </div>
        );
    }
}

export default InfoGrid2;