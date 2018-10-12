import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class FormRow extends Component {
	constructor (props) {
    super(props);
    this.state = {
      
    };
  }




  render(){
  	const {onChange, value, type, name, placeholder, labelField, itSelect, children} = this.props;
  	return (

  		<div className="form-row">
        {
          children
        /*<label>{labelField}</label>
        <div className="field-holder">
          {
            if ( !itSelect) {
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
            }
          }
        </div>*/}
      </div>
  	)
  }	
}

export default FormRow;