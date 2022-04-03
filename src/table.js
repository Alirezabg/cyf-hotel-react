import React, { useState } from "react";
const Table = props => {
  const [rowColor, setRowColor] = useState(false);
  function highlightRow(e) {
    setRowColor(!rowColor);
  }
  return (
    <>
      <tr className={rowColor ? "highlighted" : null} onClick={highlightRow}>
        <td>{props.id}</td>
        <td>{props.title}</td>
        <td>{props.firstName}</td>
        <td>{props.surname}</td>
        <td>{props.email}</td>
        <td>{props.roomId}</td>
        <td>{props.checkInDate}</td>
        <td>{props.checkOutDate}</td>
        <td />
        {props.daysReserved}
      </tr>
    </>
  );
};

export default Table;
