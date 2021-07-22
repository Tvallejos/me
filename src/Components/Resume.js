import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    //const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      const degrees = education.degrees.map(function (degree,index){
          return (<p className="info">
            {degree} <span>&bull;</span>
            <em className="date">{education.graduations[index]}</em>
          </p>)

      } );
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          {degrees}
          {/* <p>{education.description}</p> */}
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    /*
    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });
    */

    const academic = this.props.data.academic.map( (academic) =>
    {
      const places = academic.items.map( function (place) 
      {
        return (
          <div>

          <p className="info">
            {place.title}
            <span>&bull;</span> <em className="date">{place.duration}</em>
          </p>
          <p>{place.description}</p>
          </div>
          );
      })


    return (

        <div key={academic.place}>
          <h3>{academic.place}</h3>
          {places}
        </div>

    );}
          
          )

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row academic">
            <div className="three columns header-col">
              <h1>
                <span>Academic</span>
              </h1>
            </div>

            <div className="nine columns main-col">{academic}</div>
          </div>
        </Slide>
       {/*
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
       */} 
      </section>
    );
  }
}

export default Resume;
