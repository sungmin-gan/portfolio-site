import React, { Component } from "react";

import "./Aco.css"
import './Carousel.css'

class Carousel extends Component {
    state = {
        currentEx: 1,
    }

    constructor() {
        super();
        this.ref_1 = React.createRef();
        this.ref_2 = React.createRef();
        this.ref_3 = React.createRef();
    }

    moveCenter = (el) => {
        el.current.style.zIndex = "3";
        el.current.style.left = '38.5%';
        el.current.style.width = '20%';
        el.current.children[1].style.fontSize = "1em";
        el.current.children[1].style.marginTop = "2em";
        el.current.children[0].style.opacity = "1";
        el.current.children[0].style.fontSize = "7.5em";

    }

    moveLeft = (el, z) => {
        el.current.style.zIndex = z.toString();
        el.current.style.left = '23%';
        el.current.style.width = '12%';
        el.current.children[1].style.fontSize = "0.65em";
        el.current.children[1].style.marginTop = "0";
        el.current.children[0].style.opacity = "0.5";
        el.current.children[0].style.fontSize = "3em";
    }

    moveRight = (el, z) => {
        el.current.style.zIndex = z.toString();
        el.current.style.left = '62%';
        el.current.style.width = '12%';
        el.current.children[1].style.fontSize = "0.65em";
        el.current.children[1].style.marginTop = "0";
        el.current.children[0].style.opacity = "0.5";
        el.current.children[0].style.fontSize = "3em";

    }

    changeEx = (id) => {
        let exs = [this.ref_1, this.ref_2, this.ref_3];
        console.log(exs[0])
        let child = exs[0].current.children[1].style;
        console.log(child)
        if (id > this.state.currentEx && !(id === 3 && this.state.currentEx === 1) || id === 1 && this.state.currentEx === 3) {
            this.moveCenter(exs[id - 1]);
            this.moveLeft(exs[(id + 1) % 3], 2);
            this.moveRight(exs[(id % 3)], 1);
            this.setState(() => { return { currentEx: id } })
        }
        else if (id < this.state.currentEx && !(id === 1 && this.state.currentEx === 3) || id === 3 && this.state.currentEx === 1) {
            this.moveCenter(exs[id - 1])
            this.moveRight(exs[(id % 3)], 2);
            this.moveLeft(exs[(id + 1) % 3], 1);
            this.setState(() => { return { currentEx: id } })
        }

    }
    render() {
        return (
            <div className="carousel">


            </div>
        )
    }
}

export default Carousel;