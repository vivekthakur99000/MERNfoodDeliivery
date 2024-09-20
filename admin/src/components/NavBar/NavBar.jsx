import React from 'react'
import {assets} from "../../assets/assets.js"

function NavBar() {
  return (
    <div className='navbar flex justify-between items-center py-2 px-[4%] '>
      <img src={assets.logo} alt="" className='logo max-w-[10%]  ' />
      <img src={assets.profile_image} alt="" className='profile w-10 ' />
    </div>
  )
}

export default NavBar
