import react from "react";
import React, { Component } from "react";
import "./Venn.css"

import Aco from "./Aco"

class Venn extends Component {

    state = {
        vennLeft: "",
        vennCenter: "",
        vennRight: "",
        descSide: "",
        title: "",
        desc: "",
        leftStatus: "focused",
        centerStatus: "faded",
        rightStatus: "faded",
    }

    setRightVenn = (size) => {
        let path = "";
        for (let i = 5.0; i >= 2.5; i -= 0.01) {
            let y = 0.0;
            y = -1 * (-1.0 * i ** 2.0 + 25) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 2.5; i <= 10.0; i += 0.01) {
            let y = 0.0;
            y = -1 * (-1.0 * i ** 2.0 + 10.0 * i) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 2.5; i <= 10.0; i += 0.01) {
            let y = 0.0;
            y = (-1.0 * i ** 2.0 + 10.0 * i) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 2.5; i <= 5.0; i += 0.01) {
            let y = 0.0;
            y = (-1.0 * i ** 2.0 + 25) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        this.setState(() => {
            return {
                vennRight: path.substr(0, path.length - 2)
            }
        })
    }

    setLeftVenn = (size) => {
        let path = "";

        for (let i = 7.5; i >= 0.0; i -= 0.01) {
            let y = 0.0;
            y = (-1.0 * i ** 2.0 + 10.0 * i) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 0.0; i <= 7.5; i += 0.01) {
            let y = 0.0;
            y = -1 * (-1.0 * i ** 2.0 + 10.0 * i) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 7.5; i >= 5.0; i -= 0.01) {
            let y = 0.0;
            y = -1 * (-1.0 * i ** 2.0 + 20.0 * i - 75) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 5.0; i <= 7.5; i += 0.01) {
            let y = 0.0;
            y = (-1.0 * i ** 2.0 + 20.0 * i - 75) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        this.setState(() => {
            return {
                vennLeft: path.substr(0, path.length - 2)
            }
        })
    }

    setCenterVenn = (size) => {
        let path = "";

        for (let i = 2.5; i >= 0; i -= 0.01) {
            let y = 0.0;
            y = -1.0 * (-1.0 * i ** 2.0 + 10.0 * i) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 0; i <= 2.5; i += 0.01) {
            let y = 0.0;
            y = (-1.0 * i ** 2.0 + 10.0 * i) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 2.5; i <= 5.0; i += 0.01) {
            let y = 0.0;
            y = (-1.0 * i ** 2.0 + 25) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        for (let i = 5.0; i >= 2.5; i -= 0.01) {
            let y = 0.0;
            y = -1 * (-1.0 * i ** 2.0 + 25) ** (0.5) + 5.0;
            path += `${size * i}% ${size * y}%, `;
        }
        this.setState(() => {
            return {
                vennCenter: path.substr(0, path.length - 2)
            }
        })

    }

    setDesc = (side) => {
        if (side === "left") {
            this.setState(() => {
                return {
                    descSide: "desc-left",
                    title: "PORTFOLIO SITE",
                    desc: <p>You're here! This site was built with React. Some notable features include the typing effect in the banner, and the custom clip-paths
                    made (with JavaScript) for the Venn diagram above.
                    </p>,
                    leftStatus: "focused",
                    centerStatus: "faded",
                    rightStatus: "faded"
                }
            })
        }
        else if (side === "center") {
            this.setState(() => {
                return {
                    descSide: "desc-center",
                    title: "PLNNR",
                    desc: <p><a href="https://plnnr.netlify.app" target="_blank">PLNNR</a> is a web-based academic planner for students. Its goal is to provide a dynamic hub that allows students to minimize the time they spend managing their academic life.
                    It tracks the status of the student's assignments, stores data about their courses, and maintains a gradebook. More features are currently in the works!
                    <br /><br />The app features a React frontend connected to a Google Firestore database.</p>,
                    leftStatus: "faded",
                    centerStatus: "focused",
                    rightStatus: "faded"
                }
            })
        }
        else {
            this.setState(() => {
                return {
                    descSide: "desc-right",
                    title: "ANT COLONY OPTIMIZATION AI PROGRAM",
                    desc: <React.Fragment>
                        <p>The goal of this program is to find the most efficient round trip through a given list of cities. It does this by replicating the behavior of ants,
                        who establish surprisingly efficient food routes to and from their colony by assessing the amount of pheromones left around by other ants. In a nutshell, shorter paths tend to
                        carry higher concentrations of pheromones because more ants can travel across them in a shorter time. Therefore, the ants tend
                        to travel along paths with higher amounts of pheromones, which eventually results in the establishment of an efficient route to and from the food source. <br /><br /> For this simulation, figuring out the right number of ants to use can be tricky, so I highly recommend using the preset coordinates and variables. However,
                            do also feel free to play around! Initially, each path that an ant decides to use is drawn in white and grey. However, the paths grow thicker as they are used more and more,
                            and turn blue when it is considered to be an optimal path. In the end, the ants should have found a complete optimal route.
                            </p><Aco></Aco></React.Fragment>,
                    leftStatus: "faded",
                    centerStatus: "faded",
                    rightStatus: "focused"
                }
            })
        }
    }

    componentDidMount() {
        this.setLeftVenn(7.5);
        this.setCenterVenn(7.5);
        this.setRightVenn(7.5);
        this.setDesc("left");
    }

    render() {

        return (

            <react.Fragment>
                <style>{`\
                    .venn-left {\
                        clip-path: polygon(${this.state.vennLeft});
                        -webkit-clip-path: polygon(${this.state.vennLeft});\
                    }\
                    .venn-center {\
                        clip-path: polygon(${this.state.vennCenter});
                        -webkit-clip-path: polygon(${this.state.vennCenter});\
                    }\
                    .venn-right {\
                        clip-path: polygon(${this.state.vennRight});
                        -webkit-clip-path: polygon(${this.state.vennRight});\
                    }\
                `}</style>

                <div className="venn-diagram">
                    <div className="diagram" id="vennDiagram">
                        <div className="venn-label left sublabel">DESIGN-INTENSIVE</div>
                        <div id="portfolio" className={`venn-img venn-left ${this.state.leftStatus}`}
                            onClick={() => { this.setDesc('left') }}></div>
                        <div id="planner" className={`venn-img venn-center ${this.state.centerStatus}`}
                            onClick={() => { this.setDesc('center') }}></div>
                        <div id="aco" className={`venn-img venn-right ${this.state.rightStatus}`}
                            onClick={() => { this.setDesc('right') }}></div>
                        <div className="venn-label right sublabel">LOGIC-INTENSIVE</div>
                    </div >
                    <div className={`description ${this.state.descSide}`}>
                        <div id="desc-title" className="label">{this.state.title}</div>
                        <div className="sublabel">{this.state.desc}</div>
                    </div>
                </div>



            </react.Fragment >


        );
    }
}

export default Venn;