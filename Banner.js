import React, { Component } from "react";

import './Banner.css'

class Banner extends Component {

    state = {
        skill: "JavaScript",
        skills: ["JavaScript.", "HTML5.", "CSS3.", "React.", "Python.", "Firestore."]
    }

    constructor() {
        super();
        this.skill = React.createRef();
    }

    switchSkill = async () => {
        let counter = 1;
        setInterval(() => {
            this.setState(() => { return { skill: this.state.skills[counter] } })
            counter++;
            if (counter === this.state.skills.length) {
                counter = 0;
            }
        }, 10000)
    }

    changeSkill = async () => {
        let lc = 0;
        let wc = 0;

        for (let i = 0; i < 9000; i++) {

            for (let j = 0; j < this.state.skills[i % this.state.skills.length].length * 2; j++) {
                lc += 1;
                if (j === this.state.skills[i % this.state.skills.length].length + 1) {
                    wc += 1;
                }
                let x = -1 * Math.abs(j - this.state.skills[i % this.state.skills.length].length) + this.state.skills[i % this.state.skills.length].length;
                let newWord = this.state.skills[i % this.state.skills.length].substr(0, x);
                setTimeout(() => {
                    this.setState(() => { return { skill: newWord } })
                }, (10 + lc * 175 + wc * 3000))
            }
        }
    }

    componentDidMount() {
        this.switchSkill();
    }

    render() {


        return (
            <div className="banner">

                <div className={`h2 ${this.props.size === 'S' ? 'h2S' : null}`}>Hi, I'm Sungmin</div>

                <div className={`h3 ${this.props.size === 'S' ? 'h3S' : null}`}>A web developer with experience in&nbsp;
    <span className={`skills ${this.props.size === 'S' ? 'skillsS' : null}`} id="skills">{this.state.skill}</span><br />

                    <span className='filler'>.....</span><span className={`dots ${this.props.size === 'S' ? 'dotsS' : null}`} id="dots2">
                        <span className="dots1">&nbsp;&nbsp;</span><span className="dots2">&nbsp;&nbsp;</span><span className="dots1">&nbsp;&nbsp;</span><span className="dots2">&nbsp;&nbsp;</span><span className="dots1">&nbsp;&nbsp;</span><span className="dots1">&nbsp;&nbsp;</span>
                    </span><br />
                    <span className='filler'>.....</span><span className={`dots ${this.props.size === 'S' ? 'dotsS' : null}`} id="dots1">
                        <span className="dots2">&nbsp;</span><span className="dots1">..</span><span className="dots2">.&nbsp;</span><span className="dots1">.&nbsp;</span><span className="dots2">&nbsp;&nbsp;</span>
                    </span><br />
                    <span className='filler'>.....</span><span className={`dots ${this.props.size === 'S' ? 'dotsS' : null}`} id="dots1">
                        <span className="dots2">.&nbsp;</span><span className="dots1">.&nbsp;</span><span className="dots2">.&nbsp;</span><span className="dots1">.&nbsp;</span><span className="dots2">&nbsp;&nbsp;</span>
                    </span><br />
                    <span className='filler'>.....</span><span className={`dots ${this.props.size === 'S' ? 'dotsS' : null}`} id="dots2">
                        <span className="dots1">.&nbsp;</span><span className="dots2">..</span><span className="dots1">&nbsp;&nbsp;</span><span className="dots2">&nbsp;&nbsp;</span><span className="dots1">&nbsp;&nbsp;</span><span className="dots1">&nbsp;&nbsp;</span>
                    </span>

                </div>



                <i class="fas fa-certificate" id={`${this.props.size === 'S' ? 'roid-1S' : 'roid-1'}`} ></i>



            </div >
        );
    }
}

export default Banner;