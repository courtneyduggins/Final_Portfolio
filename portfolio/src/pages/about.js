import React from "react";


const profilePic = require('../images/IMG_0625.jpeg');
const sectionDivider = require('../images/th.jpg')

const picStyle = {
  display: 'in-line',
  height: '325px',
  width: '200px',
  float: 'left',
  marginTop: '185px',
  borderStyle: 'ridge',
  borderWidth: '5px'
}

const title = {
  color: 'rgb(255, 128, 255)',
  textAlign: 'center',
  fontFamily: 'Passion One cursive',
  // fontSize: '46px',
  marginTop: '105px',
  marginRight: '260px',
  marginBottom: '100px',
  backgroundImage: 'url(' + sectionDivider + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '550px 40px',
  // webkitFilter: 'grayscale(100%)', 
  // filter: 'grayscale(100%)'
}
const bioStyle = {
  marginTop: '50px',
  lineHeight: '2.0',
  textAlign: 'center',
  fontFamily: 'Parisienne cursive',
  fontSize: '20px'
}
// const dividerStlye = {
//   backgroundImage: 'url(' + sectionDivider + ')',
//   backgroundRepeat: 'no-repeat',
// }


class About extends React.Component {

  render() {
    return (
      <div>
        <div className="profilePic">
          <img src={profilePic} style={picStyle} alt="profilePic" />
        </div>

        <div className="title" style={title}>
          <h1> About Me </h1><br></br>
        </div>
        {/* <div style={dividerStlye} className ="divider"> </div> */}
        <div className="bioText" style={bioStyle}>

          <p>Thank you for taking the time to review my profile!   Allow me to introduce myself.
          My name is Courtney Duggins. I am currently seeking a role as a Front-End Web Developer.
          I recently completed a Full Stack Web Development program with UNC Charlotte's Extended
          Education Division where I learned several programming languages such as HTML, CSS,
          Javascript and Jquery.  I also learned the React Frameworks for building Full Stack Web
          Development Applications: MongoDB, Express, React, and Node.  Additionally, I am a
          Cum Laude graduate from the University of Texas at San Antonio where I obtained my
          Bachelor's Degree in Actuarial Science and Minor in Applied Statistics.  I currently
          work at The Hartford Financial Services Company as a Middle Market Insurance Underwriter.
          In my role as an underwriter, I rely heavily on problem solving skills and team collaboration
          in order to provide my clients with the best possible solutions. For three consecutive years,
          I was awarded for my ability to operate as a Team Player and  awarded on three separate occassions
          for my ability to deliver outcomes.  Because building an efficient and effective web application
          requires Web Developers to execute these skills on a consistent basis, I have a proven track record
          of success that will translate very well in a Front-End Developer role. <br></br>
          Take a look around and see my contact information below for ways to get in touch!</p>

        </div>
      </div>
    );
  }
}

export default About;

