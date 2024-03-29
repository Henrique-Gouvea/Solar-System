import React, { Component } from 'react';
import PropType from 'prop-types';
import './Title.css';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>
        {headline}
      </h2>
    );
  }
}

Title.propTypes = {
  headline: PropType.string.isRequired,
};

export default Title;
