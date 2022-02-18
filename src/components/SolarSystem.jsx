import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';


class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system"><Title headline="Planetas"/></div>
        <div>
            {planets.map((plan) => (
              <PlanetCard planetName={plan.name} planetImage={plan.image}/>
            ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
