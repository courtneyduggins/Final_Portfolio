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

const textStyle = {
    textAlign: 'center'
}


 class Contact extends React.Component {
     render() {
         return (
             <div>
                 <div className="myContact" style={sectionTitle}>Contact</div>
                    <div className="topList">
                        <img src={email} style={iconStyle} alt="email-icon"></img>
                        <p style={textStyle}>Email</p>
                        <p style={textStyle}>Courtney.Duggins@gmail.com</p>
                        <img src={phone} style={iconStyle} alt="phone-icon"></img>
                        <p>Phone</p>
                        <p>281.691.5982</p>
                    </div>
                    <div className="bottomList">
                        <img src={linkedIn} style={iconStyle} alt="linkedIn-icon"></img>
                        <a href="https://www.linkedin.com/in/courtney-duggins-a2469248/">LinkedIn</a>
                        <img src={github} style={iconStyle} alt="github-icon"></img>
                        <a href="https://github.com/courtneyduggins?tab=repositories">Github Repo</a>
                    </div>
             </div>
         );
     }
 }


 export default Contact;