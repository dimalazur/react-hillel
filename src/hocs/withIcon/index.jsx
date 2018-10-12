
import React from 'react';

import Icon from '../../components/UI/Icon';

const withIcon = ({ cnNsp }) => (WrappedComponent) => {
  const WrappedComponentWithIcon = ({
    iconName, iconType, children, iconPosition, ...props
  }) => {
    const content = [
      <span className={`${cnNsp}-icon`}>
        <Icon name={iconName} type={iconType} />
      </span>,
      <span className={`${cnNsp}-content`}>
        {children}
      </span>,
    ];

    if (iconPosition === 'end') {
      content.reverse();
    }

    return (
      <WrappedComponent {...props}>
        {content}
      </WrappedComponent>
    );
  };

  WrappedComponentWithIcon.displayName = `${WrappedComponent.name}WithIcon`;

  return WrappedComponentWithIcon;
};

export default withIcon;
