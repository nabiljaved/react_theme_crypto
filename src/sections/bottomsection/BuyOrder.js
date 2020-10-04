import React from "react";

const BuyOrder = (props) => {
  return (
    <div class="buy-order" style={{ flex: "1", border: "1px solid #1b1738" }}>
      <div class="p-2 d-flex flex-row justify-content-between align-items-center">
        <h6>Buy Orders</h6>
        <p class="mt-2">
          <span class="text-secondary text-sm">Total : </span>{" "}
          <span style={{ fontSize: "12px" }}> 83434.45</span>{" "}
          <span class="ml-2" style={{ fontSize: "12px" }}>
            ETH
          </span>
        </p>
      </div>

      <div id="table">
        <div className="t-head">
          <div className="rows-header">
            <li class="cell-header">Rate PLN</li>
            <li class="cell-header">Amount ETH</li>
            <li class="cell-header">Price PLN</li>
          </div>
          <div className="rows">
            <li class="cell text-success">Rate PLN</li>
            <li class="cell">Amount ETH</li>
            <li class="cell">Price PLN</li>
            <li class="cell">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
          </div>
          <div className="rows">
            <li class="cell text-success">Rate PLN</li>
            <li class="cell">Amount ETH</li>
            <li class="cell">Price PLN</li>
            <li class="cell">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
          </div>
          <div className="rows">
            <li class="cell text-success">Rate PLN</li>
            <li class="cell">Amount ETH</li>
            <li class="cell">Price PLN</li>
            <li class="cell">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
          </div>
          <div className="rows">
            <li class="cell text-success">Rate PLN</li>
            <li class="cell">Amount ETH</li>
            <li class="cell">Price PLN</li>
            <li class="cell">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
          </div>
          <div className="rows">
            <li class="cell text-success">Rate PLN</li>
            <li class="cell">Amount ETH</li>
            <li class="cell">Price PLN</li>
            <li class="cell">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
          </div>
          <div className="rows">
            <li class="cell text-success">Rate PLN</li>
            <li class="cell">Amount ETH</li>
            <li class="cell">Price PLN</li>
            <li class="cell">
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyOrder;
