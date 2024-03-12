import { useState } from 'react';
import HomePageButton from '../components/HomePageButton';
import PhaserGame from '../components/PhaserGame';
import FeedButton from '../components/FeedButton';
import FoodAlert from '../components/FoodAlert';
import CharbyHeader from '../components/CharbyHeader';

function HomePage() {
  const [showFoodAlert, setShowFoodAlert] = useState(false);

  function feed() {
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
      <FeedButton feed={feed} />
      <HomePageButton />
    </>
  );
}

export default HomePage;
