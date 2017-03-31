'use strict';

import React, { PropTypes } from 'react';

require('../styles/Self.css');

class IncrementComponent extends React.Component {
  render() {
    return (
      <div className="self-component">
        <div>Home Depot</div>
        { this.props.number }
        <button onClick={ this.handleClick.bind(this) }>Add 1</button>
      </div>
    );
  }

  handleClick() {
    this.props.increment()
  }

/*  static displayName = 'IncrementComponent'
  static propTypes = {
    increment: PropTypes.number.isRequired
  }*/
}

IncrementComponent.displayName = 'IncrementComponent';

// Uncomment properties you need
IncrementComponent.propTypes = {
  number: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired
};
// SelfComponent.defaultProps = {};

export default IncrementComponent;