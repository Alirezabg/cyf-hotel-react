import moment from "moment";
import React, { useState } from "react";
const SearchResults = props => {
  console.log("from console's", props.guest);
  const [rowColor, setRowColor] = useState(false);
  function highlightRow() {
    setRowColor(!rowColor);
  }

  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Title</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th>
          <th scope="col">Email</th>
          <th scope="col">Room ID</th>
          <th scope="col">Check-in Date</th>
          <th scope="col">Check-out Date</th>
          <th scope="col">numberOfNights</th>
        </tr>
      </thead>
      <tbody>
        {props.guest.map(gst => (
          <tr
            key={gst.id}
            className={"highlighted"}
            // className={rowColor ? "highlighted" : null}
            onClick={highlightRow}
          >
            <td>{gst.id}</td>
            <td>{gst.title}</td>
            <td>{gst.firstName}</td>
            <td>{gst.surname}</td>
            <td>{gst.email}</td>
            <td>{gst.roomId}</td>
            <td>{gst.checkInDate}</td>
            <td>{gst.checkOutDate}</td>
            <td>
              {moment(gst.checkOutDate).diff(moment(gst.checkInDate), "days")}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
