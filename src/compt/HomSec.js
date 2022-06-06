import React from 'react';
import { Button } from '@mui/material';
import './HomSec.css'

function HomeSection({
    lightBg, topline, lightTxt, lightTxtDesc, headline, description, img, alt, imgStart, bttn_label
}) {
  return (
    <>
      <div className={lightBg ? 'home_home-section' : 'home_home-section_dark'}>
        <div className='container '>
          <div className='row home_home-row' style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
            <div className='col'>
              <div className='home_text-wrap'>
                <div className='top-line'>{topline}</div>
                <h1 className={lightTxt ? 'heading' : 'heading-dark'}>{headline}</h1>
                <p className={lightTxtDesc ? 'home_sub' : 'home_sub_dark'}>{description}</p>
                <Button href='/playNow'>{bttn_label}</Button>
              </div>
            </div>
            <div className='col'>
              <div className='home_img-wrap'>
                <img src={img} alt={alt} className='home_home-img'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSection