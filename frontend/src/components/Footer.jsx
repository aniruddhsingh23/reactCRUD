import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      Made with React by Aniruddh
      <Link to="/">
      <button>Home?</button></Link>
    </div>
  )
}

export default Footer
