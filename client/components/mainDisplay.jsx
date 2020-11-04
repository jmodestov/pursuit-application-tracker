import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import AppliedJobCard from './appliedJobCard.jsx';
import NewJobCard from './newJobCard.jsx';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  deleteJob: state.jobApps.deleteJob,
  jobsApplied: state.jobApps.jobsApplied,
  loadApps: state.jobApps.loadApps,
  addJob: state.jobApps.addJob,
  addJobCard: state.addJobCard.addJobCard,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

const MainDisplay = ({ deleteJob, jobsApplied, loadApps, addJob, addJobCard }) => {
  const items = [];

  if (jobsApplied && jobsApplied.length !== 0) {
    jobsApplied.forEach((job, idx) => {
      items.unshift(<AppliedJobCard job={job} deleteJob={deleteJob} />);
    });
  }

  // Add a job if addJob is true. This new record will have input fields.
  loadApps();

  if (addJobCard) {
    items.unshift(<NewJobCard />);
  } else if (jobsApplied && jobsApplied.length === 0) {
    // push into items a div telling the user to apply
    items.unshift(
      <div id="Zero-Jobs">
        <button type="button" id="newRecord" onClick={() => addJob()}>
          + Let's Do This!
        </button>
        <h1>"You better work" - RuPaul</h1>
      </div>
    );
  }

  return (
    <div id="Main-Container">
      <div id="labels">
        <div>COMPANY</div>
        <div>POSITION</div>
        <div>DATE APPLIED</div>
        <div>STATUS</div>
      </div>
      {items}
    </div>
  );
};

MainDisplay.propTypes = {
  deleteJob: PropTypes.func.isRequired,
  jobsApplied: PropTypes.arrayOf(PropTypes.string).isRequired,
  loadApps: PropTypes.func.isRequired,
  addJob: PropTypes.func.isRequired,
  addJobCard: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MainDisplay);
