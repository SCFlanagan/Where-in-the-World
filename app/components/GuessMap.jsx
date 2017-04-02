import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router';


export default class GuessMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            destLat: this.props.currentLocations[0].lat,
            destLng: this.props.currentLocations[0].lng,
            distance: 0,
            markers: [],
            addDistance: this.addDistance.bind(this)
        }

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.placeMarker = this.placeMarker.bind(this);
        this.initMap = this.initMap.bind(this);
    }

    // componentDidMount() {
    //     this.initMap();
    // }

    close(){
        this.setState({ showModal: false });
    }

    open(){
        this.setState({ showModal: true });
    }

    initMap() {
        let header = document.getElementById('guess-header');
        header.innerHTML = 'Click Map to Choose a Location';

        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 32.901035, lng: -9.095140},
            zoom: 1
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
            let elem = document.getElementById('guess-button');
            elem.style.opacity = 1;
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
            <div> 
                <Button id="map-modal" bsStyle="info" bsSize="large" onClick={this.open} >
                Guess Location
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header onClick={this.initMap} id="guess-map-header">
                        <h3 id='guess-header'>Click Here to Show Map</h3>
                    </Modal.Header>

                    <Modal.Body>
                        <div id="map"></div>
                        <Button id="close-button" bsStyle="info" bsSize="large" onClick={this.close}>Close</Button>
                        <br></br>
                        <Link to={'/results'}>
                            <Button bsSize="large" bsStyle="info" className="button" id="guess-button" onClick={this.state.addDistance}> Make Guess </Button>
                        </Link>
                    </Modal.Body>

                </Modal>

            </div>
        )
    }
}


/*





const GuessMap = React.createClass({

    getInitialState(){
        return { 
            showModal: false,
            destLat: this.props.currentLocations[0].lat,
            destLng: this.props.currentLocations[0].lng,
            distance: 0,
            markers: []
        };
    },

    componentDidMount() {
        this.initMap();
    },

    close(){
        this.setState({ showModal: false });
    },

    open(){
        this.setState({ showModal: true });
    },

    initMap() {
        // const newDiv = document.createElement('div');
        // newDiv.id = 'map';
        // const button = document.getElementById('close-button');
        // button.insertBefore(newDiv);

        let map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 0
        });
        console.log('map: ', map)

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
            // let elem = document.getElementById('guess-button');
            // elem.style.opacity = 1;
        });
    },

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
    },

    deg2rad(deg) {
      return deg * (Math.PI/180)
    },

    placeMarker(map, location) {
      var marker = new google.maps.Marker({
          position: location, 
          map: map
      });

      map.setCenter(location);
      return marker;
    },

    addDistance() {
      this.props.addToTotal(this.state.distance);
    },

    render() {
        return (
            <div> 
                <Button bsStyle="info" bsSize="large" onClick={this.open} >
                Guess Location
                </Button>

                <Modal show={this.state.showModal} onHide={this.close}>

                    <Modal.Header>
                        <Modal.Title>Guess the Location on the Map</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <div id="map"></div>
                        <Button id="close-button" bsStyle="info" bsSize="large" onClick={this.close}>Close</Button>
                        <Link to={'/results'}>
                            <Button bsSize="large" bsStyle="info" className="button" id="guess-button" onClick={this.addDistance}> Make Guess </Button>
                        </Link>
                    </Modal.Body>

                </Modal>
            </div>
        )
    }
})

export default GuessMap*/
