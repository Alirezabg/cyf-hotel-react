import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = props => {
  const [bookings, setBookings] = useState([]);
  const [filteredBookings, setFilteredBookings] = useState(bookings);

  const search = searchVal => {
    setFilteredBookings(
      bookings.filter(
        guest =>
          guest.firstName.toLowerCase().includes(searchVal.toLowerCase()) ||
          guest.surname.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  };
  useEffect(() => {
    fetch(props.bookingData)
      .then(res => res.json())
      .then(data => {
        setBookings(data);
        setFilteredBookings(data);
      });
  }, [props]);
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults guest={filteredBookings} />
      </div>
    </div>
  );
};

export default Bookings;
