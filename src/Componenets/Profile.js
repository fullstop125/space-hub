import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const Profile = () => {
  const reservations = useSelector((state) => state.profile.reserved);
  const mission = useSelector((state) => state.profile.joined);
  return (
    <section className="Profile">
      <article className="Profile-Reservations">
        <h2 className="Title">My Reservations</h2>
        <ul className="list-container">
          {reservations.map((item) => (
            <li key={uuid}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </article>
      <article className="Profile-Missions">
        <h2>My Missions</h2>
        <ul className="list-container">
          {mission.map((item) => (
            <li key={uuid}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};
export default Profile;
