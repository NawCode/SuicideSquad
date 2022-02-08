import { Link } from 'react-router-dom';
import marvel from '../images/marvel2.jpg';
import dcComics from '../images/DcComics.jpg';
import starWars from '../images/star-wars.png';
import allStar from '../images/All-Star_Comics_Logo.jpg';
import versus from '../images/versus.jpg';

const Universe = () => {
  return (
    <section className="all">
      <div className="parallax">
        <div id="stars" />
        <div id="stars2" />
        <div id="stars3" />
        <div className="navbar">
          <h1>CHOISIS UN UNIVERS</h1>
        </div>
      </div>

      <div className="container">
        <div className="responsive" id="titleanim">
          <Link to="/marvel">
            <img className="wrapper" src={marvel} alt="Marvel" />
          </Link>
          <p className="universetext">Marvel</p>
        </div>
        <div className="responsive">
          <Link to="/dccomics">
            <img className="wrapper" src={dcComics} alt="DC Comics" />
          </Link>
          <p className="universetext">DC Comics</p>
        </div>
        <div className="responsive">
          <Link to="/starwars">
            <img className="wrapper" src={starWars} alt="Star Wars" />
          </Link>
          <p className="universetext">Star Wars</p>
        </div>
        <div className="responsive">
          <Link to="/allstar">
            <img className="wrapper" src={allStar} alt="All star universe" />
          </Link>
          <p className="universetext">All Star</p>
        </div>
        <div className="responsive">
          <Link to="/fight">
            <img className="wrapper" src={versus} alt="Versus Mode" />
          </Link>
          <p className="universetext">Fight Mode</p>
        </div>
      </div>
    </section>
  );
};

export default Universe;
