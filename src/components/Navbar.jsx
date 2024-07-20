import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [date, setDate] = useState(new Date().toDateString());
  return (
    <nav className="shadow-sm border-[#333] bg-gray-900 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-xl sm:text-2xl font-bold">
          Dr460nized OS
        </Link>
        <div className="flex justify-center items-center space-x-5 sm:space-x-5">
          <i
            style={{ fontSize: "1.35rem" }}
            className="ri-wifi-fill"
            title="Connected to AVI-001"
          ></i>
          <i
            style={{ fontSize: "1.35rem" }}
            className="ri-battery-fill"
            title="Battery: 95 percent"
          ></i>
          <h1 className="sm:block hidden text-lg">
            {date.slice(0, date.lastIndexOf(" "))}
          </h1>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, title }) => (
  <Link
    to={to.toLowerCase()} // Assuming your routes follow the same pattern
    className="text-white hover:text-gray-300"
  >
    {title}
  </Link>
);

export default Navbar;
