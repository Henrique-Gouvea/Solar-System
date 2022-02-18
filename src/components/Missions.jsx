import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <div>
          {missions.map((mis) => (<MissionCard
            key={ mis.name }
            name={ mis.name }
            year={ mis.year }
            country={ mis.country }
            destination={ mis.destination }
          />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
