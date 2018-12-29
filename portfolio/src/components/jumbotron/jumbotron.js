import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './jumbotron.css';


const Hero = (props) => {
  return (
    
    <div>
      <Jumbotron fluid  className="hero">
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Hero;