import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import BackgroundVid from '../img/vid1_racemaker.mp4';


export default function Home() {
  return (
    <Container maxWidth={false} disableGutters={true} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <video className='videoTag' autoPlay loop muted>
        <source src={BackgroundVid} type='video/mp4' />
      </video>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: 200, borderTopColor: 'transparent'}}>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Crea o elige tu pista!
        </Typography>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Corre!!
        </Typography>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Mejora tu pista!
        </Typography>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Mejora tus tiempos!
        </Typography>
      </Box>
      <Box sx={{borderTop: 100, borderTopColor: 'transparent'}}>
        <ul className='ready'>
          <Button color="inherit" variant='contained' href="/signup" size='large'>
            Play Race Maker
          </Button>
        </ul>
      </Box>
    </Container>

  );
}