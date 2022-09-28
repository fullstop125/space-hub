import PropTypes from 'prop-types';

const Missions = ({ missionName, missionDescription }) => (
  <tr>
    <td>{missionName}</td>

    <td>{missionDescription}</td>

    <td>Active</td>

    <td>
      <button type="button" className="btn btn-secondary">
        Join Mission
      </button>
    </td>
  </tr>
);

Missions.propTypes = {
  missionName: PropTypes.string.isRequired,
  missionDescription: PropTypes.string.isRequired,
};
export default Missions;
