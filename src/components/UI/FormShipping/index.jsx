import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import FormRow from './FormRow';
import InputField from './InputField';
import SelectField from './SelectField';
import Button from '../Button';

import './styles.scss';

class FormShipping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        name: '',
        lastName: '',
        streetAddress: '',
        optional: '',
        city: '',
        country: '',
        state: '',
        zipCode: '',
        PhoneNumber: '',
        email: '',
      },
    };
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(oldState => ({
      values: {
        ...oldState.values,
        [name]: value,
      },
    }));
  }

  handleChange2({ target: { name, value } }) {
    this.setState(oldState => ({
      values: {
        ...oldState.values,
        [name]: value,
      },
    }));
  }


  render() {
    const {
      values: {
        name, lastName, streetAddress, optional, city, country, state, zipCode, PhoneNumber, email,
      },
    } = this.state;
    const fieldName = this.props.formContent[0];
    const fieldLastName = this.props.formContent[1];
    const fieldStreetAddress = this.props.formContent[2];
    const fieldOptional = this.props.formContent[3];
    const fieldCity = this.props.formContent[4];
    const fieldCountry = this.props.formContent[5];
    const fieldState = this.props.formContent[6];
    const fieldZipCode = this.props.formContent[7];
    const fieldPhoneNumber = this.props.formContent[8];
    const fieldEmail = this.props.formContent[9];
    return (
      <div className="form form-login">
        <form>
          <fieldset className="form-fieldset">
            <div className="form-flex-holder">

              <div className="form-column form-column-left">

                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} label={fieldName.label} typeField={fieldName.typeField} name={fieldName.name} />
                </FormRow>
                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} label={fieldLastName.label} typeField={fieldLastName.typeField} name={fieldLastName.name} />
                </FormRow>
                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} label={fieldStreetAddress.label} typeField={fieldStreetAddress.typeField} name={fieldStreetAddress.name} />
                </FormRow>
                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} label={fieldCity.label} typeField={fieldCity.typeField} name={fieldCity.name} />
                </FormRow>
                <FormRow>
                  <SelectField onChange={this.handleChange2.bind(this)} label={fieldCountry.label} optionArr={fieldCountry.option} name={fieldCountry.name} />
                </FormRow>

              </div>

              <div className="form-column form-column-right">

                <FormRow>
                  <SelectField onChange={this.handleChange2.bind(this)} label={fieldState.label} optionArr={fieldState.option} name={fieldState.name} />
                </FormRow>
                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} label={fieldZipCode.label} typeField={fieldZipCode.typeField} name={fieldZipCode.name} />
                </FormRow>
                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} label={fieldOptional.label} typeField={fieldOptional.typeField} name={fieldOptional.name} />
                </FormRow>
                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} label={fieldPhoneNumber.label} typeField={fieldPhoneNumber.typeField} name={fieldPhoneNumber.name} />
                </FormRow>
                <FormRow>
                  <InputField onChange={this.handleChange2.bind(this)} data={fieldEmail} label={fieldEmail.label} typeField={fieldEmail.typeField} name={fieldEmail.name} />
                </FormRow>

              </div>

            </div>
            <div className="btn-holder">
              <Button className="btn btn-md btn-primary">Submit</Button>
            </div>


          </fieldset>
        </form>
      </div>
    );
  }
}

FormShipping.propTypes = {


};

FormShipping.defaultProps = {

};


export default FormShipping;
