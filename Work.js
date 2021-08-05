import React, { Component } from "react";
import "./Work.css"
import "./Carousel.css"
import Portfolio from './Portfolio'
import Plnnr from './Plnnr'
import Aco2 from './Aco2'


class Work extends Component {

    constructor() {
        super();
        this.port = React.createRef();
        this.pln = React.createRef();
        this.ant = React.createRef();
    }

    state = {
        currentSlide: 0,
        portPos: 0,
        plnPos: 1,
        antPos: 2,
        bars: [
            [.5, 1, .5, 0],
            [.75, .75, .75, .5],
            [0, 0.25, 1, 0]
        ]
    }

    switchPage = (e) => {
        let next = Number(e.target.id[2]);
        let curr = this.state.currentSlide;
        let newPortPos, newPlnPos, newAntPos;
        if (next == 2) {
            newPortPos = this.state.portPos + 1;
            if (newPortPos === 3) { newPortPos = 0 }
            newPlnPos = this.state.plnPos + 1;
            if (newPlnPos === 3) { newPlnPos = 0 }
            newAntPos = this.state.antPos + 1;
            if (newAntPos === 3) { newAntPos = 0 }
            curr -= 1;
            if (curr === -1) { curr = 2 }
        }
        if (next == 1) {
            newPortPos = this.state.portPos - 1;
            if (newPortPos === -1) { newPortPos = 2 }
            newPlnPos = this.state.plnPos - 1;
            if (newPlnPos === -1) { newPlnPos = 2 }
            newAntPos = this.state.antPos - 1;
            if (newAntPos === -1) { newAntPos = 2 }
            curr += 1;
            if (curr === 3) { curr = 0 }

        }
        this.setState(() => {
            return {
                portPos: newPortPos,
                plnPos: newPlnPos,
                antPos: newAntPos,
                currentSlide: curr
            }
        })
    }

    render() {

        return (
            <div className="about">
                <div className="grid-area" style={{ 
                    width: `${this.props.size === 'S' ? '95vw' : '77vw'}`, 
                    height: `${this.props.size === 'S' ? '70vh' : '75vh'}`
                }}>

                    <div className="mainArea front">
                    </div>


                    <div className={`control ${this.props.size === 'S' ? 'controlS' : null}`}>

                        <i class="fas fa-bug left__" id={`id${this.state.antPos}`}
                            ref={this.ant} onClick={(e) => { this.switchPage(e) }}
                        ></i>

                        <i class="fas fa-home center" id={`id${this.state.portPos}`}
                            ref={this.port} onClick={(e) => { this.switchPage(e) }}
                        ></i>

                        <i class="far fa-calendar-alt right_" id={`id${this.state.plnPos}`}
                            ref={this.pln} onClick={(e) => { this.switchPage(e) }}
                        ></i>

                    </div>

                    <div className={`graph ${this.props.size === 'S' ? 'graphS' : null}`}>
                        <div className="titleWork" id={`titlePos${this.state.portPos}`}>Portfolio</div>
                        <div className="titleWork" id={`titlePos${this.state.antPos}`}>Ant Colony AI</div>
                        <div className="titleWork" id={`titlePos${this.state.plnPos}`}>Plnnr
                        {this.props.size === 'S' &&
                                <a id="pLinkTitle" href="https://plnnr.netlify.app" target="_blank">VISIT&nbsp;&nbsp;<i class="fas fa-external-link-alt"></i></a>
                            }
                        </div>

                        <div className="diagrams">

                            <div className="graphLabels">
                                <div>React</div>
                                <div>CSS</div>
                                <div>JavaScript</div>
                                <div>Database</div>
                            </div>

                            <div className="graphBars">
                                <div id="bar1" style={{ width: `${this.state.bars[this.state.currentSlide][0] * 33.33}%` }}></div>
                                <div id="bar2" style={{ width: `${this.state.bars[this.state.currentSlide][1] * 33.33}%` }}></div>
                                <div id="bar3" style={{ width: `${this.state.bars[this.state.currentSlide][2] * 33.33}%` }}></div>
                                <div id="bar4" style={{ width: `${this.state.bars[this.state.currentSlide][3] * 33.33}%` }}></div>
                            </div>


                        </div>



                    </div>

                    {this.state.currentSlide === 1 && this.props.size !== "S" &&
                        < div className="plnLink">

                            <a id="pLink" href="https://plnnr.netlify.app" target="_blank">VISIT&nbsp;&nbsp;<i class="fas fa-external-link-alt"></i></a>
                        </div>
                    }

                    {this.state.currentSlide === 2 && this.props.size !== 'S' &&
                        <div className="acoLegend">
                            <div id="keyTitle">Route Key</div>
                            <div className="acoKey">
                                <div className="acoSymbols">
                                    <div className="keyrow"><div id="city1">1</div></div>
                                    <div className="keyrow"><div id="thin"></div></div>
                                    <div className="keyrow"><div id="thick"></div></div>
                                    <div className="keyrow"><div id="rec"></div></div>
                                    <div className="keyrow"><div id="est"></div></div>
                                </div>
                                <div className="acoKeys">
                                    <div>Start City</div>
                                    <div>Traveled</div>
                                    <div>Traveled More</div>
                                    <div>Recommended</div>
                                    <div>Established</div>

                                </div>

                            </div>
                        </div>

                    }
                    <div className={`content ${this.props.size === 'S' ? 'contentS' : null}`}>
                        <div className="contentSlide" id={`contentPos${this.state.portPos}`}><Portfolio size={this.props.size} /></div>
                        <div className="contentSlide" id={`contentPos${this.state.antPos}`}><Aco2 size={this.props.size} /></div>
                        <div className="contentSlide" id={`contentPos${this.state.plnPos}`}><Plnnr size={this.props.size} /></div>
                    </div>

                </div>


            </div >
        );
    }
}

export default Work;