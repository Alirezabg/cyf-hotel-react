import React from "react";
import Heading from "./Heading";
import TouristInfo from "./Components/TouristInfoCards";
import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <TouristInfo />
      <Heading />
      <Bookings />
    </div>
  );
};

export default App;
