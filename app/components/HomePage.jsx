import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import { changeCurrentLocations, changeDistance, changeTotal, changeSelectedCategory, changeLatLngGuess } from '../reducers/index';
import store from '../store';



export default class HomePage extends React.Component {
    constructor() {
      super();
      this.state = {
        category: null,
        handleSelection: this.handleSelection.bind(this),
        chooseFiveRandomly: this.chooseFiveRandomly.bind(this),
        chooseLocations: this.chooseLocations.bind(this)
      }
    }

    handleSelection(e) {
      e.preventDefault();
      let oldCategory = this.state.category;
      let newCategory = e.target.attributes.value.value;
      this.state.category = newCategory;
      let newElem = document.getElementById(newCategory);
      newElem.style.border = 'solid 5px lightblue';
      if (oldCategory !== null && newCategory !== oldCategory) {
        let oldElem = document.getElementById(oldCategory);
        oldElem.style.border = 'solid 5px black';
      }
      store.dispatch(changeSelectedCategory(newCategory));
      this.state.chooseLocations();
    }

    chooseFiveRandomly(arr) {
      let chosen = [];
      for (var i = 5; i > 0; i--) {
        let index = Math.floor(Math.random() * arr.length);
        chosen.push(arr[index]);
        arr.splice(index, 1);
      }
      return chosen
    }

    chooseLocations() {
      let state = store.getState();
      let categoryLocations = [];
      for (var i = 0; i < state.locations.length; i++) {
        if (state.selectedCategory === null) {
          console.log('in')
          categoryLocations.push(state.locations[i]);
        } else if (state.locations[i].category === state.selectedCategory) {
          categoryLocations.push(state.locations[i]);
        } 
      }
      console.log('catLoc: ', categoryLocations)
      let selectedLocations = this.state.chooseFiveRandomly(categoryLocations)
      store.dispatch(changeCurrentLocations(selectedLocations));
    }

    resetStore() {
      store.dispatch(changeCurrentLocations([]));
      store.dispatch(changeDistance(0));
      store.dispatch(changeTotal(0));
      store.dispatch(changeSelectedCategory(null));
      store.dispatch(changeLatLngGuess([]));
    }

    render() {
      return (
          <div onLoad={this.resetStore()}>
              <Jumbotron className="text">
                  <h1>How Well Do You Know the World?</h1>
                  <p>Pick a category and then get dropped onto the street somewhere in the world. Indicate on a map where you think you are and see how close you can get!</p>
              </Jumbotron>
              <div className="category-boxes">
                <div className="category-selection" id="international" onClick={this.state.handleSelection} value="international">
                  <p className="category-text">International</p>
                </div>
                <div className="category-selection" id="usa" onClick={this.state.handleSelection} value="usa">
                  <p className="category-text">United States</p>  
                </div> 
                <br></br>
                <div className="category-selection" id="historical" onClick={this.state.handleSelection} value="historical">
                  <p className="category-text">Historical Landmarks</p>
                </div>
                <div className="category-selection" id="natural" onClick={this.state.handleSelection} value="natural">
                  <p className="category-text">Natural Wonders</p>
                </div>
              </div>
              <Link to={'/game'}>
                <button className="button" id="play-game">Play Game</button>
              </Link>
          </div>
      )
    }
}

