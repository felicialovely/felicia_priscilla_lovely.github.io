import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import style from "./Header.module.css";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    let config = {
      num: [2, 4],
      rps: 0.5,
      radius: [100, 70],
      life: [2, 4],
      color: ["#FFFFFFF", "#FFD700"],
      v: [2, 3],
      tha: [-100, 100],
      alpha: [0.3, 0.1],
      scale: [0.5, 1],
      position: "all",
      cross: "dead",
      random: 15
    }

    const profilepic = "images/" + this.props.data.image;

    return (
      <header id="home">
        {/* <ParticlesBg type="color" num={3} color={["#FFFFFF", "#FF0023"]} bg={true} /> */}
        <ParticlesBg type="custom" config={config} bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>

          </ul>
        </nav>

        <div className="banner" style={{paddingLeft: "40px", paddingRight: "40px"}}>
          <div className={style.GridHeader}>
            <div className={style.DivProfilePic}>
              <img src={profilepic} />
            </div>
            <div style={{display:"flex", alignItems:"center"}}>
              <div className="banner-text">
                <Fade bottom>
                  <h1 className="responsive-headline">{name}</h1>
                </Fade>
                <Fade bottom duration={1200}>
                  <h3>{description}.</h3>
                </Fade>
                <hr />
                <Fade bottom duration={2000}>
                  <ul className="social" style={{display:"flex", justifyContent:"center"}}>
                    <a href={linkedin} className="button btn project-btn">
                      <i className="fa fa-linkedin"></i>
                      <div className={style.Social}>LinkedIn</div>
                    </a>
                    <a href={github} className="button btn github-btn">
                      <i className="fa fa-github"></i>
                      <div className={style.Social}>Github</div>
                    </a>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
