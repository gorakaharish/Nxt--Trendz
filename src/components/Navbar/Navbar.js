import React, { useEffect, useState } from "react";
import logo from "../../assets/image/logo.png";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  // console.log(data);
  // const [count, setCount] = useState(data)
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const existingProducts = localStorage.getItem("Product");
    const products = existingProducts ? JSON.parse(existingProducts) : [];
    const totalItems = products.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setCartCount(totalItems);
  }, []);
  const userName = JSON.parse(localStorage.getItem("User"));
  const handelLogut = () => {
    localStorage.removeItem("loggedin");
    navigate("/login");
  };
  return (
    <div className=" shadow fixed-top">
      <nav className="navbar bg-body-tertiary fixed-top">
        <div className="container-fluid mx-md-4 mx-lg-2 mt-1">
          <a className="navbar-brand  mx-lg-5 mx-md-4" href="/home">
            <motion.img
              whileTap={{ scale: 1.3 }}
              src={logo}
              alt="logo"
              width={170}
            />
          </a>
          <div className="d-flex flex-row justify-content-center align-items-center  d-md-none d-none d-lg-block">
            <ul className="navbar-nav d-flex flex-row  align-items-center">
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="nav-link fs-6 fw-bolder text-info-emphasis mx-4"
                  aria-current="page"
                  href="/"
                >
                  Home
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="nav-link fs-6 fw-bolder text-info-emphasis mx-4"
                  aria-current="page"
                  href="/shop"
                >
                  Shop
                </motion.a>
              </li>
              <li className="nav-item">
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  className="nav-link fs-6 fw-bolder text-info-emphasis mx-4"
                  aria-current="page"
                  href="/cart"
                >
                  Cart
                </motion.a>
              </li>
            </ul>
          </div>
          <div className="d-flex flex-row justify-content-between align-items-center mx-5 d-md-none d-none d-lg-block">
            <Link to="/cart" className=" position-relative">
              <i className="bi bi-cart3 fs-3 mx-3 fw-bold text-danger"></i>
              <span className="position-absolute top-30  start-0 ms-5 translate-middle  mt-2 badge rounded-pill bg-success">
                {cartCount}
              </span>
            </Link>
            <Link className=" text-decoration-none fs-6 text-dark fw-bold ">
              <i className="bi bi-person-circle fs-3 fw-bold mx-3 text-success">
                <span className="fs-6 text-secondary ms-1 fw-bold">
                  {userName.username}
                </span>
              </i>
            </Link>

            <i
              className="bi bi-box-arrow-right fs-3 mx-3 fw-bold text-primary"
              onClick={handelLogut}
            ></i>
          </div>
          <button
            className="navbar-toggler text-primary d-lg-none mx-4"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header bg-info">
              <div className="d-flex flex-row align-items-center">
                <a
                  href="/home"
                  className="offcanvas-title"
                  id="offcanvasNavbarLabel"
                >
                  <img src={logo} alt="logo" width={120} />
                </a>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body text-center">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className="nav-link  fs-4 my-1 fw-bold tetx-dark"
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-4 my-1 fw-bold tetx-dark"
                    href="/shop"
                  >
                    Shop
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link fs-4 my-1 fw-bold tetx-dark"
                    href="/cart"
                  >
                    Cart
                  </a>
                </li>
                {/* <li className="nav-item">
                  <a className="nav-link fs-4 my-1 fw-bold" href="/">
                    <Link to="/user">
                      <i className="bi bi-person-circle fs-1  fw-bold text-success"></i>
                    </Link>
                  </a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link fs-4 my-1 fw-bold" to="/cart">
                    <i className="bi bi-cart3 fs-1  fw-bold text-danger"></i>
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className=" container-fluid bg-body-tertiary mt-5 pt-4 d-lg-none d-md-block d-block">
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="d-flex flex-row justify-content-around">
              <div>
                <li className="nav-item list-unstyled">
                  <Link to="/user" className="nav-link fs-4 my-1 fw-bold">
                    <i className="bi bi-person-circle fs-1  fw-bold text-success">
                      <span className="fs-6 text-secondary ms-1 fw-bold">
                        {userName.username}
                      </span>
                    </i>
                  </Link>
                </li>
              </div>
              <div>
                <li className="nav-item list-unstyled position-relative">
                  <Link className="nav-link fs-4 my-1 fw-bold" to="/cart">
                    <i className="bi bi-cart3 fs-1  fw-bold text-danger"></i>
                    <span className="position-absolute top-0 start-100 translate-middle ms-2 mt-2 badge rounded-pill bg-success">
                      {cartCount}
                    </span>
                  </Link>
                </li>
              </div>
              <div>
                <li className="nav-item list-unstyled">
                  <i
                    className="bi bi-box-arrow-right fs-1   fw-bold text-primary"
                    onClick={handelLogut}
                  ></i>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
