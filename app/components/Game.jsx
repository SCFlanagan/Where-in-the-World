import React, { Component } from 'react';
import ResultsContainer from '../containers/ResultsContainer';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';



export default class Game extends Component {

    constructor(props) {
        super(props);
        this.state = {
            destLat: props.currentLocations[0].lat,
            destLng: props.currentLocations[0].lng,
            distance: 0,
            markers: []
        }
    }

    componentDidMount() {
        this.initStreetView();
        this.initMap();
    }
   
    initStreetView() {
        // Initialize street view
        let panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
                position: {lat: this.state.destLat, lng: this.state.destLng},
                pov: {heading: 160, pitch: 0},
                zoom: 1
            });
    }

    initMap() {
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 21.551565, lng: -9.448729},
          zoom: 2
        });

        google.maps.event.addListener(map, 'click', (event) => {
            for (var i = 0; i < this.state.markers.length; i++) {
                this.state.markers[i].setMap(null);
            }

            let newMarker = this.placeMarker(map, event.latLng);
            this.state.markers.push(newMarker);
            let lat = event.latLng.lat();
            let lng = event.latLng.lng();
            let distance = this.getDistanceBetween(lat, lng, this.state.destLat, this.state.destLng);
            this.state.distance = distance;
            this.props.changeDistance(distance);
            this.props.changeLatLngGuess([lat, lng]);
            this.props.addedMarker(true);
        });
    }

    getDistanceBetween(lat1,lon1,lat2,lon2) {
      var R = 3956; // Radius of the earth in miles
      var dLat = this.deg2rad(lat2-lat1);
      var dLon = this.deg2rad(lon2-lon1);
      var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c;
      return d.toFixed(1);
    }

    deg2rad(deg) {
      return deg * (Math.PI/180)
    }

    placeMarker(map, location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map
      });

      map.setCenter(location);
      return marker;
    }

    addDistance() {
      this.props.addToTotal(this.state.distance);
      this.props.addedMarker(false);
    }
    
    hideMap() {
      const guessMap = document.getElementById('guess-map');
      guessMap.style.visibility = 'hidden';
      const guessButton = document.getElementById('guess-button');
      guessButton.style.visibility = 'initial';
    }

    showMap() {
      const guessMap = document.getElementById('guess-map');
      guessMap.style.visibility = 'visible';  
      const guessButton = document.getElementById('guess-button');
      guessButton.style.visibility = 'hidden';
    }

   render() {
        return (
            <div id="#game-page">
                <div id="street-view"></div>
                <div id="guess-map">
                  <div id="map"></div>
                    <div id='guess-buttons'>
                        <Button bsSize="large" bsStyle="info" className="button" id="hide-map-button" onClick={this.hideMap.bind(this)}>Hide Map</Button>
                        {this.props.markerAdded &&
                        <Link to={'/results'}>
                            <Button bsSize="large" bsStyle="info" className="button" id="make-guess" onClick={this.addDistance.bind(this)}> Make Guess </Button>
                        </Link> 
                        }
                    </div>
                </div>
                <Button bsSize="large" bsStyle="info" onClick={this.showMap.bind(this)} id="guess-button">Ready to Guess</Button>
            </div>
        );  
   }
}


