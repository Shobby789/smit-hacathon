import { useState, useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Home from "./components/home/Home";
import AddItems from "./components/addItems/AddItems";
import SignIn from "./components/signin/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/additem" element={<AddItems />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
