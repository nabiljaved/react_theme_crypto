import React, { useEffect, Component } from "react";
import "../../components/utils/tabs.css";

class Tabs extends Component {
  render() {
    return (
      <div class="section-bottom-tabs">
        <div class="col-xs-12">
          <nav>
            <div
              class="nav nav-tabs"
              id="nav-tab"
              style={{ background: "#242041", fontSize: "12px" }}
            >
              <a
                class="nav-item nav-link active"
                id="nav-home-tab"
                data-toggle="tab"
                href="#nav-home"
                role="tab"
              >
                MARKET ORDER
              </a>
              <a
                class="nav-item nav-link"
                id="nav-profile-tab"
                data-toggle="tab"
                href="#nav-profile"
                role="tab"
              >
                LIMIT ORDER
              </a>
            </div>
          </nav>
          <div
            class="tab-content py-3 px-3 px-sm-0 mt-3 text-white"
            id="nav-tabContent"
          >
            <div
              class="tab-pane fade show active"
              id="nav-home"
              role="tabpanel"
              aria-labelledby="nav-home-tab"
            >
              <div class="p-2" style={{ width: "30%" }}>
                <div class="d-flex flex-row align-items-center">
                  <div className="graph-section-circle-icons ">
                    <i
                      className="fas fa-bullseye"
                      style={{ color: "white" }}
                    ></i>
                  </div>
                  <p class="mt-3 ml-3">Quick Buy</p>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center p-1">
                <p class="text-secondary" style={{ fontSize: "12px" }}>
                  I want to sell
                </p>

                <p className="quickbuy">6.75545786</p>
                <p class="ml-3">ETH</p>
              </div>

              <div class="d-flex flex-row align-items-center p-1">
                <p class="text-secondary" style={{ fontSize: "12px" }}>
                  I want to Buy
                </p>

                <p className="quickbuy">6.75545786</p>
                <p class="ml-3">PLN</p>
                <button
                  class="ml-5 btn btn-outline-success"
                  style={{
                    borderRadius: "20px",
                    background: "#23eaa5",
                    marginTop: "-15px",
                    width: "150px",
                  }}
                >
                  BUY
                </button>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div class="p-2" style={{ width: "30%" }}>
                <div class="d-flex flex-row align-items-center">
                  <div className="graph-section-circle-icons ">
                    <i className="fas fa-bolt" style={{ color: "white" }}></i>
                  </div>
                  <p class="mt-3 ml-3">Quick Sell</p>
                </div>
              </div>

              <div class="d-flex flex-row align-items-center p-1">
                <p class="text-secondary" style={{ fontSize: "12px" }}>
                  I want to sell
                </p>

                <input
                  type="text"
                  style={{
                    width: "100px",
                    marginLeft: "32px",
                    background: "#1a1736",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                />
                <p class="ml-3">ETH</p>
              </div>

              <div class="d-flex flex-row align-items-center p-1">
                <p class="text-secondary" style={{ fontSize: "12px" }}>
                  I want to Receive
                </p>

                <input
                  type="text"
                  style={{
                    width: "100px",
                    marginLeft: "10px",
                    background: "#1a1736",
                    border: "1px solid black",
                    borderRadius: "10px",
                  }}
                />
                <p class="ml-3">PLN</p>
                <button
                  class="ml-5 btn"
                  style={{
                    borderRadius: "20px",
                    background: "#191536",
                    marginTop: "-15px",
                    width: "150px",
                    color: "white",
                  }}
                >
                  SELL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;
