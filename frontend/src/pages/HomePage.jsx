import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HomePageButton from '../components/HomePageButton';
import PhaserGame from '../components/PhaserGame';
import FeedButton from '../components/FeedButton';
import FoodAlert from '../components/FoodAlert';
import CharbyHeader from '../components/CharbyHeader';

import {
  feed as feedStore,
} from '../store/charby';

function HomePage() {
  const [showFoodAlert, setShowFoodAlert] = useState(false);

  const hungerLevel = useSelector((state) => state.charby.hunger);
  const dispatch = useDispatch();

  function feed() {
    dispatch(feedStore());
    setShowFoodAlert(true);
    setTimeout(() => {
      setShowFoodAlert(false);
    }, 1000);
  }

  return (
    <>
      <FoodAlert show={showFoodAlert} level={hungerLevel} />
      <CharbyHeader />
      <PhaserGame />
      <FeedButton feed={feed} />
      <HomePageButton />
    </>
  );
}

export default HomePage;
