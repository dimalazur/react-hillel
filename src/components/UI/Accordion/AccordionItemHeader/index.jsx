import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../../Icon';



class AccordionItemHeader extends Component {

  render() {
    const { onClick,isOpened } = this.props;
    const cn = classNames('title', {  'is-opened' : isOpened } );
    return (
      <div className={cn} onClick={onClick} >
        {this.props.children}
        <div className="item-status" >
          { (isOpened) ? <Icon type="solid" name="lock-open"/>  : <Icon type="solid" name="lock"/> }     
        </div>
      </div>
    );
    
  }
}

export default AccordionItemHeader;