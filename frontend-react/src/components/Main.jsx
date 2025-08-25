import React from "react";
import Button from "./Button";

const Main = () => {
  return (
    <>
      
      <div className="container">
        <div className="p-5 text-center bg-light-dark rounded">
          <h1 className="text-light">Stock Prediction Portal</h1>
          <p className="text-light lead">
            A Stock Prediction Application is a software tool that uses
            historical market data, statistical models, and machine learning
            techniques to analyze stock trends and forecast future prices. It
            helps investors and traders make informed decisions by providing
            insights into market movements, risk analysis, and potential
            investment opportunities in real time.
          </p>
          <Button text="Login" class="btn btn-outline-info" />
        </div>
      </div>
      
    </>
  );
};

export default Main;
