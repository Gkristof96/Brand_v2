import React from "react";
import { navbarData } from "../../../data/navbar";
import { Link } from "react-scroll";

const SideMenu = ({ isMenuOpen, handleOpen }) => {
  return (
    <>
      <ul className={`sidemenu ${isMenuOpen && "open"}`} onClick={handleOpen}>
        {navbarData.map((data, i) => (
          <li key={i}>
            <Link
              onClick={handleOpen}
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              to={data.path}
              offset={-60}
            >
              {data.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SideMenu;
