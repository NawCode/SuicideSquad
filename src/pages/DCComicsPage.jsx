import Navbar from '../components/Navbar';
import ScrollTop from '../components/Scroll';
import Footer from '../components/Footer';
import Listing from '../components/ListingDC';

const DC = () => {
  return (
    <div>
      <Navbar />
        <h1 className="title-page">DC COMICS</h1>
      <Listing />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default DC;
