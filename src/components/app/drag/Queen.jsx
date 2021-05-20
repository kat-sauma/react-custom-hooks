/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

function Queen({ id, name, winner, image }) {
    return (
      <li aria-label="queen">
        
              
        
      </li>
    );
  }

Queen.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    winner: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
  };
  
  export default Queen;
