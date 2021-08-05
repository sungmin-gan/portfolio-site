import React, { Component } from "react";
import './App.css';
import Banner from "./Banner"
import InfoGrid2 from "./InfoGrid2"



import Work from './Work'

class App extends Component {

  constructor() {
    super();
    this.home = React.createRef();
    this.work = React.createRef();
    this.about = React.createRef();
  }

  componentDidMount() {
    this.setSize();
    this.focusPage('home');
    window.addEventListener('resize', () => { this.focusPage(this.state.currentPage); this.setSize() })
  }

  state = {
    currentPage: "home",
    size: ""
  }

  focusPage = (page) => {
    let home = this.home.current;
    let work = this.about.current;
    let about = this.work.current;

    if (home === null || work === null || about === null) { }
    else {
      if (page === "home") {
        this.home.current.scrollIntoView();
      }
      else if (page === "work") {
        this.work.current.scrollIntoView();
      }
      else if (page === "about") {
        this.about.current.scrollIntoView();
      }
      else {
        this.home.current.scrollIntoView();
      }
    }
  }

  setPage = (page) => {
    this.setState(() => { return { currentPage: page } })
  }

  setSize = () => {
    let size = "L";
    let modeFlag = false;
    if (window.innerWidth <= window.innerHeight) {
      size = "S"
    }
    if (size !== this.state.size && this.state.size !== "") {
      modeFlag = true;
    }
    this.setState(() => { return { size: size } })
    if (modeFlag) { window.location.reload() }
  }

  render() {
    return (
      <div className="App" style={{ overflow: `${this.state.size === 'S' ? 'auto' : 'hidden'}` }} >

        <header>
          <div className="menuBar">
            <h1 className="name">
              {this.state.size !== 'S' &&
                <a href="#home" id="name" onClick={() => { this.setPage("home") }}>SUNGMIN GAN</a>
              }
              {this.state.size === 'S' &&
                <a href="#home" id="name" onClick={() => { this.setPage("home") }}>SG</a>
              }

            </h1>

            <div className="subLinks">
              <div>
                <a href="#home" className={`menuLink ${this.state.currentPage === "home" ? 'selected' : null}`} id="navWork" onClick={() => { this.setPage("home") }}>Home</a>
                <a href="#projects" className={`menuLink ${this.state.currentPage === "work" ? 'selected' : null}`} onClick={() => { this.setPage("work") }}>Projects</a>
                <a href="#profile" className={`menuLink ${this.state.currentPage === "about" ? 'selected' : null}`} id="navAbout" onClick={() => { this.setPage("about") }}>Profile</a>
              </div>

            </div>
          </div>
        </header>

        {this.state.currentPage === 'home' &&
          <a href="#projects" className={`toWork ${this.state.size === 'S' ? 'toWorkS' : null}`} onClick={() => { this.setPage("work") }}><span>Check out my work<br/><br/><i class="fas fa-arrow-down"></i></span></a>
        }

        <main>
          {((this.state.size === 'S' && this.state.currentPage === 'home') || this.state.size === 'L') &&
            <div ref={this.home} id="home"><Banner size={this.state.size} style={{ paddingTop: `${this.state.size === 'S' ? '5vh' : '10vh'}` }} /> </div>
          }
          {((this.state.size === 'S' && this.state.currentPage === 'work') || this.state.size === 'L') &&
            <div ref={this.work} id="projects" style={{ paddingTop: `${this.state.size === 'S' ? '5vh' : '10vh'}` }}><Work size={this.state.size} /></div>
          }
          {((this.state.size === 'S' && this.state.currentPage === 'about') || this.state.size === 'L') &&
            <div ref={this.about} id="profile" style={{ paddingTop: `${this.state.size === 'S' ? '5vh' : '10vh'}` }}><InfoGrid2 size={this.state.size} /></div>
          }



        </main>

        
        <div className="backScreen"></div>

        <div className="starScreen">
          <i class="fas fa-meteor" id={`${this.state.size === 'S' ? 'roid-3S' : 'roid-3'}`} ></i>
          <i class="fas fa-meteor" id={`${this.state.size === 'S' ? 'roid-4S' : 'roid-4'}`} ></i>
          <i class="fas fa-meteor" id={`${this.state.size === 'S' ? 'roid-5S' : 'roid-5'}`} ></i>
        </div>

      </div>
    );

  }


}

export default App;
