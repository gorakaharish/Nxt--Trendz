
import axios from "axios";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const LoadingSpinner = () => (
  <div
    className="d-flex justify-content-center align-items-center"
    style={{ height: "100vh" }}
  >
    <div className="spinner-border text-warning" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const Product = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  // console.log(product);

  const getProducts = () => {
    axios.get("https://fakestoreapi.com/products?limit=10").then((res) => {
      setProduct(res.data);
      setLoading(false);
      // console.log(res.data);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className=" container-fluid my-lg-5 py-lg-5 my-5">
            <div className="row">
              <h1 className=" text-uppercase fst-italic text-primary  fw-bold fs-1 text-center mb-lg-4 pb-lg-4 mb-3 pb-3">
                All Products
              </h1>
              <Slider {...settings}>
                {product.map((item, index) => (
                  <div className="" key={index}>
                    <div className="card m-2 m-xl-4 m-lg-3 m-md-2 rounded-4 shadow px-2">
                      <Link to={`/products/${item.id}`}>
                        <motion.img
                          whileTap={{ scale: 1.2 }}
                          src={item.image}
                          className="card-img-top w-75 mx-md-4 mx-lg-5 mx-xl-4 mx-5 px-2 my-3"
                          height={220}
                          alt="img"
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="fs-6 fw-bold p-1">
                          {item.title.slice(0, 20)}
                        </h5>
                        <div className="d-lg-flex flex-lg-row justify-content-lg-between mx-2 d-flex justify-content-between align-items-center">
                          <p className="fs-6 text-success fw-medium">
                            &#8377; {item.price * 80}
                          </p>
                          <p className="text-danger fw-medium fs-6 mt-0 pt-0">
                            Rating:{" "}
                            <span className="text-black fw-bold">
                              {" "}
                              {item.rating.rate}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Product;
