import React from "react";

const LatestTransaction = (props) => {
  return (
    <div className="market-table">
      <div className="card card-items text-white" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5>Latest Transaction</h5>

          <table class="card-table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Rate</th>
                <th scope="col" class="text-center">
                  Amount ETH
                </th>
                <th scope="col" class="text-center">
                  WHEN
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://image.shutterstock.com/image-vector/red-lottery-billiardpool-ball-snooker-260nw-727766443.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.3456</td>
                <td>29.4567433</td>
                <td class="text-secondary">25 sec</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://previews.123rf.com/images/31moonlight31/31moonlight311609/31moonlight31160900044/64797614-big-transparent-light-blue-sphere-with-shadow-on-transparent-background-transparency-only-in-vector-.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.4663</td>
                <td>29.4567433</td>
                <td class="text-secondary">12 sec</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://image.shutterstock.com/image-vector/red-lottery-billiardpool-ball-snooker-260nw-727766443.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.6753</td>
                <td>29.4567433</td>
                <td class="text-secondary">34 sec</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://previews.123rf.com/images/31moonlight31/31moonlight311609/31moonlight31160900044/64797614-big-transparent-light-blue-sphere-with-shadow-on-transparent-background-transparency-only-in-vector-.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td class="text-success">0.8594</td>
                <td>29.4567433</td>
                <td class="text-secondary">22 sec</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LatestTransaction;
