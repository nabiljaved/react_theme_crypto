import React from "react";
import SellOrder from "./SellOrder";
import BuyOrder from "./BuyOrder";

const OrderLists = (props) => {
  return (
    <div className="bottom-section-order-lists">
      <BuyOrder />
      <SellOrder />
    </div>
  );
};

export default OrderLists;
