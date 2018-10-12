import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AccordionItem from './AccordionItem';
import AccordionItemHeader from './AccordionItemHeader';

import './styles.scss';

class Accordion extends Component {  

  
  render() {
    const accordionList = this.props.listAccordion;
    
    return (<div className="accordion">
        {
          accordionList.map((item, index) => (
            <AccordionItem title={item.title} description={item.description} key={index} ></AccordionItem>
          ))
        }
      </div>);
  }
}

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  listAccordion: PropTypes.arrayOf( PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired )
};

Accordion.defaultProps = {
  className: 'accordion',
};

export default Accordion;