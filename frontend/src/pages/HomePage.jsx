import HomePageButton from '../components/HomePageButton';
import PhaserGame from '../components/PhaserGame';
import FeedButton from '../components/FeedButton';

function HomePage() {
  return (
    <div>
      <PhaserGame />
      <FeedButton />
      <HomePageButton />
    </div>
  );
}

export default HomePage;
