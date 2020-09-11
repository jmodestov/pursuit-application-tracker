import React from 'react';

const NewJobCard = (props) => {
  const {
    newCompany,
    newPosition,
    newDate,
    newStatus,
    updateNewCompany,
    updateNewPosition,
    updateNewDate,
    updateNewStatus,
    saveNewJob,
    loadApps,
  } = props;
  // each div should contain input areas
  return (
    <div className="Job-Card" id="New-Job-Card">
      <div id="New-Job-Inputs">
        <div className="Company-Name">
          <input
            type="text"
            id="Company"
            name="Company"
            onChange={(e) => updateNewCompany(e.target.value)}
          />
        </div>
        <div className="Position-Title">
          <input
            type="text"
            id="Position"
            name="Position"
            onChange={(e) => updateNewPosition(e.target.value)}
          />
        </div>
        <div className="Date-Applied">
          <input
            type="date"
            id="Date"
            name="Date"
            onChange={(e) => updateNewDate(e.target.value)}
          />
        </div>
        <div className="App-Status">
          <select name="status" id="Status" onChange={(e) => updateNewStatus(e.target.value)}>
            <option value="Not Heard Back">Not Heard Back</option>
            <option value="Phone Interview">Phone Interview</option>
            <option value="Technical Interview">Technical Interview</option>
            <option value="Final Interview">Final Interview</option>
            <option value="Expecting Offer">Expecting Offer</option>
            <option value="Received Offer">Received Offer</option>
            <option value="They don't deserve you!">They don&#39;t desrve you!</option>
          </select>
        </div>
      </div>
      <button
        id="Save-New"
        type="submit"
        onClick={() => {
          saveNewJob(newCompany, newPosition, newDate, newStatus);
          loadApps();
        }}
      >
        Save
      </button>
    </div>
  );
};

export default NewJobCard;
