import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="homePage">
      <div className="container">
        <div type="button" className="loader">
          <div class="fullpage-wrapper">
            <div class="reactor-container">
              <div class="reactor-container-inner circle abs-center"></div>
              <div class="tunnel circle abs-center"></div>
              <div class="core-wrapper circle abs-center"></div>
              <div class="core-outer circle abs-center"></div>
              <div class="core-inner circle abs-center"></div>
              <div class="coil-container">
                <div class="coil coil-1"></div>
                <div class="coil coil-2"></div>
                <div class="coil coil-3"></div>
                <div class="coil coil-4"></div>
                <div class="coil coil-5"></div>
                <div class="coil coil-6"></div>
                <div class="coil coil-7"></div>
                <div class="coil coil-8"></div>
              </div>
            </div>
          </div>
        </div>
        <Link to="/universe"></Link>
      </div>
    </div>
  );
};

export default Home;
