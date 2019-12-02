import React, { Component } from 'react'
import {Modal, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const personalText = "My work uses simulation to examine the boundaries of change within seemingly metastable systems. In doing this, I am trying to better understand how political movements grapple with the challenges and paradoxes that come with actualizing social change. \n\n‘Simulation’ is the umbrella term that I use for my work, but it is divided up into installation and real-time generative video. The former serves to ‘immerse’ and implicate the audience in the representations within the latter. The latter is developed with a set of formal constraints that I call ‘indeterminate cinema’ (IC).\n\nIC can be thought of as automated narrative video art. The central feature of IC is a capacity for ‘infinite change’. This ‘change’ must always have qualities that are outside of my control. A work of indeterminate cinema constructs a pseudo narrative in real-time, with all elements generated with machine learning. The architecture of a project is typically a network of feedback loops. A piece of dialogue is generated and then analyzed for sentiment which triggers a sound-effect-a jump-cut-an-animation which in turn generates a piece of dialogue. Often, viewing this work can feel like watching a system-forward sitcom.\n\nTo the degree that I am able to author the arc of these pseudo-narratives, I take a research based approach. I have a long history of organizing within Leftist political movements. These groups and the patterns that they replicate across time are my primary focus. Some work examines this through a fuzzy lens, such as the manifesto-trained networks that re-enact the curse of the left in in or, a round sedition, while some work takes a more traditional approach to simulation, such as the data-hungry nets that reconfigure power relations within an affinity group in f-scale.\n\nMy work is fundamentally concerned with the recognition and identification of social change. Through software’s inexhaustible capacity for iteration and permutation, I am able to make work that attempts to sample or sketch the boundaries of change within itself, and in so doing amplify my sensitivity to difference within a sea of sameness.";
const collabText = "THIS IS MY COLLABORATIVE TEXT";
const teachingText = "THIS IS MY TEACHING TEXT";

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        style={{color: "var(--main-theme-color)"}}
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{
            color: "var(--main-theme-color)",
            maxHeight: "70vh",
            overflowY: "scroll",
            }}>
          <p style={{maxWidth: "80%", marginLeft : "10%", textAlign : "justify", whiteSpace: "pre-wrap"}}>
            {getText(props.workType)}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{backgroundColor: 'var(--main-theme-color)'}} onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

function getText(workType) {
  switch(workType) {
    case 'personal':
      return personalText;
    case 'collab':
      return collabText;
    case 'student':
      return teachingText;
    default:
      return "No statement for this page.";
  }
}

class Writing extends Component {
  constructor(props) {
    super(props)
    this.workType = props.workType;
    this.state = {
      isModalOpen: false,
    }
  }
  handleModalOpen = event => {
    console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    // if(this.workType === 'collab') {
    //   return null
    // }
    return (
        <>

          <Button id="writing-link" variant="outline-light" onClick={this.handleModalOpen}>
            statement
          </Button>
        <MyVerticallyCenteredModal
        show={this.state.isModalOpen}
        onHide={this.handleModalClose}
        workType={this.workType}
      />
        </>
    )
  }
}

export default Writing