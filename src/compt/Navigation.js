import React, { useState } from 'react';
import { Menu, Close, SportsEsports } from '@mui/icons-material';
import { Button } from '@mui/material';
import './Navigation.css';
import HomeB from './BUTTONS/Home.png';
import AboutB from './BUTTONS/About.png';
import PlayB from './BUTTONS/Play.png';

function Navigation() {
  const [click, setClick] = useState(false);
  const setButton = useState(true);

  const handleClick = () => setClick(!click);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <div className='navigation'>
        <ul className='nav-logo'>
          <Button href='/' color='inherit' disableElevation>
            <SportsEsports color="inherit" />
              JACT Studio
          </Button>
        </ul>
        <div className='navigation-container.container'>
          <div className='menu-icon' onClick={handleClick} >
            {click ? <Close /> : <Menu />}
          </div>
          <ul className={click ? 'navigation-menu active' : 'navigation-menu'}>
            <Button variant='text' href="/">
              <img src={HomeB} width="92.5" height="42.5" />
            </Button>
            <Button variant='text' href="/landing/AboutUs">
              <img src={AboutB} width="92.5" height="42.5" />
            </Button>
            <Button variant='text' href="/landing/auth">
              <img src={PlayB} width="92.5" height="42.5" />
            </Button>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navigation;