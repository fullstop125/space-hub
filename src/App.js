import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Missions from './Componenets/Mission';
import Nav from './Componenets/Nav';
import Rockets from './Componenets/Rockets';
import Profile from './Componenets/Profile';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <RocketList />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
