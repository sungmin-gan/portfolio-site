import React, { Component } from "react";

import "./Aco.css";

class Aco extends Component {

    state = {
        cities: [0, 0, 0, 0, 0, 0, 0],
        xValues: [86, 84, 5, 32, 71, 25, 61],
        yValues: [95, 56, 5, 61, 25, 74, 47],
        clientWidth: null,
    }

    componentDidMount() {
        this.setState(() => { return { clientWidth: document.body.clientWidth || window.innerWidth } })
    }

    storeX = (index, value) => {
        let newXValues = this.state.xValues;
        newXValues[index] = value;
        this.setState(() => { return { xValues: newXValues } })
    }

    storeY = (index, value) => {
        let newYValues = this.state.yValues;
        newYValues[index] = value;
        this.setState(() => { return { yValues: newYValues } })
    }

    addCity = () => {
        let newCities = this.state.cities;
        let newXValues = this.state.xValues;
        let newYValues = this.state.yValues;
        newCities.push(0);
        newXValues.push(null);
        newYValues.push(null);
        this.setState(() => { return { cities: newCities, xValues: newXValues, yValues: newYValues } })
    }

    randInt = () => {
        return Math.floor(Math.random() * Math.floor(101));
    }

    draw = (e) => {
        e.preventDefault();

        let conversion = this.state.clientWidth / 2.2 / 100;

        let map = e.target['childNodes'][2].getContext('2d');
        map.moveTo(0, 0);

        const drawCities = () => {

            this.state.cities.map((city, index) => {
                map.lineWidth = 1.5;
                map.strokeStyle = 'white';
                map.beginPath();
                map.arc((this.state.xValues[index] * conversion),
                    (this.state.yValues[index] * conversion),
                    this.state.clientWidth / 2.2 / 60, 0, 2 * Math.PI, false);
                map.stroke();
                map.fillStyle = 'black';
                map.fill();
                map.fillStyle = 'red';
                map.font = '1.5em sans-serif'
                map.fillText(index + 1, (this.state.xValues[index] * this.state.clientWidth / 2.2 / 100),
                    (this.state.yValues[index] * this.state.clientWidth / 2.2 / 100))
            })
        }
        drawCities();

        let path = [];

        let cityCoords = [];
        let distanceMatrix = new Array(this.state.cities.length);
        let phersMatrix = new Array(this.state.cities.length);
        let frequencyMatrix = new Array(this.state.cities.length);

        let a = 1;
        let b = 5;
        let Q = 5;
        let pDecay = 0.8;

        let numRds = e.target['numRds'].value;
        let numAnts = e.target['numAnts'].value;

        for (let i = 0; i < this.state.cities.length; i++) {
            distanceMatrix[i] = new Array(this.state.cities.length);
            phersMatrix[i] = new Array(this.state.cities.length);
            frequencyMatrix[i] = new Array(this.state.cities.length);

            cityCoords.push({
                x: this.state.xValues[i],
                y: this.state.yValues[i]
            })
        }

        cityCoords.map((city, i) => {
            for (let j = i + 1; j < cityCoords.length; j++) {
                let d = ((cityCoords[i].x - cityCoords[j].x) ** 2 + (cityCoords[i].y - cityCoords[j].y) ** 2) ** 0.5;
                distanceMatrix[i][j] = d; distanceMatrix[j][i] = d;
                phersMatrix[i][j] = 0; phersMatrix[j][i] = 0;
                frequencyMatrix[i][j] = 0; frequencyMatrix[j][i] = 0;
            }
        })

        let firstRd = true;

        for (let z = 0; z < numRds; z++) {
            for (let i = 0; i < numAnts; i++) {
                let currentNode = 0;
                let validNodes = [];
                for (let j = 1; j < this.state.cities.length; j++) {
                    validNodes.push(j);
                }
                for (let k = 0; k < this.state.cities.length; k++) {
                    let aggFitness = 0;
                    let nodeFitness = new Array(this.state.cities.length - 1);
                    let nodeProbs = new Array(this.state.cities.length - 1);

                    validNodes.map((node) => {
                        let f = 0;
                        if (firstRd) {
                            f = (1 / distanceMatrix[currentNode][node]) ** b;
                        }
                        else {
                            f = (phersMatrix[currentNode][node] + phersMatrix[node][currentNode]) ** a * (1 / distanceMatrix[currentNode][node]) ** b;
                        }
                        nodeFitness[node] = f;
                        aggFitness += f;
                    })

                    let randInt = this.randInt();
                    let accumulator = 0;

                    for (let m = 0; m < validNodes.length; m++) {
                        let node = validNodes[m];
                        nodeProbs[node] = accumulator + nodeFitness[node] / aggFitness * 100;
                        if (randInt <= nodeProbs[node]) {
                            frequencyMatrix[currentNode][node] += 1;
                            currentNode = node;
                            path.push(node);
                            validNodes.splice(validNodes.indexOf(node), 1);
                            break
                        }
                        accumulator += nodeProbs[node];
                    }
                }
                path.push(0);

            }
            for (let i = 0; i < this.state.cities.length; i++) {
                for (let j = 0; j < this.state.cities.length; j++) {
                    if (frequencyMatrix[i][j] > 0) {
                        phersMatrix[i][j] = phersMatrix[i][j] * pDecay + frequencyMatrix[i][j] * (Q / distanceMatrix[i][j])
                    }
                }
            }
            firstRd = false;
        }

        path.unshift(0);
        let p = 0;

        let x = cityCoords[path[p]].x * conversion;
        let y = cityCoords[path[p]].y * conversion;
        let m = ((cityCoords[path[p + 1]].y - cityCoords[path[p]].y) / (cityCoords[path[p + 1]].x - cityCoords[path[p]].x));
        let x1 = cityCoords[path[p]].x * conversion;
        let y1 = cityCoords[path[p]].y * conversion;

        let xLimit = cityCoords[path[p + 1]].x * conversion;
        let yLimit = cityCoords[path[p + 1]].y * conversion;

        let linesMatrix = new Array(this.state.cities.length);
        for (let i = 0; i < this.state.cities.length; i++) {
            linesMatrix[i] = new Array(this.state.cities.length);
        }
        for (let i = 0; i < this.state.cities.length; i++) {
            for (let j = 0; j < this.state.cities.length; j++) {
                linesMatrix[i][j] = 0;
            }
        }

        let drawRoute = () => {

            map.moveTo(cityCoords[path[p]].x * conversion, cityCoords[path[p]].y * conversion);

            let ratio = (linesMatrix[path[p]][path[p + 1]] + linesMatrix[path[p + 1]][path[p]]) / (numAnts * numRds * 0.7);
            map.lineWidth = 1 + 10 * ratio;

            if (ratio > 0.55 && ratio < 0.67) {
                map.strokeStyle = 'white'
            }
            else if (ratio > 0.67) {
                map.strokeStyle = 'blue'
            }
            else if (p % 2 === 0) {
                map.strokeStyle = 'lightgrey'
            }
            else {
                map.strokeStyle = 'grey'
            }
            let globalID = requestAnimationFrame(drawRoute);

            if (cityCoords[path[p]].x < cityCoords[path[p + 1]].x) {
                map.lineTo(x, y)
                map.stroke();
                if ((x + 100) / xLimit > 1) { x = xLimit }
                else { x += 100 }
                y = m * (x - x1) + y1;
                if (x === xLimit) {
                    map.lineTo(x, y)
                    map.stroke();
                    if (path[p + 1] === 0) {
                        linesMatrix[path[p]][path[p + 1]] += 0.75;
                    }
                    else {
                        linesMatrix[path[p]][path[p + 1]] += 1;
                    }
                    p += 1;
                    map.beginPath();
                    if (p === path.length - 1) { drawCities(); cancelAnimationFrame(globalID) }
                    else {
                        x = cityCoords[path[p]].x * conversion;
                        y = cityCoords[path[p]].y * conversion;
                        m = ((cityCoords[path[p + 1]].y - cityCoords[path[p]].y) / (cityCoords[path[p + 1]].x - cityCoords[path[p]].x));
                        x1 = cityCoords[path[p]].x * conversion;
                        y1 = cityCoords[path[p]].y * conversion;

                        xLimit = cityCoords[path[p + 1]].x * conversion;
                        yLimit = cityCoords[path[p + 1]].y * conversion;


                    }

                }
            }
            else if (cityCoords[path[p]].x > cityCoords[path[p + 1]].x) {
                map.lineTo(x, y)
                map.stroke();
                if ((x - 100) / xLimit < 1) { x = xLimit }
                else { x -= 100 }
                y = m * (x - x1) + y1
                if (x === xLimit) {
                    map.lineTo(x, y)
                    map.stroke();
                    if (path[p + 1] === 0) {
                        linesMatrix[path[p]][path[p + 1]] += 0.75;
                    }
                    else {
                        linesMatrix[path[p]][path[p + 1]] += 1;
                    }
                    p += 1;
                    map.beginPath();
                    if (p === path.length - 1) { drawCities(); cancelAnimationFrame(globalID) }
                    else {
                        x = cityCoords[path[p]].x * conversion;
                        y = cityCoords[path[p]].y * conversion;
                        m = ((cityCoords[path[p + 1]].y - cityCoords[path[p]].y) / (cityCoords[path[p + 1]].x - cityCoords[path[p]].x));
                        x1 = cityCoords[path[p]].x * conversion;
                        y1 = cityCoords[path[p]].y * conversion;

                        xLimit = cityCoords[path[p + 1]].x * conversion;
                        yLimit = cityCoords[path[p + 1]].y * conversion;
                    }
                }
            }
            else if (cityCoords[path[p]].y < cityCoords[path[p + 1]].y) {
                map.lineTo(x, y)
                map.stroke();
                if ((y + 100) / yLimit > 1) { y = yLimit }
                else { y += 100 }
                x = (y - y1) / m + x1
                if (y === yLimit) {
                    map.lineTo(x, y)
                    map.stroke();
                    if (path[p + 1] === 0) {
                        linesMatrix[path[p]][path[p + 1]] += 0.75;
                    }
                    else {
                        linesMatrix[path[p]][path[p + 1]] += 1;
                    }
                    p += 1;
                    map.beginPath();
                    if (p === path.length - 1) { drawCities(); cancelAnimationFrame(globalID) }
                    else {
                        x = cityCoords[path[p]].x * conversion;
                        y = cityCoords[path[p]].y * conversion;
                        m = ((cityCoords[path[p + 1]].y - cityCoords[path[p]].y) / (cityCoords[path[p + 1]].x - cityCoords[path[p]].x));
                        x1 = cityCoords[path[p]].x * conversion;
                        y1 = cityCoords[path[p]].y * conversion;

                        xLimit = cityCoords[path[p + 1]].x * conversion;
                        yLimit = cityCoords[path[p + 1]].y * conversion;

                    }
                }
            }
            else if (cityCoords[path[p]].y > cityCoords[path[p + 1]].y) {
                map.lineTo(x, y)
                map.stroke();
                if ((y - 100) / yLimit < 1) { y = yLimit }
                else { y -= 100 }
                x = (y - y1) / m + x1
                if (y === yLimit) {
                    map.lineTo(x, y)
                    map.stroke();
                    if (path[p + 1] === 0) {
                        linesMatrix[path[p]][path[p + 1]] += 0.75;
                    }
                    else {
                        linesMatrix[path[p]][path[p + 1]] += 1;
                    }
                    p += 1;
                    map.beginPath();
                    if (p === path.length - 1) { drawCities(); cancelAnimationFrame(globalID) }
                    else {
                        x = cityCoords[path[p]].x * conversion;
                        y = cityCoords[path[p]].y * conversion;
                        m = ((cityCoords[path[p + 1]].y - cityCoords[path[p]].y) / (cityCoords[path[p + 1]].x - cityCoords[path[p]].x));
                        x1 = cityCoords[path[p]].x * conversion;
                        y1 = cityCoords[path[p]].y * conversion;

                        xLimit = cityCoords[path[p + 1]].x * conversion;
                        yLimit = cityCoords[path[p + 1]].y * conversion;

                    }

                }
            }
        }
        drawRoute();
    }

    render() {
        return (
            <form className="aco" onSubmit={e => this.draw(e)}>


                <div className="controls">

                    <div className="cities">
                        <p>Cities</p>
                        {this.state.cities.map((city, index) =>
                            <div className="city" >
                                <div><label>{index + 1}.&nbsp;&nbsp;&nbsp;&nbsp;x&nbsp;</label><input required id={`${index}-X`} type="number" min="0" max="100"
                                    value={this.state.xValues[index]} onChange={e => this.storeX(index, e.target.value)}></input></div>
                                <div><label>y&nbsp;</label><input required id={`${index}-Y`} type="number" min="0" max="100"
                                    value={this.state.yValues[index]} onChange={e => this.storeY(index, e.target.value)}></input></div>
                            </div>
                        )}
                        <div id="addButton" onClick={this.addCity}><i class="fas fa-plus-circle"></i></div>
                    </div>

                    <div className="iteratives">
                        <div id="labelsWrap">
                            <div><label id='numRds' >Number of rounds:</label><input required defaultValue={3} min="1" name="numRds" className='numRds' type="number"></input></div>
                            <div><label id="numAnts" >Number of ants per round: </label><input required defaultValue={100} min="1" name="numAnts" type="number"></input></div>
                        </div>
                    </div>
                </div>
                <button id="submit" type="submit">Run simulation</button>



                <canvas id='map' width={this.state.clientWidth / 2.2} height={this.state.clientWidth / 2.2}></canvas>
            </form>
        )
    }

}

export default Aco;