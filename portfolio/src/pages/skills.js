import React from "react";


const sectionDivider = require('../images/th.jpg');
const html = require("../images/html.jpg");
const css = require("../images/css.jpg");
const java = require("../images/javascript.jpg");
const jquery = require("../images/jquery.jpg");
const bootstrap = require("../images/bootstrap.jpg");
const mongo = require("../images/mongodb.jpg");
const express = require("../images/express.jpg");
const react = require("../images/react.jpg");
const node = require("../images/node.jpg");
const mySQL = require("../images/mySQL.jpg");

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
    backgroundPosition: '550px 52px',
}

const topRowStyle = {
    marginLeft: '125px'
}

const imgStyle = {
    height: '205px',
    width: '205px',
    margin: '25px'
}

class Skills extends React.Component {

    render() {
        return (
            <div>
                <div className="mySkills" style={sectionTitle}>Technical Skills</div>
                <div className="skillsSec" style={topRowStyle}>
                    <div className="topRow">
                        <img src={html} style={imgStyle} alt="html-logo"></img>
                        <img src={css} style={imgStyle} alt="css-logo"></img>
                        <img src={bootstrap} alt="bootstrap-logo"></img>
                        <img src={java} style={imgStyle} alt="javascript-logo"></img>
                        <img src={jquery} style={imgStyle} alt="jquery-logo"></img>
                    </div>
                    <div className="bottowRow">
                        <img src={mongo} style={imgStyle} alt="mongodb-logo"></img>
                        <img src={express} style={imgStyle} alt="express-logo"></img>
                        <img src={react} style={imgStyle} alt="react-logo"></img>
                        <img src={node} style={imgStyle} alt="node-logo"></img>
                        <img src={mySQL} style={imgStyle} alt="mySQL"></img>
                    </div>
                </div>
                
            </div>
        );


    }
}

export default Skills;