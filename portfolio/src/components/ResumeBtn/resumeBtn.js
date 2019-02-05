import React from 'react';
import { Button } from 'reactstrap';
// import { Link } from 'react-router-dom';

const buttonStyle = {
    float: 'right',
    marginRight: '10px'
}

export default class Resume extends React.Component {
    render() {
        return (
            <div>
                <Button style={buttonStyle} outline color="info">Download My Resume</Button>
            </div>
        );
    }
}