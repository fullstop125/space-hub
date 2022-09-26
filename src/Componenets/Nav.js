import { Link } from 'react-router-dom';
import logo from '../Assets/_logo_.png';

const Nav = () => (
  <nav>
    <div className="logo">
      <img src={logo} alt="logo" />
      <span className="logoText">Space Hub</span>
    </div>
    <ul className="nav-links">
      <Link to="/">
        <li>Rockets</li>
      </Link>
      <Link to="/missions">
        <li>Missions</li>
      </Link>
      <Link to="/profile">
        <li>My Profile</li>
      </Link>
    </ul>
  </nav>
);

export default Nav;
