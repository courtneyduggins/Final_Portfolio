import React, { Component } from 'react';
import Example from './components/navbar/navbar';
import Hero from './components/jumbotron/jumbotron';
import PhotoSpin from './components/carousel/carousel';
// import logo from './logo.svg';
import './App.css';
// import PhotoSpin from './components/carousel/carousel';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="Navigation-bar">
          <Example />
          <div className="Carousel-space">
            <PhotoSpin />
          </div>
        </div>
      </div>
    
      
    
      
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}

export default App;
