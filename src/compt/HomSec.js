import React, { useState } from 'react';
import { Menu, Close, SportsEsports } from '@mui/icons-material';
import { Button } from '@mui/material';
import './HomSec.css'

function HomeSection({
    lightBg, topline, lightTxt, lightTxtDesc, headline, description, img, alt, imgStart
}) {
  return (
    <>
      <div className={lightBg ? 'home_home-section' : 'home_home-section_dark'}>
        <div className='container '>
          <div className='row home_home-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
            <div className='colm'>
              <div className='home_text-wrap'>
                <div className='top-line'>{topline}</div>
                <h1 className={lightTxt ? 'heading' : 'heading-dark'}>{headline}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection