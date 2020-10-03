import React from "react";
import PropTypes from "prop-types";
import Header from "../../sections/topsection/Header";
import Leftdashboard from "../layout/Leftdashboard";
import Rightdashboard from "../layout/Rightdashborad";

const Leftsection = () => {
  return (
    <div className="main-container-main">
      <Leftdashboard />
      <Rightdashboard />
    </div>
  );
};

export default Leftsection;
