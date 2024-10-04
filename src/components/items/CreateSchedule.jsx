import React from 'react'
import { Link } from 'react-router-dom'

const CreateSchedule = ({ data }) => {
  return (
    <Link to={`/planning/${data.title}`} id='createSchedule'>일정만들기</Link>
  )
}

export default CreateSchedule