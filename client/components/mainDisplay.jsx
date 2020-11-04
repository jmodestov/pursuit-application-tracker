import React from 'react';
import PropTypes from 'prop-types';
import AppliedJobCard from './appliedJobCard.jsx';
import NewJobCard from './newJobCard.jsx';

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
  addJobCard: PropTypes.func.isRequired,
};

export default MainDisplay;
