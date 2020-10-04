import React, { useEffect, Component } from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";

class Tabs extends Component {
  componentDidMount() {
    M.Tabs.init(this.Tabs);
  }

  render() {
    return (
      <div class="section-bottom-tabs">
        <ul
          ref={(Tabs) => {
            this.Tabs = Tabs;
          }}
          id="tabs-swipe-demo"
          className="tabs"
          style={{ display: "flex", backGround: "black" }}
        >
          <li className="tab col s1" style={{ flexBasis: "20%" }}>
            <a href="#test-swipe-1">Test 1</a>
          </li>
          <li className="tab col s1" style={{ flexBasis: "20%" }}>
            <a href="#test-swipe-2">Test 2</a>
          </li>
        </ul>

        <div id="test-swipe-1" className="col s12 blue">
          Test 1
        </div>
        <div id="test-swipe-2" className="col s12 red">
          Test 2
        </div>
      </div>
    );
  }
}

export default Tabs;
