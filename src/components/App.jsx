import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


class App extends Component {
  render() {
    // const accordionList = this.props.listAccordion;

    return (
      <React.Fragments>
        <header>
          <nav>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Advertisers</a></li>
              <li><a href="#">Loyalty</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">About</a></li>
            </ul>
          </nav>
        </header>
      </React.Fragments>
    );
  }
}

App.propTypes = {

};

App.defaultProps = {

};

export default App;
