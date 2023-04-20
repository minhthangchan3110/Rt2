import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";


import HomePage from "./Components/HomePage";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/home" component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;