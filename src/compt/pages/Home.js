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
import BackgroundVid from '../img/noot_noot.mp4';


export default function Home() {
  return (
    <Container maxWidth={false} disableGutters={true} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <video className='videoTag' autoPlay loop muted>
        <source src={BackgroundVid} type='video/mp4' />
      </video>
      <Typography variant="h6" m={2} sx={{ borderTop: 50, borderTopColor: 'transparent' }}>
        EL JUEGO DONDE PUEDES CREAR TU PROPIA PISTA
      </Typography>
      <ul className='ready'>
        <Button color="inherit" variant='contained' href="/signup">
          Play Racing Car
        </Button>
      </ul>
    </Container>

  );
}