import React from 'react'
import { Link } from 'react-router-dom'

const LinkSiteBtn = (props) => {
  return (
    <Link id='linkSiteBtn' className={props.css} to={props.url}>
      <span>{props.icon}</span>
      <p>{props.site}</p>
    </Link>
  )
}

export default LinkSiteBtn