import React from 'react';

const NewJobCard = (props) => {
  // each div should contain input areas
  return (
    <div className="Job-Card" id="New-Job-Card">
      <div id="New-Job-Inputs">
        <div className="Company-Name">
          <input type="text" id="Company" name="Company" />
        </div>
        <div className="Position-Title">
          <input type="text" id="Position" name="Position" />
        </div>
        <div className="Date-Applied">
          <input type="text" id="Date" name="Date" />
        </div>
        <div className="App-Status">
          <input type="text" id="Status" name="Status" />
        </div>
      </div>
      <button id="Save-New">Save</button>
    </div>
  );
};

export default NewJobCard;
