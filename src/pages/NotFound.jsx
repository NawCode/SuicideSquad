import Navbar from '../components/Navbar';
import ScrollTop from '../components/Scroll';
import Footer from '../components/Footer';
import Deadpool404 from '../images/Deadpool404.jpg';

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="imageContainer">
        <img src={Deadpool404} />
      </div>
    </div>
  );
};

export default NotFound;
