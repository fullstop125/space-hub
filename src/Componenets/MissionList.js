import React from 'react';
import { useSelector } from 'react-redux';
import Missions from './Mission';

const MissionList = () => {
  const missions = useSelector((state) => state.missions);

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
            missionId={mission.mission_id}
            reserved={mission.reserved !== false}
          />
        ))}
      </table>
    </div>
  );
};

export default MissionList;
