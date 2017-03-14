import React, { Component } from 'react';
import ResultsContainer from '../containers/ResultsContainer';
import store from '../store';
import { Link } from 'react-router';



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
            });[]
    }

    initMap() {
        // Initialize map
        let map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 0
        });

        // When a user guesses a location by clicking on the map, the previous guess' marker is removed and the guess' lat and long are changed in the state.
        // COULD OPTIMIZE THIS TO NOT SAVE AN ARRAY BUT ONLY ONE MARKER
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
    }

   render() {
        return (
            <div >
                <div id="street-view"></div>
                <div id="map"></div>
                <Link to={'/results'}>
                  <button id="make-guess" onClick={this.addDistance.bind(this)}> Make Guess </button>
                </Link>
            </div>
        );  
   }
}


