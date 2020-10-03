import React from "react";

const OrderTable = (props) => {
  return (
    <div className="market-table">
      <div className="card card-items text-white" style={{ width: "18rem" }}>
        <div className="card-body">
          <div class="d-flex flex-row  justify-content-between align-items-center">
            <h5 class="mt-2">My Orders</h5>

            <button
              class="btn btn-sm btn-dark"
              style={{ borderRadius: "50px" }}
            >
              View All
            </button>
          </div>

          <table class="card-table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Rate</th>
                <th scope="col" class="text-center">
                  Amount ETH
                </th>
                <th scope="col" class="text-center">
                  Price PLN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://image.shutterstock.com/image-vector/black-clear-ball-on-transparent-260nw-1044025453.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.3456</td>
                <td>29.4567433</td>
                <td>2.3453</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://i7.pngguru.com/preview/224/665/242/black-and-white-grey-pearl-png-thumbnail.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.4663</td>
                <td>29.4567433</td>
                <td>2.3453</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://image.shutterstock.com/image-vector/black-clear-ball-on-transparent-260nw-1044025453.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.6753</td>
                <td>29.4567433</td>
                <td>2.3453</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://i7.pngguru.com/preview/224/665/242/black-and-white-grey-pearl-png-thumbnail.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.8594</td>
                <td>29.4567433</td>
                <td>2.3453</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderTable;
