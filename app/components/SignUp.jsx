import React, {Component} from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Modal, Radio } from 'react-bootstrap'


const CreateReview = React.createClass({

    getInitialState(){
        return { 
            showModal: false
        };
    },

    close(){
        this.setState({ showModal: false });
    },

    open(){
        this.setState({ showModal: true });
    },

    render() {
        return (
            <div> 
                <Button bsStyle="primary" bsSize="small" onClick={this.open} >
                Sign Up
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header id="sign-up-header">
                        <Modal.Title>Sign Up</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h4>Sign up and log in to keep track of your high score and compete against other users on the scoreboard.</h4>
                            
                        <form onSubmit={(e) => {
                                e.preventDefault();
                                // function goes here
                                }}>
                            <FormGroup>
                                <ControlLabel>User Name: </ControlLabel>
                                <FormControl name="inputField" id="review-text" type="text"/>
                            </FormGroup>
                            <FormGroup>
                                <ControlLabel>Password: </ControlLabel>
                                <FormControl name="inputField" id="review-text" type="text"/>
                            </FormGroup>

                            <Button onClick={this.close}>Close</Button>
                            <Button bsStyle="primary" type="submit">Submit</Button>
                        </form>

                    </Modal.Body>

                </Modal>
            </div>
        )
    }
})

export default CreateReview

