import React from 'react';
import AppliedJobCard from './appliedJobCard.jsx';
import NewJobCard from './newJobCard.jsx';

const MainDisplay = (props) => {
  // Where do we do fetch to see if we have applications collections?
  const {
    jobsApplied,
    loadApps,
    addJobCard,
    updateNewCompany,
    updateNewPosition,
    updateNewDate,
    updateNewStatus,
    newCompany,
    newPosition,
    newDate,
    newStatus,
    saveNewJob,
  } = props;
  const items = [];

  if (jobsApplied && jobsApplied.length !== 0) {
    props.jobsApplied.forEach((job, idx) => {
      items.unshift(<AppliedJobCard job={job} />);
    });
  }
  // Add a job if addJob is true. This new record will have input fields.

  if (addJobCard) {
    items.unshift(
      <NewJobCard
        newCompany={newCompany}
        newPosition={newPosition}
        newDate={newDate}
        newStatus={newStatus}
        updateNewCompany={updateNewCompany}
        updateNewPosition={updateNewPosition}
        updateNewDate={updateNewDate}
        updateNewStatus={updateNewStatus}
        saveNewJob={saveNewJob}
        loadApps={loadApps}
      />
    );
  }

  console.log('Inside if of MainDispaly');
  console.log(jobsApplied);
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

export default MainDisplay;
