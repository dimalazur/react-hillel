import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Option from './Option';

class SelectField extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
  	const {
      onChange, value, name, label, optionArr,
    } = this.props;
  	return (

    <div className="select-holder">
      <label className="field-label">{label}</label>
      <div className="field-holder">
        <select onChange={onChange} className="select form-select" name={name}>
          {
                optionArr.map((item, index) => (
                  <Option optionValue={item.value} optionName={item.name} key={index} />
                ))
              }

        </select>
        {
            /* if ( !itSelect) {
              <input
                className="form-field form-input"
                onChange={ onChange }
                value={ value }
                type={type}
                name={name}
                placeholder={placeholder}
              />
            } else {
              <select className="select">
                <option value="default">Option 1</option>
                <option value="default">Option 2</option>
                <option value="default">Option 3</option>
                <option value="default">Option 4</option>
                <option value="default">Option 5</option>
              </select>
            } */
          }
      </div>
    </div>
  	);
  }
}

export default SelectField;
