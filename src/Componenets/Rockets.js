import PropTypes from 'prop-types';

const Rockets = ({ rocketImage, rocketName, rocketDescription }) => {
  Rockets.propTypes = {
    rocketImage: PropTypes.string.isRequired,
    rocketName: PropTypes.string.isRequired,
    rocketDescription: PropTypes.string.isRequired,
  };
  return (
    <article className="rocket-container">
      <img src={rocketImage} alt={rocketName} />
      <div className="rocket-details">
        <h2>{rocketName}</h2>
        <p>{rocketDescription}</p>
        <button type="submit" className="btn btn-primary">Reserve</button>
      </div>
    </article>
  );
};
export default Rockets;
