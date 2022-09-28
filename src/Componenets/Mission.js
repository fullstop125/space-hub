import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joined } from '../Redux/profile/profile';

const Missions = ({ missionName, missionDescription }) => {
  const dispatch = useDispatch();
  const handleJoin = (e) => {
    e.preventDefault();
    dispatch(joined(missionName));
  };

  return (
    <tr>
      <td>{missionName}</td>

      <td>{missionDescription}</td>

      <td>Active</td>

      <td>
        <button type="button" className="btn btn-secondary" onClick={handleJoin}>
          Join Mission
        </button>
      </td>
    </tr>
  );
};

Missions.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
};
export default Missions;
