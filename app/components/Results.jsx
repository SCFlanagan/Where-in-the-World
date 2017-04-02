import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { placeMarker } from '../main';
import { Link } from 'react-router';
import NewScoreContainer from '../containers/NewScoreContainer';


export default class Results extends Component {
    constructor(props) {
        super(props);
        const locArr = props.currentLocations;
        const destLat = locArr[0].lat;
        const destLng = locArr[0].lng;

        this.state = {
            destLatLng: [destLat, destLng],
            guessLatLng: props.latLngGuess,
            distance: props.distance
        }
    }

    componentDidMount() {
        let map = this.initMap();
    }

    initMap() {
        let map = new google.maps.Map(document.getElementById('resultMap'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 2,
            minZoom: 2
        })

        let markers = [];

        var guessImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/fc2a00/");
        var destImage = new google.maps.MarkerImage("http://www.googlemapsmarkers.com/v1/50eb02/");

        let markerDest = new google.maps.Marker({
          position: {lat: this.state.destLatLng[0], lng: this.state.destLatLng[1]},
          map: map,
          title: 'Actual Location',
          icon: destImage
        });

        let markerGuess = new google.maps.Marker({
          position: {lat: this.state.guessLatLng[0], lng: this.state.guessLatLng[1]},
          map: map,
          title: 'Your guess',
          icon: guessImage
        });

        markers.push(markerDest, markerGuess)

        let bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < markers.length; i++) {
            bounds.extend(markers[i].getPosition());
        }
        map.fitBounds(bounds);
    }

    resetStore() {
        let currLocations = this.props.currentLocations;
        let newCurrLocations = currLocations.slice(1);
        this.props.changeDistance(0);
        this.props.changeLatLngGuess([]);
        this.props.changeCurrentLocations(newCurrLocations);
    }

    render() {
        let button = 
            <div className="results-buttons">
                <Link to={'/'}>
                    <Button bsStyle="info" bsSize="large" className="button">Quit this Game</Button>
                </Link>
                <Link to={'/game'}>
                    <Button bsStyle="info" bsSize="large" className="button" onClick={this.resetStore.bind(this)}>Next Round</Button>
                </Link>
            </div>

        if (this.props.currentLocations.length === 1) {
            let total = this.props.totalDistance.toFixed(1);
            let lowestScoreObj = this.props.scores[this.props.scores.length-1];
            if (this.props.scores.length < 10 || total > lowestScoreObj.score) {
                button = <NewScoreContainer />
            } else {
                button =
                    <div>
                        <Link to={'/final'}>
                            <Button bsSize="large" bsStyle="info" className="button">Get Your Results</Button>
                        </Link>
                    </div>
            }
        }

        return (
            <div className="result-and-key">
                {this.props.currentLocations.length &&
                <div id="#result-writing-header">
                    <h1>{this.props.currentLocations[0].name}</h1>
                    <h5>{this.props.currentLocations[0].location}</h5>
                </div>
                }
                <div id="resultMap"></div>
                <div id="result-writing">
                    <p id='result-key-left'><span className="bold" style={{color: '#50eb02'}}>Green</span> indicates the correct location.</p> 
                    <p id='result-key-right'><span className="bold" style={{color: '#fc2a00'}}>Red</span> indicates the location of your guess.</p>
                    <p>Your guess was <span className="bold" style={{color: 'blue'}}>{this.state.distance} miles</span> away from the correct location.</p>
                </div>
                {button}
            </div>
        )
    }
}