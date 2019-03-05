import React from 'react';

const sectionDivider = require('../images/th.jpg');
const email = require('../images/email.jpg');
const phone = require('../images/phone.jpg');
const linkedIn = require('../images/linkedin.jpg');
const github = require('../images/github.jpg')

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

const iconStyle = {
    height: '75px',
    width: '75px',
    marginLeft: '500px'
}

const iconEmail = {
    height: '75px',
    width: '75px',
    marginLeft: '400px'
}
const emailStyle = {
    textAlign: 'center',
    marginRight: '525px',
    marginTop: '-75px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(0, 176, 178)'
}

const addStyle = {
    textAlign: 'center',
    marginRight: '330px',
    marginTop: '23px',
    fontSize: '18px',
    color: 'gray'
}

const iconPhone = {
    height: '75px',
    width: '75px',
    marginLeft: '1000px',
    marginTop: '-150px'
}

const phoneStyle = {
    textAlign: 'center',
    marginLeft: '680px',
    marginTop: '-125px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(0, 176, 178)'
}

const numStyle = {
    textAlign: 'center',
    marginLeft: '725px',
    marginTop: '28px',
    fontSize: '18px',
    color: 'gray'
}

const iconLinked = {
    height: '90px',
    width: '90px',
    marginLeft: '390px',
    marginTop: '85px'
}

const linkedStyle = {
    textAlign: 'center',
    marginRight: '506px',
    marginTop: '-85px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(0, 176, 178)'
}

const linkedLink = {
    textAlign: 'center',
    marginLeft: '481px',
    marginTop: '800px',
    // marginBottom: '1300px',
    fontSize: '18px',
    color: 'gray'
}

const iconRepo = {
    height: '90px',
    width: '90px',
    marginLeft: '1000px',
    marginTop: '-85px'
}

const repoStyle = {
    textAlign: 'center',
    marginLeft: '690px',
    marginTop: '-85px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(0, 176, 178)'
}

const repoLink = {
    textAlign: 'center',
    marginLeft: '1075px',
    marginBottom: '-400px',
    fontSize: '18px',
    color: 'gray'
}



class Contact extends React.Component {
    render() {
        return (
            <div>
                <div className="myContact" style={sectionTitle}>Contact</div>
                <div className="topList">
                    <img src={email} style={iconEmail} alt="email-icon"></img>
                    <p style={emailStyle}>Email</p>
                    <p style={addStyle}>Courtney.Duggins@gmail.com</p>
                    <div>
                        <img src={phone} style={iconPhone} alt="phone-icon"></img>
                        <p style={phoneStyle}>Phone</p>
                        <p style={numStyle}>281.691.5982</p>
                    </div>
                </div>
                <div className="bottomList">
                    <img src={linkedIn} style={iconLinked} alt="linkedIn-icon"></img>
                    <p style={linkedStyle}>LinkedIn</p>
                    <a href="https://www.linkedin.com/in/courtney-duggins-a2469248/" style={linkedLink}>LinkedIn</a>
                    <div>
                        <img src={github} style={iconRepo} alt="github-icon"></img>
                        <p style={repoStyle}>Github</p>
                        <a href="https://github.com/courtneyduggins?tab=repositories" style={repoLink}>Github Repo</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default Contact;