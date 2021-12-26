import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  console.log("Dashboard loaded");
  const savedData = useSelector((state) => state.saveDataReducer.savedData);
  return (
    <div>
      <h1 className="text-primary text-center">Welcome to dashboard.</h1>
      <div className="container">
        <p className="text-danger">Below are your saved data:- </p>
        {savedData.map((data) => {
          return (
            <li key={Math.random()} className="text-black">
              {data.savedData}
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
