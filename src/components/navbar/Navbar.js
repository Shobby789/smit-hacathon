// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {});
  return (
    <div>
      <nav>
        <h2>Online Store Saylani</h2>
        <ul>
          <li>
            <Link to="/home">HOME</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
          <li>
            <Link to="/account">Profile</Link>
          </li>
        </ul>
      </nav>
      {/* <Outlet /> */}
    </div>
  );
}
