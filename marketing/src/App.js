import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default () => {
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <BrowserRouter>
          <Routes>
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </StyledEngineProvider>
    </div>
  );
};
