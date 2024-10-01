import React from 'react'
import { MdLocationOn } from "react-icons/md";

const WorldItem = ({ data }) => {
  return (
    <li className='worldItem' key={data.id}>
      <MdLocationOn size={20} color='grey'/>
      <div>
        <p>{data.title}</p>
        <p>{data.desc}</p>
      </div>
    </li>
  )
}

export default WorldItem