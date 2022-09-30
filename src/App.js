import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Nav from './Componenets/Nav';
import RocketList from './Componenets/RocketList';
import Profile from './Componenets/Profile';
import MissionList from './Componenets/MissionList';
import { getMissions } from './Redux/Missions/mission';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <RocketList />
        </Route>
        <Route path="/missions">
          <MissionList />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}
export default App;
