import * as React from 'react';
import Cara1 from "../img/Programador1.jpeg"
import Cara2 from '../img/Programador2.jpeg'
import Cara3 from "../img/Programador3.jpeg"
import Cara4 from "../img/Programador4.webp"
import TextoHead from "../img/Head.png"
import play1 from '../img/1P.png'
import play2 from '../img/2P.png'
import play3 from '../img/3P.png'
import play4 from '../img/4P.png' 
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function AboutUs() {
  return (
    <Container maxWidth={false} disableGutters={true}>
      <Grid sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'stretch',  bgcolor: 'rgb(14,25,58)' }}>
        
        <Grid  sx={{ display: { xs: 'none', md: 'flex' }, flexDirection: 'column', alignItems: 'flex-end',  bgcolor: 'transparent' }}>
          <Box
            component="img"
            sx={{ m: 2, height: 80, width: 80, maxHeight: { xs: 0, md: 1000 }, maxWidth: { xs: 0, md: 1000 } }}
            alt="Player Select."
            src={play1}/>
          <Box
            component="img"
            sx={{ m: 2, height: 80, width: 80, maxHeight: { xs: 0, md: 1000 }, maxWidth: { xs: 0, md: 1000 } }}
            alt="Player Select."
            src={play2}/>
          <Box
            component="img"
            sx={{ m: 2, height: 80, width: 80, maxHeight: { xs: 0, md: 1000 }, maxWidth: { xs: 0, md: 1000 } }}
            alt="Player Select."
            src={play3}/>
          <Box
            component="img"
            sx={{ m: 2, height: 80, width: 80, maxHeight: { xs: 0, md: 1000 }, maxWidth: { xs: 0, md: 1000 } }}
            alt="Player Select."
            src={play4}/>
        </Grid>

        <Grid sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  bgcolor: 'transparent'}}>
          <Typography component="abouttext" variant="h8" m={2} alignSelf='flex-start' sx={{ writingMode: "vertical-rl",  fontFamily: 'PublicPixel', color: "rgb(255,255,255)"}}>
            Salvador M.
          </Typography>
          <Typography component="abouttext" variant="h8" m={2} alignSelf='flex-start' sx={{ writingMode: "vertical-rl",  fontFamily: 'PublicPixel', color: "rgb(255,255,255)"}}>
            Alex S.
          </Typography>
          <Typography component="abouttext" variant="h8" m={2} alignSelf='flex-start' sx={{ writingMode: "vertical-rl",  fontFamily: 'PublicPixel', color: "rgb(255,255,255)"}}>
            Tonatiuh R.
          </Typography>
          <Typography component="abouttext" variant="h8" m={2} alignSelf='flex-start' sx={{ writingMode: "vertical-rl",  fontFamily: 'PublicPixel', color: "rgb(255,255,255)"}}>
            Jacobo S.
          </Typography>
        </Grid>

        <Grid  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',  bgcolor: 'transparent'}}>
          <Box
            component="img"
            sx={{ m: 2, maxHeight: { xs: 275, md: 250 }, maxWidth: { xs: 300, md: 370 } }}
            alt="Player Select."
            src={TextoHead}/>

          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            m: 1, maxWidth: 800, backgroundColor: 'rgb(236,182,29)',
          }}>
            <Box
              component="img"
              sx={{ m: 2, maxHeight: { xs: 275, md: 233 }, maxWidth: { xs: 200, md: 185 } }}
              alt="Programador más chico."
              src={Cara1}/>
            <Typography component="abouttext" variant="body2" m={2} alignSelf='flex-start' fontFamily={'PublicPixel'}>
              Student at Tecnológico de Monterrey. I consider myself very curious. I like to push my creative skills creating Pixel-art and music. Passionate about technological advancements, music and entertainment, I'm interested on AI, smart processes and optimization.
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            m: 1, maxWidth: 800, backgroundColor: 'rgb(55,148,110)',
          }}>
            <Typography component="abouttext" variant="body2" m={2} alignSelf='flex-start' fontFamily={'PublicPixel'}>
              Me di de baja. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a sem odio. Vestibulum scelerisque arcu consectetur nisi molestie, eget ullamcorper erat ullamcorper. Donec cursus, nunc vel venenatis viverra, enim neque sagittis metus, in facilisis elit nulla sed lorem. Ut egestas, dolor ac congue faucibus, mi turpis pulvinar ligula, eu tincidunt magna massa in enim.
            </Typography>
            <Box
              component="img"
              sx={{ m: 2, maxHeight: { xs: 275, md: 233 }, maxWidth: { xs: 200, md: 185 } }}
              alt="Programador más mamado."
              src={Cara2}/>
          </Box>

          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            m: 1, maxWidth: 800, backgroundColor: 'rgb(172,50,50)',
          }}>
            <Box
              component="img"
              sx={{ m: 2, maxHeight: { xs: 275, md: 500 }, maxWidth: { xs: 200, md: 185 } }}
              alt="Programador más otako."
              src={Cara3}/>
            <Typography component="abouttext" variant="body2" m={2} alignSelf='flex-start' fontFamily={'PublicPixel'}>
              Student at Tecnológico de Monterrey. I consider myself very curious. I use to get inspired by playing games and listening to music. Passionate about technological advancements, music and entertainment, I'm interested on AI and Security.      Mr. Milanesa (2022). Linkedin. https://www.linkedin.com/in/salvador-federico-milanés-braniff-160631238/
            </Typography>
          </Box>

          <Box sx={{
            display: 'flex', flexDirection: 'row', alignItems: 'center',
            m: 1, maxWidth: 800, backgroundColor: 'rgb(118,66,138)',
          }}>
            <Box
              component="img"
              sx={{ m: 2, maxHeight: { xs: 275, md: 233 }, maxWidth: { xs: 200, md: 185 } }}
              alt="Programador más hardcore."
              src={Cara4}/>
            <Typography component="abouttext" variant="body2" m={2} alignSelf='flex-start' fontFamily={'PublicPixel'}>
              Student at Tecnológico de Monterrey. Right now doing an intership at Microsoft. Wish me luck!!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}