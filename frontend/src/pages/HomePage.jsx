import HomePageButton from '../components/HomePageButton';
import PhaserGame from '../components/PhaserGame';
import FeedButton from '../components/FeedButton';
import FoodAlert from '../components/FoodAlert';

function HomePage() {
  return (
    <div>
      <FoodAlert />
      <PhaserGame />
      <FeedButton />
      <HomePageButton />
    </div>
  );
}

export default HomePage;
