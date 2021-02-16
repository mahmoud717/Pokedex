import React from 'react';
import PropTypes from 'prop-types';

const filter = ({ changeFilter }) => (
  <input
    type="text"
    placeholder="Search"
    onChange={e => {
      changeFilter(e.target.value);
    }}
    className="search-input"
  />
);

filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default filter;
