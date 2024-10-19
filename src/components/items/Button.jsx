import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({ width, url, text, onClick }) => {
  return (
    <Link to={url ? url : ''} className='button' style={{width: width}} onClick={onClick ? onClick : null}>{text}</Link>
  )
}

export default Button