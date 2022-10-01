import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Rockets from './Rockets';
import { getRockets } from '../Redux/Rockets/rocket';

const RocketList = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    <section className="Rocket-List">
      {rockets.map((item) => (
        <Rockets
          key={item.id}
          rocketImage={item.flickr_images[0]}
          rocketName={item.rocket_name}
          rocketDescription={item.description}
        />
      ))}
    </section>
  );
};
export default RocketList;
