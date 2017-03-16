import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router';
import Instructions from './Instructions';


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

  switchToId(category) {
    let text;
    if (category === 'Historical Landmarks') {
      text = 'Historical-Landmarks';
    } else if (category === 'Natural Wonders') {
      text = "Natural-Wonders";
    } else if (category === 'United States') {
      text = 'United-States';
    } else if (category === 'International') {
      text = 'International';
    } else {
      text = 'Random';
    }
    return text;
  }

  handleClick(e) {
    const oldCategory = this.props.selectedCategory;
    let newCategory = e.target.attributes.value.value;
    let newId = this.switchToId(newCategory);
    let newElem = document.getElementById(newId);
    if (oldCategory === newCategory) {
      newCategory = 'Random';
      newElem.style.border = 'solid 2px white';
    } else {
      if (oldCategory !== 'Random') {
        const oldId = this.switchToId(oldCategory);
        const oldElem = document.getElementById(oldId);
        oldElem.style.border = 'solid 2px white';
      }
      newElem.style.border = 'solid 2px blue';
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
    for (var i = 0; i < this.props.locations.length; i++) {
      if (this.props.selectedCategory === 'Random') {
        categoryLocations.push(this.props.locations[i]);
      } else if (this.props.locations[i].category === this.props.selectedCategory) {
        categoryLocations.push(this.props.locations[i]);
      } 
    }
    let selectedLocations = this.state.chooseFiveRandomly(categoryLocations)
    this.props.changeCurrentLocations(selectedLocations);
  }

  findLocations() {
    this.state.chooseLocations();
  }

  render() {
    return (
      <div>
        <div className="home-icon"></div>
        <Jumbotron className="text jumbo">
          <h1>Where in the World</h1>
          <p>How well do you know the world?</p>
          <Instructions />
        </Jumbotron>
        <div className="category-boxes">
          <div className="category-selection" id="International" value="International" onClick={(e) => {
            e.preventDefault();
            this.state.handleClick(e)
          }}>
            <div className="category-selection-child" value="International"></div>
            <p className="category-text">International</p>
          </div>
          <div className="category-selection" id="United-States" value="United States" onClick={(e) => {
            e.preventDefault();
            this.state.handleClick(e)
          }}>
            <div className="category-selection-child" value="United States"></div>
            <p className="category-text">United States</p>
          </div>
          <br></br>
          <div className="category-selection" id="Historical-Landmarks" value="Historical Landmarks" onClick={(e) => {
            e.preventDefault();
            this.state.handleClick(e)
          }}>
            <div className="category-selection-child" value="Historical Landmarks"></div>
            <p className="category-text">Historical Landmarks</p>
          </div>
          <div className="category-selection" id="Natural-Wonders" value="Natural Wonders" onClick={(e) => {
            e.preventDefault();
            this.state.handleClick(e)
          }}>
            <div className="category-selection-child" value="Natural Wonders"></div>
            <p className="category-text">Natural Wonders</p>
          </div>
        </div>
        <Link to={'/game'}>
          <Button bsStyle="info" bsSize="large" id="play-game" className="button" onClick={this.state.chooseLocations}>Play {this.props.selectedCategory}</Button>
        </Link>
      </div>
    )
  }
}

