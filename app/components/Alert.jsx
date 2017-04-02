import React, { Component } from 'react';
import ResultsContainer from '../containers/ResultsContainer';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';



export default class Alert extends Component {
    componentDidMount() {
        super();
    }

    hideAlert() {
        const elem = document.getElementById('alert');
        elem.style.visibility = 'hidden';
    }

    render() {
        <div id="alert">
            <p>You must enter a name, nickname, or initials.</p>
            <Button bsSize="small" bsStyle="info" onClick={this.hideAlert.bind(this)}>Ok</Button>
        </div>
    }

}