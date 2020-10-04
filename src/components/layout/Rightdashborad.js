import React from "react";
import Header from "../../sections/topsection/Header";
import Graph from "../../sections/topsection/Graph";
import Tabs from "../../sections/bottomsection/Tabs";

const Rightdashborad = (props) => {
  return (
    <div className="Right-dashboard">
      <Header />
      <Graph />
      <Tabs />
    </div>
  );
};

export default Rightdashborad;
