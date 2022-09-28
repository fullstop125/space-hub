import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../Redux/Missions/mission';

const Missions = ({
  missionId, reserved, missionName, missionDescription,
}) => {
  const dispatch = useDispatch();
  const reserveMission = () => {
    dispatch(joinMission(missionId));
  };
  const cancelReservation = () => {
    dispatch(leaveMission(missionId));
  };

  return (
    <tr>
      <td>{missionName}</td>

      <td>{missionDescription}</td>

      {reserved && (
        <td>
          <div className="badge-secondary">Not A Member</div>
        </td>
      )}
      {!reserved && (
        <td>
          <div className="badge-primary">Active Member</div>
        </td>
      )}

      <td>
        {!reserved && (
          <button
            type="button"
            className="btn btn-danger"
            onClick={reserveMission}
          >
            Leave Mission
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="btn btn-secondary"
            onClick={cancelReservation}
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
  missionId: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default Missions;
