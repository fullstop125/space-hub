import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { joined, leaveMission } from '../Redux/profile/profile';

const Missions = ({ missionName, missionDescription }) => {
  const missionJoined = useSelector((state) => state.profile.joined);
  const dispatch = useDispatch();
  const handleJoin = (e) => {
    e.preventDefault();
    const name = missionName;
    if (missionJoined.includes(name)) {
      return;
    }
    dispatch(joined(name));
  };

  const handleLeave = (e) => {
    e.preventDefault();
    dispatch(leaveMission(missionName));
  };

  return (
    <tr>
      <td>{missionName}</td>

      <td>{missionDescription}</td>

      {!missionJoined.includes(missionName) && (
        <td>
          <div className="badge-secondary">Not A Member</div>
        </td>
      )}
      {missionJoined.includes(missionName) && (
        <td>
          <div className="badge-primary">Active Member</div>
        </td>
      )}

      <td>
        {missionJoined.includes(missionName) && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleLeave}
          >
            Leave Mission
          </button>
        )}
        {!missionJoined.includes(missionName) && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleJoin}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

Missions.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
};
export default Missions;
