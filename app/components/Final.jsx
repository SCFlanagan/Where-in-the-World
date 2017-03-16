import React, { Component } from 'react';
import { Table, Button, Modal, FormGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router';



export default class Final extends Component {
  constructor(props) {
    super(props);
    
    let roundedDistance = (Number(props.totalDistance));
    roundedDistance = roundedDistance.toFixed(1);

    let scoresArr = props.scores;
    let isHighScore = false;
    let name;
    let newScoreObj;
    let scoreToRemove;
    let newScoresArr = props.scores;
    let lowestScoreObj = scoresArr[scoresArr.length-1];
    if (scoresArr.length < 10 || roundedDistance < lowestScoreObj.score) {
      isHighScore = true;
    }
    if (isHighScore === true) {
      newScoreObj = this.props.newScore[0];
      scoresArr.push(newScoreObj);
      scoresArr = scoresArr.sort(function(a,b) {
        return a.score - b.score;
      });
      if (scoresArr.length > 10) {
        scoreToRemove = scoresArr.pop();
        props.deleteScore(scoreToRemove.id);
      }
      newScoresArr = scoresArr;
      props.addScore(newScoreObj);
    }

    console.log('scores :', newScoresArr)
    this.state = {
      scores: newScoresArr,
      ranking: 0,
      finalScore: roundedDistance
    }
  }

  render() {
    console.log('this.state.scores: ', this.state.scores)
    return (
      <div id='final-page'>
        <h1>Game Over</h1>
        <h4>Your final score was <span className="bold">{this.state.finalScore}</span> miles. See how you compare with our highest scores below.</h4>

        <Table striped bordered condensed hover>
          <thead id="scoreboard-head">
            <tr>
              <th>Ranking</th>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.scores.map(each => {
                this.state.ranking += 1;
                return (
                  <tr key={this.state.ranking}>
                    <td>{this.state.ranking}</td>
                    <td>{each.name}</td>
                    <td>{each.score}</td>
                  </tr>  
              )})}
          </tbody>
        </Table>

        <Link to={'/home'}>
          <Button bsStyle="info" bsSize="large" className="button">Return to Home Page</Button>
        </Link>

      </div>
    )
  }
}