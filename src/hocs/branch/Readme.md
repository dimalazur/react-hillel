```jsx harmony
const { default: branch } = require('./index');
const { default: withIcon } = require('../withIcon');


const TestComponent = branch(
  ({ iconName }) => Boolean(iconName),
  withIcon({
    cnNsp: 'TestComponent',
  }),
)(({ children }) => {
  return <div className="TestComponent">{children}</div>;
});

<div>
  <TestComponent>Text Without Icon</TestComponent>
  <TestComponent iconName="apple" iconType="brands">Text With Icon</TestComponent>
</div>
```
