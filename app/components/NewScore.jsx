import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Modal, Radio } from 'react-bootstrap';
import { Link } from 'react-router';


const NewScore = React.createClass({

    getInitialState(){
        return { 
            showModal: false,
            addScoreAndClose: this.addScoreAndClose
        };
    },

    close(){
        this.setState({ showModal: false });
    },

    open(){
        this.setState({ showModal: true });
    },

    addScoreAndClose(name, score) {
        if (!name) {
            alert('You must enter a name! It doesn\'t have to be your real one.')
            return;
        }
        score = score.toFixed(1);
        let scoreObj = {name: name, score: score};
        console.log('scoreObj being passed in: ', scoreObj)
        this.props.addNewScore(scoreObj);
        let elem = document.getElementById('continue-button');
        elem.style.opacity = 1;
        let elem2 = document.getElementById('submit-name');
        elem2.style.opacity = 0;
    },

    render() {
        return (
            <div> 
                <Button bsStyle="info" bsSize="large" onClick={this.open} >
                Get Your Results
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header id="review-form-header">
                        <Modal.Title>Congratulations!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4>You have achieved one of the highest scores. Please enter your name: </h4>
                            
                        <form onSubmit={(e) => {
                                e.preventDefault();
                                this.state.addScoreAndClose(e.target.inputField.value, this.props.totalDistance);
                            }} >
                            <FormGroup>
                                <FormControl name="inputField" id="review-text" type="text"/>
                            </FormGroup>

                            <Button id="submit-name" bsSize="large" bsStyle="info" type="submit">Submit</Button>
                            <br></br>
                            <Link to={'/final'}>
                                <Button id="continue-button" bsSize="large" bsStyle="info">Continue</Button>
                            </Link>
                        </form>

                    </Modal.Body>

                </Modal>
            </div>
        )
    }
})

export default NewScore