import React, { Component } from "react";
import "./InfoGrid.css"

class InfoGrid extends Component {

    state = {

    }

    render() {

        return (
            <div id="info" className="grid-area" >


                <div className="toolkit cover"></div>
                <div className="education cover"></div>
                <div className="philosophy cover"></div>
                <div className="internship cover"></div>
                <div className="teaching cover"></div>
                <div className="contact cover"></div>

                {/* Toolkit */}
                <div className="toolkit-text horizontal">
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
                {/* Education */}
                <div className="education-text vertical">
                    <div className="education-icon section">
                        <i className="fas fa-laptop-code"></i>
                        <div className="label">Computer Science, B.S.</div>
                        <div className="sublabel">Cal State East Bay, CA</div>

                    </div>
                    <div className="education-icon section">
                        <i className="fas fa-city"></i>
                        <div className="label">Business Administration, A.S.</div>
                        <div className="sublabel">Laney College, CA</div>
                    </div>
                    <div className="education-icon section">
                        <i className="fas fa-globe-americas"></i>
                        <div className="label">Social Science, A.A.</div>
                        <div className="sublabel">Laney College, CA</div>
                    </div>

                </div>
                {/* Philosophy */}
                <div className="philosophy-text section vertical">
                    <i class="fas fa-mug-hot"></i>
                    <div className="sublabel" id="p1">
                        When it comes down to it, I believe that a good balance of UX, Aesthetics, and
                        Functionality is what makes or breaks a good
                        website.
                    </div>
                    <div className="sublabel" id="p2">
                        Just like any good craftsman, I want to ensure that my products
                        are enjoyable to use, look beautiful, and work like they're supposed
                        to while maintaining maximum efficiency.
                    </div>
                </div>
                {/* Internship */}
                <div className="internship-text horizontal section">
                    <div className="job-icon">
                        <div className="label">Web Developer</div>
                        <img className='jobLogo' src='tt.png'></img>
                        <div className="sublabel">TutorTree</div>

                    </div>
                    <div className="job-text vertical">
                        <div className="sublabel">
                            TutorTree is an educational management startup founded
                            in 2018. Its goal is to provide a web platform for university
                            tutors and tutees to connect.
                        </div>
                        <div className="sublabel">
                            As a developer, I was responsible for recreating the framework
                            of the web app. Technologies I used include WebFlow with
                            JS injections, Google Firebase, Heroku, and Python.
                        </div>
                    </div>
                </div>
                {/* Teaching */}
                <div className="teaching-text horizontal section ">
                    <div className="job-icon">
                        <div className="label">Instructor</div>
                        <img className='jobLogo' src='idtech.png'></img>
                        <div className="sublabel">iD Tech</div>

                    </div>
                    <div className="job-text vertical">
                        <div className="sublabel">
                            iD Technology Camp is a place for young students (ages 7-19)
                            to learn about coding, robotics, video game design, and more.
                        </div>
                        <div className="sublabel">
                            As an instructor, I taught kids the basics of coding in
                            languages such as JavaScript and Python. We even got to create
                            light shows, make small robots, and build laptops from scratch
                            with coding.
                        </div>
                    </div>
                </div>
                {/* Contact */}
                <div className="contact-text horizontal section">

                    <div className="contact-column contact-icons">
                        <i className="fas fa-map-pin"></i>
                        <i className="fas fa-envelope" id="email"></i>
                        <i className="fab fa-linkedin-in" id="linkedin"></i>
                        <i className="fab fa-github-square" id="github"></i>
                    </div>

                    <div className="contact-column">
                        <div className="sublabel">San Francisco, CA</div>
                        <div className="sublabel">gan.sungmin@gmail.com</div>
                        <div className="sublabel"><a className="contactLink" href="https://www.linkedin.com/in/sungmin-gan" target="_blank">/in/sungmin-gan</a></div>
                        <div className="sublabel"><a className="contactLink" href="https://github.com/sungmin-gan/portfolio" target="_blank">/sungmin-gan</a></div>
                    </div>


                </div>
            </div>
        );
    }
}

export default InfoGrid;