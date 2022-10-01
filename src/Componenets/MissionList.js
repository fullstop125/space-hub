import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../Redux/Missions/mission';
import Missions from './Mission';

const MissionList = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
  }, []);
  return (
    <div className="mission-list">
      <table>
        <tr>
          <th scope="col">Mission</th>
          <th scope="col">Description</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>

        {missions.map((mission) => (
          <Missions
            key={mission.mission_id}
            missionName={mission.mission_name}
            missionDescription={mission.description}
          />
        ))}
      </table>
    </div>
  );
};

export default MissionList;
