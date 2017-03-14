import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import { changeCurrentLocations, changeDistance, changeTotal, changeSelectedCategory, changeLatLngGuess } from '../reducers/index';
import store from '../store';
import SignUp from './SignUp';



export default class HomePage extends Component {
    constructor(props) {
      super(props);
      this.state = {
        handleClick: this.handleClick.bind(this),
        chooseFiveRandomly: this.chooseFiveRandomly.bind(this),
        chooseLocations: this.chooseLocations.bind(this),
        findLocations: this.findLocations.bind(this)
      }
    }

    handleClick(e) {
      const oldCategory = this.props.selectedCategory;
      let newCategory = e.target.attributes.value.value;
      let newElem = document.getElementById(newCategory);
      if (oldCategory === newCategory) {
        newCategory = 'random';
        newElem.style.border = 'solid 2px white';
      } else {
        if (oldCategory !== 'random') {
          const oldElem = document.getElementById(oldCategory);
          oldElem.style.border = 'solid 2px white';
        }
        newElem.style.border = 'solid 2px lightblue';
      }
      this.props.changeSelectedCategory(newCategory);
  }

    chooseFiveRandomly(arr) {
      let chosen = [];
      for (var i = 5; i > 0; i--) {
        let index = Math.floor(Math.random() * arr.length);
        chosen.push(arr[index]);
        arr.splice(index, 1);
      }
      return chosen;
    }

    chooseLocations() {
      let categoryLocations = [];
      for (var i = 0; i < state.locations.length; i++) {
        if (state.selectedCategory === 'random') {
          categoryLocations.push(state.locations[i]);
        } else if (state.locations[i].category === state.selectedCategory) {
          categoryLocations.push(state.locations[i]);
        } 
      }
      let selectedLocations = this.state.chooseFiveRandomly(categoryLocations)
      store.dispatch(changeCurrentLocations(selectedLocations));
    }
    
    findLocations() {
      this.chooseLocations();
    }

    render() {
      let playButton = 'Play Random Categories';
      if (this.props.selectedCategory !== 'random') {
        let playbutton = `Play ${this.props.selectedCategory}`;
      }
      return (
          <div >
              <Jumbotron className="text jumbo">
                  <h1>Where in the World</h1>
                  <p>How well do you know the world?</p>
                  <Button bsSize="small" bsStyle="info">Instructions</Button>
              </Jumbotron>
              <div className="category-boxes">
                <div className="category-selection" id="international"  value="international" onClick={(e) => {
                  e.preventDefault();
                  this.state.handleClick(e)}}>
                  <p className="category-text">International</p>
                </div>
                <div className="category-selection" id="usa"  value="usa" onClick={(e) => {
                  e.preventDefault();
                  this.state.handleClick(e)}}>
                  <p className="category-text">United States</p>  
                </div> 
                <br></br>
                <div className="category-selection" id="historical"  value="historical" onClick={(e) => {
                  e.preventDefault();
                  this.state.handleClick(e)}}>
                  <p className="category-text">Historical Landmarks</p>
                </div>
                <div className="category-selection" id="natural"  value="natural" onClick={(e) => {
                  e.preventDefault();
                  this.state.handleClick(e)}}>
                  <p className="category-text">Natural Wonders</p>
                </div>
              </div>
              <Link to={'/game'}>
                <Button bsStyle="info" bsSize="large" id="play-game">{this.props.selectedCategory}</Button>
              </Link>
          </div>
      )
    }
}

