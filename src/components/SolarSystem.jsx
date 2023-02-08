import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './Solarsystem.css';

class SolarSystem extends Component {
  render() {
    return (
      <>
        <div data-testid="solar-system">
          <Title headline="Planetas" />
        </div>
        <div className="container-planet-card">
          {planets.map((p) => (
            <PlanetCard
              key={ p.name }
              planetName={ p.name }
              planetImage={ p.image }
            />
          ))}
        </div>
      </>
    );
  }
}

export default SolarSystem;
