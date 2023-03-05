import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import axios from "axios"
axios.defaults.baseURL="http://localhost:8080"

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
