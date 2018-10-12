import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InputField extends Component {
	constructor (props) {
    super(props);
    this.state = {
      
    };
  }

  render(){
    const {onChange, values, typeField, name, label, data,className} = this.props;
  	const cn = classNames('field-holder', className);

  	return (
  
      <React.Fragment>
        <label className="field-label">{label}</label>
        <div className={cn}>
          <input onChange={onChange} name={name} type={typeField} className="form-field form-input" />
        </div>
      </React.Fragment>
      
  	)
  }	

}

export default InputField;