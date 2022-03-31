import React from "react";
const RestaurantButton = props => {
  return (
    <li>
      Pizzas: {props.orders}{" "}
      <button onClick={props.orderOne} className="btn btn-primary">
        Add
      </button>
    </li>
  );
};

export default RestaurantButton;
