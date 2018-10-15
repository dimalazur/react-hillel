import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class AccordionItemBody extends Component {
  render() {
    const { isOpened } = this.props;
    const cn = classNames('content', { 'is-opened': isOpened });
    return (
      <div className={cn}>
        {this.props.children}
      </div>
    );
  }
}

export default AccordionItemBody;
