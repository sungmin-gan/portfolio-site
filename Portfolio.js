import React, { Component } from 'react'

import "./Portfolio.css"

class Portfolio extends Component {

    state = {
        comet: "whitesmoke"
    }

    changeColor = (e) => {
        this.setState(() => { return { comet: e.target.id } })
    }

    render() {
        return (
            <div className={`portfolio ${this.props.size === 'S' ? 'fullHeight' : null}`}>
                <h3>KEY FEATURES</h3>
                <div className="portfolioSecs">
                    <div className={`portSection ${this.props.size === 'S' ? 'fullHeight' : null}`}>
                        <div className="portContentWrap"><i class="fab fa-css3" id="css"></i></div>
                        <div className="pLabel">CSS3 Animations</div>
                    </div>
                    <div className={`portSection ${this.props.size === 'S' ? 'fullHeight' : null}`}>
                        <div id="code" className="portContentWrap">
                            <div>&lt;App&gt;</div>
                            {this.props.size !== "S" &&
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ProjectsComponent&gt;</div>
                            }
                            <div>{this.props.size === 'S' ? null : <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}&nbsp;&nbsp;&nbsp;&nbsp;&lt;Graph/&gt;</div>
                            <div>{this.props.size === 'S' ? null : <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}&nbsp;&nbsp;&nbsp;&nbsp;&lt;Content/&gt;</div>
                            <div>{this.props.size === 'S' ? null : <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}&nbsp;&nbsp;&nbsp;&nbsp;&lt;Menu/&gt;</div>
                            {this.props.size !== "S" &&
                                <div>&nbsp;&nbsp;&nbsp;&nbsp;&lt;ProjectsComponent/&gt;</div>
                            }
                            <div>&lt;App/&gt;</div>
                        </div>
                        <div className="pLabel" >Component Oriented</div>
                    </div>
                    <div className={`portSection ${this.props.size === 'S' ? 'fullHeight' : null}`}>
                        <div className="portContentWrap">
                            <i class="fas fa-meteor" id="meteor"
                                style={{ color: `${this.state.comet}`, textShadow: `1px 1px 6px ${this.state.comet}` }}>

                            </i>
                            <div id="colorBar">
                                <div id="whitesmoke" onClick={(e) => { this.changeColor(e) }}></div>
                                <div id="orangered" onClick={(e) => { this.changeColor(e) }}></div>
                                <div id="darkorchid" onClick={(e) => { this.changeColor(e) }}></div>
                            </div>
                        </div>
                        <div className="pLabel">State Dependent</div>
                    </div>
                </div>

            </div>
        )
    }


}

export default Portfolio;