import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reserved } from '../Redux/profile/profile';

const Rockets = ({ rocketImage, rocketName, rocketDescription }) => {
  Rockets.propTypes = {
    rocketImage: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    rocketDescription: PropTypes.string.isRequired,
  };
  const [reservedStatus, setReservedStatus] = useState(false);
  const dispatch = useDispatch();
  const handleReservations = (e) => {
    const rocketName = e.target.parentElement.children[0].innerText;
    const rocket = rocketName;
    dispatch(reserved(rocket));
    setReservedStatus(true);
  };

  return (
    <article className="rocket-container">
      <div className="rocketImage">
        <img src={rocketImage} alt={rocketName} />
      </div>
      <div className="rocket-details">
        <h2>{rocketName}</h2>
        <p>{rocketDescription}</p>
        {(reservedStatus) ? <button type="button" className="btn-disabled btn">Reserverd</button> : <button type="submit" className="btn btn-primary" onClick={handleReservations}>Reserve</button>}
      </div>
    </article>
  );
};
export default Rockets;
