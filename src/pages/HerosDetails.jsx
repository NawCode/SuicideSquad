import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ScrollTop from '../components/Scroll';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const HerosDetails = () => {
  const { id } = useParams();
  const [heros, setHeros] = useState();

  async function fetchHeros() {
    setHeros(
      (
        await axios.get(
          `${process.env.REACT_APP_SUICIDE_SQUAD_API}/heroes/${id}`
        )
      ).data
    );
  }

  useEffect(() => {
    fetchHeros();
  }, [id]);

  return (
    <>
      <Navbar />

      <Typography variant="h3" component="h2" align="center" />

      {heros && (
        <div className="heroesContainer">
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={4}>
              <img src={heros.image.url} alt="" style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <Typography variant="h3" component="h2">
                {heros.name}
              </Typography>

              <Typography>
                • <strong>Nom complet :</strong> {heros.biography['full-name']}
              </Typography>

              <Typography>
                • <strong>Alter Ego(s) :</strong> {heros.biography['alter-ego']}
              </Typography>

              <Typography>
                • <strong>Alias :</strong> {heros.biography.aliases}
              </Typography>

              <Typography>
                • <strong>Lieu de naissance :</strong>{' '}
                {heros.biography['place-of-birth']}
              </Typography>

              <Typography>
                • <strong>Première apparition :</strong>{' '}
                {heros.biography['first-appearance']}
              </Typography>

              <Typography>
                • <strong>Publieur :</strong> {heros.biography.publisher}
              </Typography>

              <Typography>
                • <strong>Alignement :</strong> {heros.biography.alignment}
              </Typography>

              <Typography>
                • <strong>Occupation(s) :</strong> {heros.work.occupation}
              </Typography>

              <Typography>
                • <strong>Lieu(x) :</strong> {heros.work.base}
              </Typography>

              <Typography>
                • <strong>Affiliation(s) :</strong>{' '}
                {heros.connections['group-affiliation']}
              </Typography>

              <Typography>
                • <strong>Intelligence :</strong>{' '}
                {heros.powerstats.intelligence}
                /100
              </Typography>

              <Typography>
                • <strong>Force :</strong> {heros.powerstats.strength}/100
              </Typography>

              <Typography>
                • <strong>Vitesse :</strong> {heros.powerstats.speed}/100
              </Typography>

              <Typography>
                • <strong>Résistance :</strong> {heros.powerstats.durability}
                /100
              </Typography>

              <Typography>
                • <strong>Pouvoir :</strong> {heros.powerstats.power}/100
              </Typography>

              <Typography>
                • <strong>Combat :</strong> {heros.powerstats.combat}/100
              </Typography>
            </Grid>
          </Grid>
        </div>
      )}

      <ScrollTop />
      <Footer />
    </>
  );
};

export default HerosDetails;
