import React, { useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import './Navigation.css';
import HomeB from './BUTTONS/Home-export.png';
import AboutB from './BUTTONS/About-export.png';
import PlayB from './BUTTONS/Play-export.png';
import burger from './BUTTONS/Burger-export.png';
import close from './BUTTONS/X-export.png';
import Logo from './BUTTONS/Logo2.png';


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
        <Button href='/' disableElevation>
          <img src={Logo} width="232.5" height="40.5" />
        </Button>
        <div className='navigation-container.container'>
          <Box sx={{ display: { xs: 'block', md: 'none' } }} onClick={handleClick} >
            {click ?
              <img src={close} height='42.5' width='42.5'/> : <img src={burger} height='42.5' width='42.5'/>
            }
          </Box>
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