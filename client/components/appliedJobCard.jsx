import React from 'react';

const AppliedJobCard = (props) => {
  const { job } = props;
  return (
    <div className="Job-Card" id={`${job._id}`}>
      <div className="Company-Name">{job.companyName}</div>
      <div className="Position-Title">{job.positionTitle}</div>
      <div className="Date-Applied">{job.dateApplied}</div>
      <div className="App-Status">{job.status}</div>
    </div>
  );
};

export default AppliedJobCard;
