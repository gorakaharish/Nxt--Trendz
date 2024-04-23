import axios from "axios";
import React, { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";
import {  ToastContainer, toast } from "react-toastify";

const LoadingSpinner = () => (
  <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
    <div className="spinner-border text-danger" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const Products = ({updateCartCount}) => {
  console.log('updateCartCount:', updateCartCount);
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)
//   console.log(product);
  const params = useParams();
  // const navigate = useNavigate();
//   console.log(params);

  const getUserData = () => {
    axios.get("https://fakestoreapi.com/products/" + params?.id).then((res) => {
      res.data.quantity = 1;
      setProduct(res.data);
      setLoading(false)
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const handelIncemanet = () => {
    const newProduct = {
      ...product,
      quantity: product.quantity + 1,
    }
    setProduct(newProduct);
  }

  const handelDecemanet = () => {
    if(product?.quantity > 1) {
      const newProduct = {
        ...product,
        quantity: product.quantity - 1
      }
      setProduct(newProduct);
    }
  }

  const handelAddtoCart = () => {
    // toast.success("Add to Cart Successfully!");
    const existingProducts = localStorage.getItem("Product"); // Notice 'Products' instead of 'Product'
    let products = existingProducts ? JSON.parse(existingProducts) : [];
    const existingProductIndex = products.findIndex((p) => p.id === product.id);
    if (existingProductIndex > -1) {
      products[existingProductIndex].quantity += product.quantity; // Add current product's quantity to existing one
    } else {
      products.push(product);
    }
    localStorage.setItem("Product", JSON.stringify(products));

    const totalItems = products.reduce((total, product) => total + product.quantity, 0);
    updateCartCount(totalItems);
  }



  return (
    <>
    {/* <Navbar data={product.quantity} /> */}
    <div className="mt-5 pt-5"></div>
    {/* <ToastContainer position="top-right" autoClose={2000} /> */}
    {loading ? (<LoadingSpinner />) : (
      <>
       <div className=" container-fluid">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-5">
            <div className="text-center mt-5 pt-3 mt-lg-4 pt-lg-5">
              <motion.img whileHover={{scale: 1.2}} src={product?.image} alt="img" className="w-50" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 mt-lg-4 ms-2 ms-lg-0 md-lg-0 ms-3 ms-md-0">
            <div className="mt-5 pt-3 mt-lg-0 pt-lg-5">
              <h1 className="text-dark fw-bolder fs-2 my-2">{product?.title}</h1>
              <p className="text-secondary fw-bolder fs-5 my-2">{product?.category}</p>
              <p className=" text-info-emphasis fs-6 fw-medium my-2">{product?.description}</p>
              <div className=" d-flex flex-row justify-content-between align-items-center mt-4">
                <p className="text-primary fw-bold align-self-center mt-3 px-lg-3">&#8377; <span className="text-dark">{product?.price * product?.quantity}</span></p>
                <div className="">
                <button className="btn btn-primary btn-sm mx-3" onClick={() => handelIncemanet()} >+</button>
                <span className="text-dark fs-5 fw-bold mt-1 text-center">{product?.quantity}</span>
                <button className="btn btn-danger btn-sm mx-3" onClick={() => handelDecemanet()}>-</button>
                </div>
                <p className="text-primary fw-bold me-4 align-self-center mt-3 px-lg-3">&#9733; &#9734; <span className="text-dark">{product?.rating?.rate}</span></p>
              </div>
              <div className=" d-flex flex-row justify-content-between px-3">
                <button className="btn btn-success btn-sm me-4" onClick={() => handelAddtoCart()}>Add To Cart</button>
                {/* <button className="btn btn-primary btn-sm ms-5" onClick={() => handelBuyNow()}>Buy Now</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      </>
    )}
      <Footer />
    </>
  );
};

export default Products;
