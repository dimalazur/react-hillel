import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import './index.scss';
/*
const App = ({username}) => <div className="App">Welcome, {username}!</div>;
*/
class App extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	     
	    };
	  }
  render() {
    // const accordionList = this.props.listAccordion;

    return (
      <React.Fragments>
        <header>
          <nav>
            <ul>
              <li><a href="#">Home1</a></li>
              <li><a href="#">Advertisers</a></li>
              <li><a href="#">Loyalty</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </header>
        <div className="App">Welcome, {this.props.username}!</div>
      </React.Fragments>
    );
  }
}

App.propTypes = {
  username: PropTypes.string,
};

App.defaultProps = {
  username: 'deer user',
};

ReactDOM.render(<App username="User Vadim!!"/>, document.querySelector('#app'));





