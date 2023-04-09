import React from 'react'
import { useParams } from "react-router-dom";
const Booking = () => {
  const { action } = useParams();
  return (
    <div>Booking : {action}</div>
  )
}

export default Booking