import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { cancelReservation, reserved } from '../Redux/profile/profile';

const Rockets = ({ rocketImage, rocketName, rocketDescription }) => {
  Rockets.propTypes = {
    rocketImage: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    rocketDescription: PropTypes.string.isRequired,
  };
  const reservations = useSelector((state) => state.profile.reserved);
  const dispatch = useDispatch();
  const handleReservations = (e) => {
    const rocketName = e.target.parentElement.children[0].innerText;
    const rocket = rocketName;
    if (reservations.includes(rocket)) {
      return;
    }
    dispatch(reserved(rocket));
  };
  const handleCancel = (e) => {
    const rocketName = e.target.parentElement.children[0].innerText;
    dispatch(cancelReservation(rocketName));
  };

  return (
    <article className="rocket-container">
      <div className="rocketImage">
        <img src={rocketImage} alt={rocketName} />
      </div>
      <div className="rocket-details">
        <h2>{rocketName}</h2>
        { reservations.includes(rocketName) && <div className="badge">Reserved</div> }
        <p>{rocketDescription}</p>
        {(reservations.includes(rocketName)) ? <button type="button" className="btn-disabled btn" onClick={handleCancel}>Cancel Reservations</button> : <button type="submit" className="btn btn-primary" onClick={handleReservations}>Reserve</button>}
      </div>
    </article>
  );
};
export default Rockets;
