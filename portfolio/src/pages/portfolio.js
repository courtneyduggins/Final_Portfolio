import React from 'react';

const sectionDivider = require('../images/th.jpg');

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

class Portfolio extends React.Component {

    render() {
        return (
            <div>
                <div className="myProjects" style={sectionTitle}>Portfolio</div>
            </div>
        );
    }
}

export default Portfolio;