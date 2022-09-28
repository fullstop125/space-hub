import { useSelector } from 'react-redux';
import uuid from 'react-uuid';

const Profile = () => {
  const reservations = useSelector((state) => state.profile.reserved);
  return (
    <section className="Profile">
      <article className="Profile-Reservations">
        <h2>My Reservations</h2>
        <ul>
          {reservations.map((item) => (
            <li key={uuid}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </article>
      <article className="Profile-Missions">
        <h2>My Missions</h2>
      </article>
    </section>
  );
};
export default Profile;
