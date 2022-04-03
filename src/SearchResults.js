import moment from "moment";
import React from "react";
import Table from "./table";
const SearchResults = props => {
  console.log("from console's", props.guest);

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
          <>
            <Table
              id={gst.id}
              title={gst.title}
              firstName={gst.firstName}
              surname={gst.surname}
              email={gst.email}
              roomId={gst.roomId}
              checkInDate={gst.checkInDate}
              checkOutDate={gst.checkOutDate}
              daysReserved={moment(gst.checkOutDate).diff(
                moment(gst.checkInDate),
                "days"
              )}
            />
          </>
        ))}
      </tbody>
    </table>
  );
};

export default SearchResults;
