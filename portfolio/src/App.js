import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from './components/Jumbotron/jumbotron';
import NavigationBar from './components/Navbar/navbar';
import PhotoSpin from './components/Carousel/carousel';
import Resume from './components/ResumeBtn/resumeBtn';
import About from './pages/about';
import Skills from './pages/skills';
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
// import logo from './logo.svg';
import './App.css';
// import PhotoSpin from './components/carousel/carousel';

// var content = document.getElementyId("about");
// content.scrollIntoView(true);

const myResume = require("./components/ResumeBtn/myResume.pdf");
class App extends Component {
  render() {
    return (

      <Router>
        <div>
          <Hero />
          <NavigationBar/>
          <About/>
          <Link to = {myResume}>
          <Resume/>
          </Link>
          <Skills/>
          <Portfolio/>
          <Contact/>
          {/* <Route exact path="/" component={Resume} />  */}
          {/* <Route exact path="/about" component={About} />
          <Route exact path="/blog" component={Blog} /> */}
          {/* {/* <Route path="/contact" component={Contact} /> */}
        </div>
      </Router>
      // <div className="main">
      //   <Hero />
      //   <About />
      //   <div className="resume">
      //     <Resume>
      //   </div>
        


      // </div>





    );
  }
}

export default App;
