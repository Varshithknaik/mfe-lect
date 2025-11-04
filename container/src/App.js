import React from "react";
import { BrowserRouter } from "react-router-dom";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/Header";
import AuthApp from "./components/AuthApp";

export default () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <MarketingApp />
        <AuthApp />
      </div>
    </BrowserRouter>
  );
};
