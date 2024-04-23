import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import gpay from "../../assets/image/gpay.png";
import sbi from "../../assets/image/sbi.png";
import icic from "../../assets/image/icic.png";
import hdfc from "../../assets/image/hdfc.png";
import credit from "../../assets/image/credit-cards.png";
import {  ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Cart = () => {
  const items = JSON.parse(localStorage.getItem("Product"));
  const [product, setProduct] = useState(items == null ? [] : items);

  const totalAmount = product.map((item) => item.price * item.quantity);
  const totalValue = totalAmount.reduce((acc, price) => acc + price, 0);

  const totalQuantity = product.map((item) => item.quantity);
  const totalQuantitySum = totalQuantity.reduce((acc, qu) => acc + qu, 0);

  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    const updatedProducts = product.filter((data) => data.id !== id);
    setProduct(updatedProducts);
    localStorage.setItem("Product", JSON.stringify(updatedProducts));
  };

  const handleConfirmAndPay = () => {
    toast.success("Your order is  successfully!");

    // Clear the cart
    setProduct([]);
    localStorage.removeItem("Product");

    // Hide the modal
    setShowModal(false);
    
  };

  return (
    <>
      <div className="mt-5 pt-5"></div>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="container-fluid pt-5 mt-lg-3 mt-md-3">
        <div className="row">
          <div className="col-12 col-md-8">
            <table className="table border">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {product.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item?.image} alt="img" width={60} height={60} />
                    </td>
                    <td>{item?.title?.slice(0, 10)}</td>
                    <td>{item?.price * item?.quantity}</td>
                    <td>{item?.quantity}</td>
                    <td>
                      <i
                        className="bi bi-trash3 fs-5 text-danger"
                        onClick={() => handleDelete(item.id)}
                      ></i>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-12 col-md-4">
            <table className="table border">
              <thead>
                <tr>
                  <th className="text-center text-primary fs-6">
                    Please Proceed
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Total Quantity:{" "}
                    <b className="text-info">{totalQuantitySum}</b>
                  </td>
                </tr>
                <tr>
                  <td>
                    Total Amount: <b className="text-success">{totalValue}</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              className="btn btn-outline-danger w-100"
              onClick={() => setShowModal(true)}
            >
              Buy Now
            </button>
          </div>
        </div>
        <div>
          <Link to="/shop" className="btn btn-dark mt-2">
            <i className="bi bi-skip-backward bg-transparent mx-2"></i>
          </Link>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Proceed to Payment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <input type="radio" className="mb-3 me-2 ms-5 " />
            <label>
              <img src={gpay} alt="img" height={20} className="ms-2" />
            </label>
            <label className="fs-6 fw-bold text-success-emphasis ms-1">
              UPI
            </label>
            <input type="radio" className="mb-3 ms-5 me-2" />
            <label className="fs-6 fw-bold text-success-emphasis">
              Net Banking
            </label>

            <div class="btn-group">
              <button
                type="button"
                class="btn dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="/cart">
                    <label className=" me-2 fs-6">SBI</label>
                    <img src={sbi} alt="sbi" height={30} />
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/cart">
                    <label className=" me-2 fs-6">ICIC</label>
                    <img src={icic} alt="sbi" height={30} />
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="/cart">
                    <label className=" me-2 fs-6">HDFC</label>
                    <img src={hdfc} alt="sbi" height={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <input type="radio" className="mb-3 me-2 ms-5 " />
            <label className="fs-6 fw-bold text-success-emphasis ms-1">
              Card's
            </label>
            <label>
              <img src={credit} alt="img" height={20} className="ms-2" />
            </label>
            <input type="radio" className="mb-3 ms-5 me-2" />
            <label className="fs-6 fw-bold text-success-emphasis">
              Cash on Deliver
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => handleConfirmAndPay(true)}
          >
            Confirm and Pay
          </Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </>
  );
};

export default Cart;
