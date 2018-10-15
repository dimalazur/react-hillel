import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
  	const { optionValue, optionName } = this.props;
  	return (
    <option value={optionValue}>{optionName}</option>
  	);
  }
}

export default Option;
