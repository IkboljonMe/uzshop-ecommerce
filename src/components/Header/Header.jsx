import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./header.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import user_icon from "../../assets/images/user-icon.png";

import useAuth from "../../custom-hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import { toast } from "react-toastify";

const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const profileActionsRef = useRef(null);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const stickyHeaderFunc = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  const logout = () => {
    signOut(auth).then(() => toast.success("Logged out"), navigate("/home"));
    profileActionsToggle().catch((error) => {
      toast.error(error.message);
    });
  };
  useEffect(() => {
    stickyHeaderFunc();
    return () => window.removeEventListener("scroll", stickyHeaderFunc);
  });
  const menuToggle = () => {
    menuRef.current.classList.toggle("active__menu");
  };
  const profileActionsToggle = () => {
    profileActionsRef.current.classList.toggle("show__profileActions");
  };

  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>UzShop</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__link.map((item, index) => (
                  <li key={index} className="nav__item">
                    <NavLink
                      to={item.path}
                      className={(navClass) =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i class="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={navigateToCart}>
                <i class="ri-shopping-bag-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  onClick={profileActionsToggle}
                  whileTap={{ scale: 1.2 }}
                  src={currentUser?.photoURL ? currentUser.photoURL : user_icon}
                  alt=""
                />
                <div className="profile__actions" ref={profileActionsRef}>
                  {currentUser ? (
                    <span className="logout__btn" onClick={logout}>
                      Logout
                    </span>
                  ) : (
                    <div className="sigupandlogin">
                      <div>
                        <Link onClick={profileActionsToggle} to="signup">
                          Sign Up
                        </Link>
                      </div>
                      <div>
                        <Link onClick={profileActionsToggle} to="login">
                          Login
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
