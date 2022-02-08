import BasicModal from './BasicModal';
import Tooltip from '@mui/material/Tooltip';

function Cards({ characterList }) {
  return (
    <div className="containerHeroes">
      {characterList.map((character) => (
        <div
          className="heroes picture"
          style={{
            backgroundImage: character.image
              ? `url(${character.image.url})`
              : 'none',
          }}
        >
          <div className="title">
            <div className="type">{}</div>
            <h1>{character.name}</h1>
            <div className="spec">
              <div
                className={`alignment ${
                  character.biography
                    ? character.biography.alignment
                    : 'neutral'
                }`}
              />
              <Tooltip title="Intelligence" placement="left">
                <div className="attack btn">
                  {character.powerstats.intelligence}
                </div>
              </Tooltip>
              <Tooltip title="Strength" placement="left">
                <div className="attack btn">
                  {character.powerstats.strength}
                </div>
              </Tooltip>
              <Tooltip title="Durability" placement="left">
                <div className="neutre btn">
                  {character.powerstats.durability}
                </div>
              </Tooltip>
              <Tooltip title="Power" placement="left">
                <div className="defense btn">{character.powerstats.power}</div>
              </Tooltip>
              <Tooltip title="Combat" placement="left">
                <div className="defense btn">{character.powerstats.combat}</div>
              </Tooltip>
            </div>
          </div>
          <div />
          <BasicModal hero={character} />
          <footer>&copy; Edition 2021 by Suicide Squad</footer>
        </div>
      ))}
    </div>
  );
}

export default Cards;
