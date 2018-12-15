import React, { Component } from 'react';
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Search />
    </div>
  </Router>
);

export default App;
