import Navbar from '../components/Navbar';
import ScrollTop from '../components/Scroll';
import Footer from '../components/Footer';
import Listing from '../components/Listing';

const AllStar = () => {
  return (
    <div>
      <Navbar />
      <h1 className="title-page">ALL STAR</h1>
      <Listing />
      <ScrollTop />
      <Footer />
    </div>
  );
};

export default AllStar;
