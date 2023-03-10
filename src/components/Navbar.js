import React, { useState, useEffect, useContext } from "react";

// spa
import { Link, useNavigate } from "react-router-dom";

// img
import logo from "../img/logo-100-50.png";

// icons
import {
  FaBars,
  FaComments,
  FaHome,
  FaRegUser,
  FaShoppingBasket,
  FaSignInAlt,
  FaTimes,
  FaUserCheck,
  FaUserGraduate,
  FaUserTie,
} from "react-icons/fa";

// styles
import styles from "./Navbar.module.css";

// context
import { UserContext } from "../Context/UserContextProvider";
import { CartContext } from "../Context/CartContextProvider";

const Navbar = () => {
  const [menu_mobile, setMenu_mobile] = useState(false);
  const user = useContext(UserContext);
  const { state } = useContext(CartContext);

  const clickHandler = (e) => {
    setMenu_mobile(!menu_mobile);
  };
  useEffect(() => {
    if (menu_mobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menu_mobile]);

  return (
    <>
      <section className={styles.section_main}>
        <div className={styles.main}>
          <div className={styles.menu_icon_mobile} onClick={clickHandler}>
            <FaBars />
          </div>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <nav className={styles.menu_nav}>
            <ul className={styles.menu_ul}>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.login_cart}>
            {user ? (
              <Link to="/dashboard">
                <div className={styles.login}>
                  <span>Dashboard</span>
                  <span>
                    <FaUserCheck />
                  </span>
                </div>
              </Link>
            ) : (
              <Link to="/login">
                <div className={styles.login}>
                  <span>Login</span>
                  <span>
                    <FaSignInAlt />
                  </span>
                </div>
              </Link>
            )}
            <div className={styles.cart}>
              <Link to="/cart">
                <FaShoppingBasket />
              </Link>
              <span>{state.itemsCounter}</span>
            </div>
          </div>
        </div>
      </section>
      {menu_mobile && (
        <section
          style={{
            width: "100vw",
            height: "100wh",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            position: "absolute",
            top: "0",
            zIndex: "9999",
            transition: "left 5s ease-in-out",
            left: `${menu_mobile ? "0" : "-100vw"}`,
          }}
        >
          <div className={styles.menu_section}>
            <div onClick={clickHandler}>
              <FaTimes />
            </div>
            <ul>
              <li>
                <FaHome />
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <FaUserGraduate />
                <Link to="/courses">Courses</Link>
              </li>
              <li>
                <FaComments />
                <Link to="/comments">Comments</Link>
              </li>
              <li>
                <FaUserTie />
                <Link to="/about-us">About Us</Link>
              </li>
            </ul>
          </div>
        </section>
      )}
    </>
  );
};

export default Navbar;
