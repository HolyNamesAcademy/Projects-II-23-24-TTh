import { useState } from 'react';
import { useDispatch } from 'react-redux';
import HomePageButton from '../components/HomePageButton';
import PhaserGame from '../components/PhaserGame';
import FeedButton from '../components/FeedButton';
import FoodAlert from '../components/FoodAlert';
import CharbyHeader from '../components/CharbyHeader';

import { feed } from '../store/charby';

function HomePage() {
  const [showFoodAlert, setShowFoodAlert] = useState(false);

  // This function will let us dispatch changes to the store.
  const dispatch = useDispatch();

  function handleFeed() {
    dispatch(feed());
    setShowFoodAlert(true);
    setTimeout(() => {
      setShowFoodAlert(false);
    }, 1000);
  }

  return (
    <>
      <FoodAlert show={showFoodAlert} />
      <CharbyHeader />
      <PhaserGame />
      <FeedButton feed={handleFeed} />
      <HomePageButton />
    </>
  );
}

export default HomePage;
