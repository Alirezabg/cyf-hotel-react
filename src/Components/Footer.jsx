import React from "react";
const Footer = props => {
  return (
    <>
      {props.address.map(add => (
        <p>{add}</p>
      ))}
    </>
  );
};

export default Footer;
