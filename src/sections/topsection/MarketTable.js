import React from "react";

const MarketTable = (props) => {
  return (
    <div className="market-table">
      <div className="card card-items text-white" style={{ width: "18rem" }}>
        <div className="card-body">
          <p class="small">Markets : ETH / PLN</p>

          <div class="d-flex flex-row  justify-content-between align-items-center">
            <input
              type="text"
              id="myInput"
              title="Type in a name"
              placeholder="search..."
            />
            <div>
              <ul className="d-flex flex-row justify-content-between align-items-center">
                <li className="input-right-active ml-2">PUN</li>
                <li className="input--other-li">EUR</li>
                <li className="input--other-li">USD</li>
                <li className="input--other-li">BTC</li>
              </ul>
            </div>
          </div>

          <table class="card-table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Change</th>
              </tr>
            </thead>
            <tbody>
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
                <td>BTC</td>
                <td>2.489464</td>
                <td class="text-success">+ 12.345</td>
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
                <td>ETH</td>
                <td>5.489464</td>
                <td class="text-success">+ 11.345</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td>DASH</td>
                <td>1.344343</td>
                <td class="text-success">+ 8.345</td>
              </tr>
              <tr>
                <th scope="row">
                  <a href="http://www.nabeeprofile.cf">
                    <img
                      src="https://p7.hiclipart.com/preview/649/576/1018/yellow-computer-icons-ball-clip-art-yellow-ball-goalkeeper.jpg"
                      alt="logo"
                      className="table-images"
                    />
                  </a>
                </th>
                <td>LSK</td>
                <td>3.344343</td>
                <td class="text-success">+ 3.345</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MarketTable;
