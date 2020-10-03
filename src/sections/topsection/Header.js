import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <div className="top-header mt-2">
      <ul className="top-header-items">
        <li className="top-header-item">
          <div class="d-flex flex-row">
            <img
              src="https://image.shutterstock.com/z/stock-vector-office-chair-sign-green-neon-icon-in-the-dark-blurred-lightening-illustration-1524631685.jpg"
              alt="logo"
              className="table-images-header align-self-center mr-2"
            />
            <div class="text-white mx-auto text-center">
              <ul class="d-flex flex-column">
                <li style={{ fontSize: "12px" }}>2.617.000 PLN</li>
                <li style={{ fontSize: "10px" }} class="text-secondary">
                  local trade pice
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li className="top-header-item">
          <div class="d-flex flex-row">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSl7HPiJY_SXk6n6ZSV2h5VpZQqYBZ8wUtdXw&usqp=CAU"
              alt="logo"
              className="table-images-header align-self-center mr-2"
            />
            <div class="text-white mx-auto text-center">
              <ul class="d-flex flex-column">
                <li
                  class="text-success font-weight-bold"
                  style={{ fontSize: "12px" }}
                >
                  2.617.000 PLN
                </li>
                <li class="text-secondary" style={{ fontSize: "10px" }}>
                  Price (24h)
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="top-header-item">
          <div class="d-flex flex-row">
            <img
              src="https://cdn4.vectorstock.com/i/1000x1000/81/83/laptop-mobile-neon-sign-vector-26918183.jpg"
              alt="logo"
              className="table-images-header align-self-center mr-2"
            />
            <div class="text-white mx-auto text-center">
              <ul class="d-flex flex-column">
                <li style={{ fontSize: "12px" }}>6.754537239 ETH</li>
                <li style={{ fontSize: "10px" }} class="text-secondary">
                  volume 24(h)
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="top-header-item">
          <div class="d-flex flex-row">
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
              className="table-images-header align-self-center mr-2"
            />
            <div class="text-white mx-auto text-center">
              <ul class="d-flex flex-column">
                <li style={{ fontSize: "12px" }}>6.4537239 ETH</li>
                <li style={{ fontSize: "10px" }} class="text-secondary">
                  840.234 PLN
                </li>
              </ul>
            </div>
          </div>
        </li>

        <li className="top-header-item">
          <div class="d-flex flex-row">
            <img
              src="data:image/jpeg;base64,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"
              alt="logo"
              className="table-images-verified align-self-center mr-2"
            />
            <div class="text-white mx-auto text-center">
              <ul class="d-flex flex-column">
                <li style={{ fontSize: "12px" }}>Mateuszk Paletic</li>
                <li
                  style={{ fontSize: "10px" }}
                  class="text-success font-weight-bold"
                >
                  VERIFIED
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Header;