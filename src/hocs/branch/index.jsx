import React from 'react';

const branch = (conditionFn, hocIfTrue, hocIfFalse) => (WrappedComponent) => {
  const BranchedComponent = (props) => {
    let Component = WrappedComponent;

    if (typeof conditionFn !== 'function') {
      return <Component {...props} />;
    }

    if (conditionFn(props)) {
      if (typeof hocIfTrue === 'function') {
        Component = hocIfTrue(WrappedComponent);
      }
    } else if (typeof hocIfFalse === 'function') {
      Component = hocIfFalse(WrappedComponent);
    }

    return <Component {...props} />;
  };

  BranchedComponent.displayName = `Branched${WrappedComponent.name}`;

  return BranchedComponent;
};

export default branch;
