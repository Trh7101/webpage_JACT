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
import BackgroundVid from '../img/PromBackVid.mp4';
import PlayB from './../BUTTONS/Play2-export.png';


export default function Home() {
  return (
    <Container maxWidth={false} disableGutters={true} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <video className='videoTag' autoPlay loop muted>
        <source src={BackgroundVid} type='video/mp4' />
      </video>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderTop: 200, borderTopColor: 'transparent'}}>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Create or select a track!
        </Typography>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Run on it!!
        </Typography>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Improve it!
        </Typography>
        <Typography fontFamily={'PressStart2P'} variant="h6" m={2}>
          Get the best time!
        </Typography>
      </Box>
      <Box sx={{borderTop: 100, borderTopColor: 'transparent'}}>
            <Button variant='text' href="/landing/auth">
              <img src={PlayB} width="185" height="42.5"/>
            </Button>
      </Box>
    </Container>

  );
}