// src/pages/Dashboard.jsx
import React from "react";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
// import OrderSummary from "../components/OrderSummary";

const Dashboard = () => {
  return (
    <div className="flex flex-1 p-6">
      
      {/* Dashboard Main Section */}
      <div className="flex-1 flex flex-col pr-4">
        <Header />
        <MainContent />
      </div>

      {/* Right Order Summary */}
      {/* <OrderSummary /> */}
    </div>
  );
};

export default Dashboard;
