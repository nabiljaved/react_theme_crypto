import React from "react";
import PropTypes from "prop-types";
import MarketTable from "../../sections/topsection/MarketTable";
import OrderTable from "../../sections/topsection/OrderTable";
import LatestTransaction from "../../sections/topsection/LatestTransaction";

const Leftdashboard = () => {
  return (
    <div className="left-dashboard">
      <MarketTable />
      <OrderTable />
      <LatestTransaction />
    </div>
  );
};

export default Leftdashboard;
