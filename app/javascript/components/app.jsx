import React from "react";
import Home from "./Home";
import { Router } from "@reach/router";
import Navbar from "./Navbar";
import Login from "./Login";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Home path="/" />
        <Login path="/login" />
      </Router>
    </>
  );
}
export default App;
