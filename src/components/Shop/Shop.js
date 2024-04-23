import React, { useEffect, useState } from "react";
import "./shop.css";
// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div className="spinner-border text-success" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const Shop = () => {
  const [userData, setUserData] = useState([]);
  const [filter, setFilter] = useState(userData);
  const [loading, setLoading] = useState(true);

  const getUseruserData = () => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setUserData(res.data);
      setLoading(false);
      setFilter(res.data);
    });
  };

  const filterProduct = (cat) => {
    const updatedList = userData.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  useEffect(() => {
    getUseruserData();
    filterProduct();
  }, []);

  return (
    <>
      {/* <Navbar /> */}
      <div className="mt-5 pt-5 mt-lg-3 pt-lg-4"></div>
      {loading ? (<LoadingSpinner />) : (
        <>
        <div className=" container  mt-5 pt-5">
          <div className="row">
            <div className="buttons d-flex justify-content-center mb-3 pb-4">
              <button
                className="btn btn-outline-dark btn-sm ms-2"
                onClick={() => setFilter(userData)}
              >
                All
              </button>
              <button
                className="btn btn-outline-dark btn-sm ms-2"
                onClick={() => filterProduct("men's clothing")}
              >
                Men's Clothing
              </button>
              <button
                className="btn btn-outline-dark btn-sm ms-2"
                onClick={() => filterProduct("women's clothing")}
              >
                Womeen's Clothing
              </button>
              <button
                className="btn btn-outline-dark btn-sm ms-2"
                onClick={() => filterProduct("jewelery")}
              >
                Jewelery
              </button>
              <button
                className="btn btn-outline-dark btn-sm ms-2"
                onClick={() => filterProduct("electronics")}
              >
                Electronics
              </button>
            </div>
            <h1 className="fs-2 fw-bolder text-center mb-4 text-secondary">
              Collection of Trand's
            </h1>
            {filter?.map((item, index) => (
              <div
                className="col-6 col-md-4 my-3 rounded-2 col-lg-3"
                key={index}
              >
                <div className="card shadow">
                  <div className="text-center mt-3">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={item.image}
                      className="w-75 image"
                      alt="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="fs-6 fw-bolder">
                      {item.title.slice(0, 15)}
                    </h5>
                    <div className="d-flex flex-row justify-content-between align-items-center">
                      <p className="fs-6 fw-medium">&#8377; {item.price}</p>
                      <p className="fs-6 fw-medium me-3">
                        &#9733; &#9734; {item.rating.rate}
                      </p>
                    </div>
                    <div>
                      <motion.button
                        whileTap={{ scale: 1.2 }}
                        className="btn btn-dark w-100"
                      >
                        <Link
                          className="text-white fw-bolder fs-6 text-decoration-none"
                          to={`/products/${item?.id}`}
                        >
                          Shop Now
                        </Link>
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Shop;
