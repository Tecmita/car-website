import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import logo from "../assets/Altera.svg";

const navItems = [
  { name: "HOME", path: "/", id: 1 },
  {
    name: "ABOUT",
    path: "/",
    id: 2,
  },
  {
    name: "POPULAR",
    path: "/",
    id: 3,
  },
  {
    name: "FEATURED",
    path: "/",
    id: 4,
  },
];
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-[#0A0A0B]">
        <nav>
          <div className="flex justify-between p-4 mx-20">
            <div>
              <img alt="" src={logo} />
            </div>
            {/* desktop menu */}
            <ul className="hidden md:flex gap-8 text-white">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a href={item.path}>{item.name}</a>
                </li>
              ))}
            </ul>
            {/* mobile menu */}
            <div
              className={`md:hidden text-white ${isOpen ? "block" : "hidden"}`}
            >
              <ul>
                {navItems.map((item) => (
                  <li key={item.id}>
                    <a href={item.path}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
            <button className="md:hidden text-white" onClick={toggleMenu}>
              <FaBars />
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
