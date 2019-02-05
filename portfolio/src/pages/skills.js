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

const imgStyle = {
    
}

class Skills extends React.Component {

    render() {
        return (
            <div>
                <div className="mySkills" style={sectionTitle}>Technical Skills</div>
                <div className="skillsSec">
                    <div className="topRow">
                        <img src={html} alt="html-logo"></img>
                        <img src={css} alt="css-logo"></img>
                        <img src={bootstrap} alt="bootstrap-logo"></img>
                        <img src={java} alt="javascript-logo"></img>
                        <img src={jquery} alt="jquery-logo"></img>
                    </div>
                    <div className="bottowRow">
                        <img src={mongo} alt="mongodb-logo"></img>
                        <img src={express} alt="express-logo"></img>
                        <img src={react} alt="react-logo"></img>
                        <img src={node} alt="node-logo"></img>
                    </div>
                </div>
                
            </div>
        );


    }
}

export default Skills;