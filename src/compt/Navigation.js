import React, { useState } from 'react';
import { Menu, Close, SportsEsports } from '@mui/icons-material';
import { Button } from '@mui/material';
import './Navigation.css'

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
            <li className='navigation-item'>
              <Button color="inherit" href="/">
                Home
              </Button>
            </li>
            <li className='navigation-item'>
              <Button color="inherit" href="/usAbout">
                About Us
              </Button>
            </li>
            <li className='navigation-item'>
              <Button color="inherit" href="/signup" variant='outlined'>
                Play Race Maker
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navigation;