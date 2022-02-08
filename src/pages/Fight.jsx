import { useState } from 'react';
import Navbar from '../components/Navbar';
import ScrollTop from '../components/Scroll';
import Footer from '../components/Footer';
import HeroesAutoComplete from '../components/HeroesAutoComplete';
import HerosCard from '../components/HerosCard';
import { fight } from '../services/fighting';
import Skeleton from '@mui/material/Skeleton';

const Fight = () => {
  const [leftHeros, setLeftHeros] = useState();
  const [rightHeros, setRightHeros] = useState();
  const [fightResult, setFightResult] = useState();

  return (
    <div>
      <Navbar />

      <h1 className="title-page">VERSUS MODE</h1>

      <div className="fightersContainer">
        <div className="heroesAutoComplete">
          <HeroesAutoComplete
            id="heros-left"
            onChange={(heros) => setLeftHeros(heros)}
          />

          {leftHeros ? (
            <HerosCard heros={leftHeros} />
          ) : (
            <Skeleton
              variant="rectangular"
              width={280}
              height={368}
              sx={{ marginBottom: '50px', marginTop: '60px' }}
            />
          )}
        </div>

        <div className="buttonFight">
          <button
            className="vs"
            onClick={() => setFightResult(fight(leftHeros, rightHeros))}
          ></button>
          <button
            className="reset"
            onClick={() => {
              setRightHeros();
              setLeftHeros();
              setFightResult();
            }}
          ></button>
        </div>

        <div className="heroesAutoComplete">
          <HeroesAutoComplete
            id="heros-right"
            onChange={(heros) => setRightHeros(heros)}
          />

          {rightHeros ? (
            <HerosCard heros={rightHeros} />
          ) : (
            <Skeleton
              variant="rectangular"
              width={280}
              height={368}
              sx={{ marginBottom: '50px', marginTop: '60px' }}
            />
          )}
        </div>
      </div>
      {fightResult && (
        <div
          className="fight"
          style={{
            position: 'relative',
            top: '-4em',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            padding: '10px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '10px',
            boxShadow: '3px 3px 3px rgba(0, 0, 0, 0.719)',
            width: '500px',
          }}
        >
          {fightResult.rounds.map((round, index) => (
            <div key={index}>
              {round.attacker.name} inflige {round.damageDone} points de dégats
              à {round.defender.name}
            </div>
          ))}

          <h3>{fightResult.winner.name} gagne !</h3>
        </div>
      )}
      <ScrollTop />

      <Footer />
    </div>
  );
};

export default Fight;
