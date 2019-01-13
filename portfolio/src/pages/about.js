import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import {AppRegistry, View, Image} from 'react-native';

const imgStyle = {
    display: 'inline-block',
    margin: '10px',
    height: '120px'

}

// const box ={
//     width: '800px',
//     height: '900px'
// }

// .modal-content = {
//     width: '800.00px',
//     height: '900.00px'
// }

class About extends React.Component {



  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="info" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className} contentClassName='modal-content-lg'>
          <ModalHeader toggle={this.toggle}>Hello!</ModalHeader>
                <ModalBody>
                    
                    <img source={"../images/IMG_0625.jpeg"}  style={imgStyle} alt=""></img>
                    
                    Thank you for taking the time to review my profile!  Allow me to introduce myself.
                    My name is Courtney Duggins. I am currently seeking a role as a Front-End Web Developer. I recently completed a Full Stack Web Development program with UNC Charlotte's Extended Education Division where I learned several programming languages such as HTML, CSS,
                    Javascript and Jquery.  I also learned the React Frameworks for building Full Stack Web
                    Development Applications: MongoDB, Express, React, and Node. <br></br><br></br>

                    Additionally, I am a Cum Laude graduate from the University of Texas at San
                    Antonio where I obtained my Bachelor's Degree in Actuarial Science and Minor
                    in Applied Statistics.  I currently work at The Hartford Financial Services
                    Company as a Middle Market Insurance Underwriter. <br></br><br></br>

                    In my role as an underwriter, I rely heavily on problem solving skills        
                    and team collaboration in order to provide my clients with the best possible
                    solutions. For three consecutive years, I was awarded for my ability to operate
                    as a Team Player and  awarded on three separate occassions for my ability to 
                    deliver outcomes.  Because building an efficient and effective web application 
                    requires Web Developers to execute these skills on a consistent basis, 
                    I have a proven track record of success that will translate very well in 
                    a Front-End Developer role.<br></br><br></br>      

                    Take look around and contact me to get in touch!   
          </ModalBody>
          <ModalFooter>
            {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default About;

