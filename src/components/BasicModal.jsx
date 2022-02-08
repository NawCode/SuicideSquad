import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ hero }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="containerModal">
      <Fab
        className="basicModale"
        size="small"
        color="primary"
        aria-label="add"
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Button />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="Modal"
      >
        <Box sx={style} onClick={handleClose}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={4}>
              <img src={hero.image.url} alt="" style={{ width: '100%' }} />
            </Grid>
            <Grid item xs={12} sm={6} lg={8}>
              <Typography variant="h3" component="h2">
                {hero.name}
              </Typography>

              <Typography>
                • <strong>Nom complet :</strong> {hero.biography['full-name']}
              </Typography>

              <Typography>
                • <strong>Alter Ego(s) :</strong> {hero.biography['alter-ego']}
              </Typography>

              <Typography>
                • <strong>Alias :</strong> {hero.biography.aliases}
              </Typography>

              <Typography>
                • <strong>Lieu de naissance :</strong>{' '}
                {hero.biography['place-of-birth']}
              </Typography>

              <Typography>
                • <strong>Première apparition :</strong>{' '}
                {hero.biography['first-appearance']}
              </Typography>

              <Typography>
                • <strong>Publieur :</strong> {hero.biography.publisher}
              </Typography>

              <Typography>
                • <strong>Alignement :</strong> {hero.biography.alignment}
              </Typography>

              <Typography>
                • <strong>Occupation(s) :</strong> {hero.work.occupation}
              </Typography>

              <Typography>
                • <strong>Lieu(x) :</strong> {hero.work.base}
              </Typography>

              <Typography>
                • <strong>Affiliation(s) :</strong>{' '}
                {hero.connections['group-affiliation']}
              </Typography>

              <Typography>
                • <strong>Intelligence :</strong> {hero.powerstats.intelligence}
                /100
              </Typography>

              <Typography>
                • <strong>Force :</strong> {hero.powerstats.strength}/100
              </Typography>

              <Typography>
                • <strong>Vitesse :</strong> {hero.powerstats.speed}/100
              </Typography>

              <Typography>
                • <strong>Résistance :</strong> {hero.powerstats.durability}/100
              </Typography>

              <Typography>
                • <strong>Pouvoir :</strong> {hero.powerstats.power}/100
              </Typography>

              <Typography>
                • <strong>Combat :</strong> {hero.powerstats.combat}/100
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
