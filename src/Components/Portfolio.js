import React, { Component } from "react";
import Fade from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap" style={{border:"2px solid black", borderRadius:"5px"}}>
            <a href={projects.url}>
              <img alt={projects.title} src={projectImage} />
            </a>
            <div style={{ textAlign: "center", fontWeight: "bold", borderTop:"2px solid black", borderBottom:"2px solid black" }}>{projects.title}</div>
            <div style={{
              textAlign: "center", height: "120px", paddingLeft: "5px", paddingRight: "5px", background: "#ffd733" }}>{projects.description}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio" style={{ background: "#FBBC93"}}>
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
