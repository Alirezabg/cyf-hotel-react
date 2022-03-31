import React from "react";
import Heading from "./Heading";
import TouristInfo from "./Components/TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Components/Footer";
import SearchResults from "./SearchResults";
import fakeBookings from "./data/fakeBookings.json";
import Restaurant from "./Restaurant";
const App = () => {
  const footerData = [
    "123 Fake Street, London, E1 4UD",
    "hello@fakehotel.com",
    "0123 456789"
  ];
  const guestData = fakeBookings;
  return (
    <div className="App">
      <Heading />
      <TouristInfo />
      <Bookings />
      <SearchResults guest={guestData} />
      <Restaurant />
      <Footer address={footerData} />
    </div>
  );
};

export default App;
