import React from 'react';
import BasicModal from './BasicModal';
import Tooltip from '@mui/material/Tooltip';

export default function HerosCard({ heros }) {
  return (
    <div className="containerHeroes">
      <div
        className="heroes picture"
        style={{
          backgroundImage: heros.image ? `url(${heros.image.url})` : 'none',
        }}
      >
        <div className="title">
          <div className="type">{}</div>
          <h1>{heros.name}</h1>
          <div className="spec">
            <div
              className={`alignment ${
                heros.biography ? heros.biography.alignment : 'neutral'
              }`}
            />
            <Tooltip title="Intelligence" placement="left">
              <div className="attack btn">{heros.powerstats.intelligence}</div>
            </Tooltip>
            <Tooltip title="Strength" placement="left">
              <div className="attack btn">{heros.powerstats.strength}</div>
            </Tooltip>
            <Tooltip title="Durability" placement="left">
              <div className="neutre btn">{heros.powerstats.durability}</div>
            </Tooltip>
            <Tooltip title="Power" placement="left">
              <div className="defense btn">{heros.powerstats.power}</div>
            </Tooltip>
            <Tooltip title="Combat" placement="left">
              <div className="defense btn">{heros.powerstats.combat}</div>
            </Tooltip>
          </div>
        </div>
        <div />
        <BasicModal hero={heros} />
        <footer>&copy; Edition 2021 by Suicide Squad</footer>
      </div>
    </div>
  );
}
