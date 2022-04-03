import React, { useState } from "react";
import Heading from "./Heading";
import TouristInfo from "./Components/TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Components/Footer";
import fakeBookings from "./data/fakeBookings.json";

import Restaurant from "./Restaurant";
const App = () => {
  const [bookings, setBookings] = useState(fakeBookings);

  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];

  return (
    <div className="App">
      <Heading />
      <TouristInfo />
      <Bookings bookings={bookings} setBookings={setBookings} />

      <Restaurant />
      <Footer address={footerData} />
    </div>
  );
};

export default App;
