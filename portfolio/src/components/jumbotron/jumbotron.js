import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './jumbotron.css';


const Hero = (props) => {
  return (
    
    <div>
      <Jumbotron fluid  className="hero">
      
      {/* <div className="w3-container w3-animate-right"> */}
        <Container fluid>
        <div className="testArea">
          <h1 className="display-3 myName">Courtney Duggins</h1>
          <h2 className="lead myTitle">Front-End Web Developer</h2>
          <p className="lead myCert">Cert. 12/15/18</p>
          </div>
        </Container>
        
        {/* </div> */}
      </Jumbotron>
    </div>
  );
};

export default Hero;