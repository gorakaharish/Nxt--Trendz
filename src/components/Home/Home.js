import React from "react";
import "./home.css";
// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import img from "../../assets/image/bg-img-removebg-preview.png";
import Product from "../Layout/Product/Product";
import Logos from "../../assets/Object/Object";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
      {/* <Navbar /> */}
      <div className=" container-fluid  my-5 py-5  pt-lg-4 mt-lg-4 my-lg-3 py-lg-3 content">
        <div className="row">
          <div className="col-12 col-md-6 co-lg-6 my-lg-5  py-lg-5 my-md-3 py-md-3 mt-3 pt-5 mt-2 py-2">
            <div className="mx-lg-5 mx-md-4 mx-2">
              <h1 className="fs-lg-2 fs-md-2 fs-1 fw-bolder text-white mt-lg-4 mt-md-4 mt-3 fst-italic">
                Nxt Trendz
              </h1>
              <span className="text-dark fs-lg-6 fs-6 fw-bold text-uppercase fst-italic mb-5">
                online Shopping
              </span>
              <p className=" text-capitalize text-white mt-3 fs-lg-5 fs-6 fst-italic fw-bolder">
                Online shopping is a form of electronic commerce which allows
                consumers to directly buy goods or services from a seller over
                the Internet using a web browser or a mobile app.
              </p>
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="btn btn-danger fst-italic"
              >
                <Link
                  to="/shop"
                  className="text-white text-decoration-none fs-6 fw-bold"
                >
                  Shop Now
                </Link>
              </motion.button>
            </div>
          </div>
          <div className="col-12 col-md-6 co-lg-6 my-xl-0 py-lg-0 mt-lg-5 pt-lg-5 my-md-2 py-md-3 mt-md-5 text-center mt-3">
            <div className="mx-lg-5 mx-md-4 mx-2">
              <img src={img} alt="img" className="w-100" />
            </div>
          </div>
        </div>
      </div>
      <Product />
      <div className=" container-fluid my-lg-4 py-lg-3 my-md-3 py-md-2 my-2 py-2">
        <div className="row">
          <Slider {...settings}>
            {Logos.map((logos, index) => (
              <div className="col-12 px-2" key={index}>
                <div className="card w-100 slider-container shadow-sm">
                  <div className="card-body">
                    <motion.img whileHover={{scale: 1.1}} src={logos.image} alt="logo" className="w-75 mx-4" height={25} />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
