import React from 'react';
const sectionDivider = require('../images/th.jpg');
const friendsTrivia = require('../images/friends.jpg');
const beer = require('../images/beer.jpg');
const train = require('../images/train.jpg');

const sectionTitle = {
    color: 'rgb(255, 128, 255)',
    textAlign: 'center',
    fontFamily: 'Passion One cursive',
    fontSize: '46px',
    marginTop: '110px',
    // marginRight: '270px',
    // marginLeft: '20px',
    marginBottom: '75px',
    paddingBottom: '35px',
    backgroundImage: 'url(' + sectionDivider + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '565px 52px',
}

const portImg = {
    margin: '50px',
    height: '300px',
    width: '400px',
    // border: '4px ridge black'
}

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <div className="myProjects" style={sectionTitle}>Portfolio</div>
                </div>
                <div className="classProjects">
                    <img src={friendsTrivia} alt="trivia-game" style={portImg}></img>
                    <img src={beer} alt="beer-app" style={portImg}></img>
                    <img src={train} alt="train-app" style={portImg}></img>
                </div>
            </div>
        );
    }
}

export default Portfolio;