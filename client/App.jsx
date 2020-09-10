import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NavBar from './components/navbar.jsx';
import ViewOptions from './components/viewOptions.jsx';
import MainDisplay from './components/mainDisplay.jsx';

import * as actions from './actions/actions';

// create connection to mapStateToProps and mapDispatchToProps

const mapStateToProps = (state) => ({
  jobsApplied: state.jobApps.jobsApplied,
  newCompany: state.jobApps.newCompany,
  newPosition: state.jobApps.newPosition,
  newDate: state.jobApps.newDate,
  newStatus: state.jobApps.newStatus,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

// Work on PropType validation.

const App = (props) => (
  <div id="app">
    <NavBar />
    <ViewOptions />

    <MainDisplay loadApps={props.loadApps} jobsApplied={props.jobsApplied} />
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(App);
