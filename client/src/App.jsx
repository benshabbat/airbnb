import React from "react";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Account from "./pages/Account";
import axios from "axios";
import Home from "./pages/Home";
import PlacePage from "./pages/PlacePage";

axios.defaults.baseURL = "http://127.0.0.1:8080/api";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/place/:id" element={<PlacePage />} />
          <Route path="/account/:sub?/:action?" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
