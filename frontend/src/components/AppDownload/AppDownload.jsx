import React from 'react'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className='app-download m-auto mt-24 text-[3vw] text-center font-medium ' >
      <p>For better experience download <br/> Tomato app </p>
      <div className="app-download-platforms flex justify-center gap-3 mt-10 ">
        <img src={assets.play_store} alt="" className=' w-[30vw] max-w-44 cursor-pointer' />
        <img src={assets.app_store} alt="" className=' w-[30vw] max-w-44 cursor-pointer' />
      </div>
    </div>
  )
}

export default AppDownload
