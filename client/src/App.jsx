import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import Booking from "./components/Booking";
import Places from "./components/Places";

import axios from "axios";
axios.defaults.baseURL = "http://127.0.0.1:8080/api";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/account/:sub?" element={<Account />} /> */}
          <Route path="/account/:sub?/:action?" element={<Account />} />
          {/* 
            <Route path="bookings" element={<Booking />} />
            <Route path="places" element={<Places />} />
          </Route> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
