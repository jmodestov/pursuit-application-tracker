import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './components/navbar.jsx';
import ViewOptions from './components/viewOptions.jsx';
import MainDisplay from './components/mainDisplay.jsx';

import * as actions from './actions/actions';

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

// Include Route when signup page is created.
const App = ({ addJob }) => {
  return (
    <div id="app">
      <NavBar />
      <ViewOptions addJob={addJob} />
      <MainDisplay />
    </div>
  );
};

App.propTypes = {
  addJob: PropTypes.func.isRequired,
};

export default connect(mapDispatchToProps)(App);
