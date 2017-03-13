import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router';
import {changeSelectedCategory} from '../reducers/index';
import store from '../store';



export default class HomePage extends React.Component {
    constructor() {
      super();
      this.state = {
        category: null,
        handleSelection: this.handleSelection.bind(this)
      }
    }

    handleSelection(e) {
      e.preventDefault();
      let oldCategory = this.state.category;
      let newCategory = e.target.attributes.value.value;
      this.state.category = newCategory;
      let newElem = document.getElementById(newCategory);
      newElem.style.border = 'solid 5px lightblue';
      if (oldCategory !== null) {
        let oldElem = document.getElementById(oldCategory);
        oldElem.style.border = 'solid 5px black';
      }
      store.dispatch(changeSelectedCategory(newCategory));
    }

    render() {
      return (
          <div>
              <Jumbotron className="text">
                  <h1>How Well Do You Know the World?</h1>
                  <p>Pick a category then get dropped onto the street somewhere in the world and indicate on the map where you think you are.</p>
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
                <button id="play-game">Play Game</button>
              </Link>
          </div>
      )
    }
}

