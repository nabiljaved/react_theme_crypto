import React from "react";

const Graph = (props) => {
  return (
    <div className="section-graph">
      <div className="section-gaph-top">
        <div className="graph-section-circle-icons ">
          <i className="fas fa-user" style={{ color: "#444061" }}></i>
        </div>

        <div className="graph-section-list-dates">
          <ul className="graph-section-list-dates-items">
            <li>1h</li>
            <li>3h</li>
            <li style={{ background: "grey", borderRadius: "30px" }}>1d</li>
            <li>7d</li>
            <li>1m</li>
            <li>All</li>
          </ul>
        </div>

        <div className="graph-section-forex-index">
          <ul className="graph-section-forex-index-items">
            <li>open : 2456.45</li>
            <li>Height : 3456</li>
            <li>Low : 18765</li>
            <li>Close : 14567.0</li>
          </ul>
        </div>

        <div className="graph-section-circle-icons hide-graph-icons">
          <i className="fas fa-arrow-left" style={{ color: "#444061" }}></i>
        </div>

        <div className="graph-section-circle-icons ml-2 hide-graph-icons">
          <i className="fas fa-arrow-right" style={{ color: "#444061" }}></i>
        </div>

        <div className="graph-section-circle-icons ml-2 hide-graph-icons">
          <i className="fas fa-plus" style={{ color: "#444061" }}></i>
        </div>
      </div>
      <hr class="solid" />
      <div className="section-gaph-middle">
        <div className="section-gaph-middle-graph-image"></div>
      </div>
    </div>
  );
};

export default Graph;
