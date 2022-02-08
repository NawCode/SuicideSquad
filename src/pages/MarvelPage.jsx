import Navbar from '../components/Navbar';
import ScrollTop from '../components/Scroll';
import Footer from '../components/Footer';
import Listing from '../components/ListingMarvel';

const Marvel = () => {
  return (
    <div>
      <Navbar />
      <h1 className="title-page">MARVEL</h1>
      <Listing />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default Marvel;
