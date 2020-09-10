import React from 'react';
import AppliedJobCard from './appliedJobCard.jsx';
import NewJobCard from './newJobCard.jsx';

const MainDisplay = (props) => {
  // Where do we do fetch to see if we have applications collections?
  const { jobsApplied, loadApps, addJobCard } = props;
  const items = [];

  if (jobsApplied && jobsApplied.length !== 0) {
    props.jobsApplied.forEach((job, idx) => {
      items.unshift(<AppliedJobCard job={job} />);
    });
  }
  // Add a job if addJob is true. This new record will have input fields.
  console.log('This should be false ', addJobCard);
  if (addJobCard) {
    items.unshift(<NewJobCard />);
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
