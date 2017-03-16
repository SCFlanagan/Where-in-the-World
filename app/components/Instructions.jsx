import React from 'react';
import { Button, Modal } from 'react-bootstrap'


const Instructions = React.createClass({

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
                <Button bsStyle="info" bsSize="small" onClick={this.open} >
                Instructions
                </Button>

                <Modal show={this.state.showModal} onHide={this.close} id="instructions">

                    <Modal.Header>
                        <Modal.Title>How To Play</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>You can pick one of four categories or choose to play randomly selected locations from all four. There are five rounds in a game. </p>
                        <p>In each round, you will be given a street view of a locations somewhere in the world. You can click and drag inside the map to look around 360 degrees. On some maps, you also have the ability to move around by clicking once in a certain direction.</p>
                        <p>When you think you have an idea of where the location is, you can zoom into the smaller, world map and click the area you think you are in. You can move your guess multiple times, if needed, but you must make a guess. When you are happy with the location you chose, submit your guess.</p>
                        <p>After each round, the game will indicate how many miles your guess was from the actual location. Your total score at the end of the game is your final score to beat. You want to get as low a score as possible.</p>
                        <p> Enjoy your travels! </p>
                        <Button bsStyle="info" bsSize="small" onClick={this.close}>Close</Button>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
})

export default Instructions

