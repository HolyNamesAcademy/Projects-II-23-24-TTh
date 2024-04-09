import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePageButton from '../components/HomePageButton';
import PhaserGame from '../components/PhaserGame';
import FeedButton from '../components/FeedButton';
// import FoodAlert from '../components/FoodAlert';
import CharbyHeader from '../components/CharbyHeader';

import {
  feed as feedStore,
  setHungerLevel,
} from '../store/charby';

function HomePage() {
  // Rendering States
  // const [showFoodAlert, setShowFoodAlert] = useState(false);
  const hungerLevel = useSelector((state) => state.charby.hunger);

  const dispatch = useDispatch();

  // Timer States
  const intervalId = useRef();

  function feed() {
    dispatch(feedStore());
    // setShowFoodAlert(true);
    // setTimeout(() => {
    //   // setShowFoodAlert(false);
    // }, 3000);
  }

  useEffect(() => {
    // helper function to stop an existing timer
    const clear = () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };

    // start the timer
    intervalId.current = setInterval(() => {
      if (hungerLevel > 0) {
        console.log('lowering hunger level', hungerLevel - 1);
        dispatch(setHungerLevel(hungerLevel - 1));
      }
    }, 8000);

    // cleanup function stops the timer when the component unmounts
    return clear;
  }, [dispatch, hungerLevel]);

  return (
    <>
      {/* <FoodAlert show={showFoodAlert} level={hungerLevel} /> */}
      <CharbyHeader />
      <PhaserGame />
      <FeedButton feed={feed} />
      <HomePageButton />
    </>
  );
}
//test comment

export default HomePage;
