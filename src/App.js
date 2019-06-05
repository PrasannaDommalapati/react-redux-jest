import React from 'react';
import PropTypes from 'prop-types'

class App extends React.Component {

  render() {
    return (<h2 data-heading>Hello world</h2>);
  }
}

App.propTypes = {
  email: PropTypes.string
}
export default App;