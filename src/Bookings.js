import React, { useState } from "react";
import Search from "./Search.js";
import fakeBookings from "./data/fakeBookings.json";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(fakeBookings);
  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults guest={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
