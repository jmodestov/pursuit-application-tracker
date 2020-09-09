import React from 'react';

const ViewOptions = (props) => {
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

      <button type="button" className="addRecord" id="newJob">
        Not Yet Applied
      </button>
    </div>
  );
};

export default ViewOptions;
