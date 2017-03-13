import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { placeMarker } from '../main';
import { Link } from 'react-router';
import store from '../store';


export default class Results extends React.Component {
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
        let title = 'Results';
        let button = 
                <div className="results-buttons">
                    <Link to={'/home'}>
                        <button className="each-button">Quit this Game</button>
                    </Link>
                    <Link to={'/game'}>
                        <button className="each-button" onClick={this.resetStore.bind(this)}>Next Round</button>
                    </Link>
                </div>;
        if (this.props.currentLocations.length === 1) {
            title = 'Game Over';
            button =
                    <div>
                        <p> The total distance you accrued is {this.props.totalDistance} miles.</p>
                        <Link to={'/home'}>
                            <button className="lone-button">Return Home</button>
                        </Link>
                    </div>;
        }

        return (
            <div className="result-and-key">
                <h1>{title}</h1>
                <div id="resultMap"></div>
                <div>
                    <h4 id='result-key-left'><span style={{color: '#50eb02'}}>Green</span> indicates the correct location.</h4> 
                    <h4 id='result-key-right'><span style={{color: '#fc2a00'}}>Red</span> indicates the location of your guess.</h4>
                </div>
                <p>Your guess was {this.state.distance} miles away from the correct location.</p>
                
                {button}
            </div>
        )
    }
}