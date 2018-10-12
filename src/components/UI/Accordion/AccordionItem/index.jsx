import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AccordionItemHeader from '../AccordionItemHeader';
import AccordionItemBody from '../AccordionItemBody';


class AccordionItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isOpened: false,
    };
  }
  toggleContent() {
    this.setState({isOpened: !this.state.isOpened});
  }
  render() {
    const { title,description } = this.props;
    
    return (
      <div className="accordion-item">
        <AccordionItemHeader onClick={this.toggleContent.bind(this)} isOpened={this.state.isOpened} >{title}</AccordionItemHeader>
        <AccordionItemBody isOpened={this.state.isOpened} >{description}</AccordionItemBody>
      </div>
    );
    
  }
}

export default AccordionItem;