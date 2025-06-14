import React from 'react'
import Llogo from '../assets/logo.png'


function Logo() {
  return (
    <div>
      <img
        src={Llogo}
        alt="Logo"
        className="shadow-lg w-auto h-16 rounded-full"
      />
    </div>
  )
}

export default Logo