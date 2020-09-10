import React from 'react';
import { connect } from 'react-redux';
import NavBar from './components/navbar.jsx';
import ViewOptions from './components/viewOptions.jsx';

import * as actions from './actions/actions';

// create connection to mapStateToProps and mapDispatchToProps

const mapStateToProps = (state) => ({
  jobsApplied: state.jobApps.jobsApplied,
  newCompany: state.jobApps.newCompany,
  newPosition: state.jobApps.newPosition,
  newDate: state.jobApps.newDate,
  newStatus: state.jobApps.newStatus,
});

const mapDispatchToProps = (dispatch) => ({
  loadApps: () => dispatch(actions.loadApps()),
});

const App = (props) => {
  return (
    <div id="app">
      <NavBar />
      <ViewOptions />
      <h1>Testing Testing</h1>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
