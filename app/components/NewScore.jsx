import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Modal, Radio } from 'react-bootstrap';
import { Link, browserHistory } from 'react-router';

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
            alert('Please enter a name, nickname, or initials.')
            return;
        }
        score = score.toFixed(1);
        let scoreObj = {name: name, score: score};
        this.props.addNewScore(scoreObj);
        browserHistory.push('/final');
    },

    render() {
        return (
            <div> 
                <Button bsStyle="info" bsSize="large" onClick={this.open} >
                Get Your Results
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header id="new-score-header">
                        <Modal.Title>Congratulations!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <h5>You have achieved one of the highest scores. Please enter your name: </h5>

                        <form onSubmit={(e) => {
                                e.preventDefault();
                                this.state.addScoreAndClose(e.target.inputField.value, this.props.totalDistance);
                            }} >
                            <FormGroup>
                                <FormControl name="inputField" id="review-text" type="text"/>
                            </FormGroup>

                            <Button id="submit-name" bsSize="large" bsStyle="info" type="submit">Continue</Button>
                        </form>

                    </Modal.Body>

                </Modal>
            </div>
        )
    }
})

export default NewScore