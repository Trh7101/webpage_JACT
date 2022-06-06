import * as React from 'react';
import Cara1 from "../img/Programador1.jpeg"
import Cara2 from '../img/Programador2.jpeg'
import Cara3 from "../img/Programador3.jpeg"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export default function AboutUs() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Box sx={{ bgcolor: '#cfe8fc', height: '88.9616vh' }}>
        <Box
          sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 0,
          minWidth: { md: 350 },
          backgroundColor: 'primary.dark',
          height: 300,
          }}>
            <Box
              component="img"
              sx={{
              m: 2,
              height: 270,
              width: 350,
              maxHeight: { xs: 350, md: 233 },
              maxWidth: { xs: 233, md: 185 },
              }}
              alt="Programador más chico."
              src={Cara1}/>
              Soy Chava el chavo que no puede con las chavas, pero se programar
        </Box>
        <Box
          sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 0,
          minWidth: { md: 350 },
          backgroundColor: 'primary.dark',
          height: 300,
          }}>
            <Box
              component="img"
              sx={{
              m: 2,
              height: 270,
              width: 350,
              maxHeight: { xs: 350, md: 233 },
              maxWidth: { xs: 233, md: 185 },
              }}
              alt="Programador más mamado."
              src={Cara2}/>
            Hola me gusta la comida y programar, tambien entreno un chingo. PD. Me di de baja de mi materia
        </Box>
        <Box
          sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center', md: 'flex-start' },
          m: 0,
          minWidth: { md: 350 },
          backgroundColor: 'primary.dark',
          height: 300,
          }}>
            <Box
              component="img"
              sx={{
              m: 2,
              height: 270,
              width: 350,
              maxHeight: { xs: 350, md: 233 },
              maxWidth: { xs: 233, md: 185 },
              }}
              alt="Programador más otako."
              src={Cara3}/>
              Hola yo no se programar pero esta chido, me gusta la miku
        </Box>
      </Box>
    </Container>
  );
}