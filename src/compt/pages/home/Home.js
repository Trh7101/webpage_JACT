import React from 'react'
import HomeSection from '../../HomSec'
import {homeObjOne} from './Data'
function Home() {
  return (
    <>
      <HomeSection {...homeObjOne}/>
    </>
  )
}

export default Home