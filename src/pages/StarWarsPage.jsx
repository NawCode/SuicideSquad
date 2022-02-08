import Navbar from '../components/Navbar';
import ScrollTop from '../components/Scroll';
import Footer from '../components/Footer';
import Listing from '../components/ListingStarWars';

const SW = () => {
  return (
    <div>
      <Navbar />
      <h1 className="title-page">STAR WARS</h1>
      <Listing />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default SW;
