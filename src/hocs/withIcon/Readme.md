```jsx harmony
const withIcon = require('./index').default;

const ButtonWithIcon = withIcon({
  cnNsp: 'btn'
})(Button);

<ButtonWithIcon iconName="apple" iconType="brands" className="btn-primary btn-has-icon">Click Me!</ButtonWithIcon>
```

Icon in the end
```jsx harmony
const withIcon = require('./index').default;

const ButtonWithIcon = withIcon({
  cnNsp: 'btn'
})(Button);

<ButtonWithIcon iconName="apple" iconType="brands" iconPosition="end" className="btn-success btn-icon-end btn-has-icon">Primary</ButtonWithIcon>


```
