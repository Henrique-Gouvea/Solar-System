import React, { Component } from 'react';

const { planetName } = this.props;
const { planetImage } = this.props;

class PlanetCard extends Component {
  render() {
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } />
      </div>
    );
  }
}

export default PlanetCard;
