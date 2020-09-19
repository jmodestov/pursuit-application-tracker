import React from 'react';
import PropTypes from 'prop-types';

const ViewOptions = ({ addJob }) => {
  return (
    <div id="viewType">
      <div id="optionButtons">
        <button type="button" className="viewOption" id="appliedJobs">
          Applied Jobs
        </button>
        <button type="button" className="viewOption" id="interviews">
          Interviews
        </button>
        <button type="button" className="viewOption" id="notApplied">
          Not Yet Applied
        </button>
      </div>

      <button type="button" id="newRecord" onClick={() => addJob()}>
        + New Job
      </button>
    </div>
  );
};

ViewOptions.propTypes = {
  addJob: PropTypes.func.isRequired,
};

export default ViewOptions;
