import React, { useState } from "react";

const SeatBookingSystem = () => {
  const totalSeats = 10;
  const [availableSeats, setAvailableSeats] = useState(
    Array.from({ length: totalSeats }, (_, index) => index + 1)
  );
  const [bookedSeats, setBookedSeats] = useState([]);

  const handleSeatClick = (seatNumber) => {
    if (availableSeats.includes(seatNumber)) {
      setAvailableSeats(availableSeats.filter((seat) => seat !== seatNumber));
      setBookedSeats([...bookedSeats, seatNumber]);
    } else if (bookedSeats.includes(seatNumber)) {
      setBookedSeats(bookedSeats.filter((seat) => seat !== seatNumber));
      setAvailableSeats([...availableSeats, seatNumber]);
    }
  };

  return (
    <div>
      <h2>Seat Booking System</h2>
      <div>
        <h3>Available Seats</h3>
        <div>
          {availableSeats.map((seatNumber) => (
            <button
              key={seatNumber}
              onClick={() => handleSeatClick(seatNumber)}>
              Seat {seatNumber}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h3>Booked Seats</h3>
        <div>
          {bookedSeats.map((seatNumber) => (
            <div key={seatNumber}>Seat {seatNumber}</div>
          ))}
        </div>
      </div>
      <div>
        <h3>Total Booked Seats</h3>
        <div>{bookedSeats.length}</div>
      </div>
    </div>
  );
};

export default SeatBookingSystem;
