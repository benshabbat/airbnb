import React from 'react'

const Booking = ({place}) => {
  return (
    <div className="bg-gray-100 shadow p-4 rounded-2xl my-4">
          <div className="text-center text-xl">
            Price:${place?.price} / per night
          </div>
          <div className="border rounded-2xl mt-4">
            <div className="flex">
              <div className="py-3 px-4">
                <label>Check In:</label>
                <input type="date" />
              </div>
              <div className="py-3 px-4 border-l">
                <label>Check Out:</label>
                <input type="date" />
              </div>
            </div>
            <div className="py-3 px-4 border-t">
              <label>Number Of Guests:</label>
              <input type="number" />
            </div>
          </div>
          <button className="primary">Booking</button>
        </div>
  )
}

export default Booking