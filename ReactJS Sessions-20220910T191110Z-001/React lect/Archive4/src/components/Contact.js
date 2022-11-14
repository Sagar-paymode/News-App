import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  let { userid } = useParams();

  console.log(userid)

  return (
    <div>Contact</div>
  )
}

export default Contact