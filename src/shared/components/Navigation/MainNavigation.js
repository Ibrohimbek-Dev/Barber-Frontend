import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./MainNavigation.css";
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

import logo from "./navLogoImages/logo.png";
import logoYellow from "./navLogoImages/logo-hover.png";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);
  const [logoHover, setLogoHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <React.Fragment>
      {drawerIsOpen && isMobile && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen}>
        <nav className="main-navigation__drawer-nav">
          <NavLinks onLinkClick={closeDrawerHandler} />
        </nav>
      </SideDrawer>

      <MainHeader>
        <Navbar.Brand
          as={NavLink}
          to="/home"
          className="navbar-logo"
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
        >
          <div>USTA</div>
          <img src={logoHover ? logoYellow : logo} alt="Logo" />
        </Navbar.Brand>
        <button
          className="main-navigation__menu-btn"
          onClick={openDrawerHandler}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
