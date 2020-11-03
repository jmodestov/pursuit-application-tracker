import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes, { func } from 'prop-types';
import * as actions from '../actions/actions';

const mapStateToProps = (state) => ({
  newCompany: state.jobApps.newCompany,
  newPosition: state.jobApps.newPosition,
  newDate: state.jobApps.newDate,
  newStatus: state.jobApps.newStatus,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

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

NewJobCard.propTypes = {
  newCompany: PropTypes.string.isRequired,
  newPosition: PropTypes.string.isRequired,
  newDate: PropTypes.string.isRequired,
  newStatus: PropTypes.string.isRequired,
  updateNewCompany: PropTypes.func.isRequired,
  updateNewPosition: PropTypes.func.isRequired,
  updateNewDate: PropTypes.func.isRequired,
  updateNewStatus: PropTypes.func.isRequired,
  saveNewJob: PropTypes.func.isRequired,
  loadApps: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewJobCard);
