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
            type="text"
            id="Date"
            name="Date"
            onChange={(e) => updateNewDate(e.target.value)}
          />
        </div>
        <div className="App-Status">
          <input
            type="text"
            id="Status"
            name="Status"
            onChange={(e) => updateNewStatus(e.target.value)}
          />
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
