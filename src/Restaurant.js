import React, { useState } from "react";
import RestaurantButton from "./Components/RestaurantButton";
const Restaurant = () => {
  function orderOne() {
    return setOrders(pizzaOrder => pizzaOrder + 1);
  }
  const [orders, setOrders] = useState(0);
  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <RestaurantButton orderOne={orderOne} orders={orders} />
      </ul>
    </div>
  );
};

export default Restaurant;
