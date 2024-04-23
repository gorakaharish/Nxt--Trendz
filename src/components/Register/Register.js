import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import img from "../../assets/image/login-img.png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({});
  const navigate = useNavigate();

  const handelInputs = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handelSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      localStorage.setItem("User", JSON.stringify(formData));
      //   console.log("Sending Data", formData);
      navigate("/login");
      // return redirect("/login");
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};
    let { username, email, password } = formData;

    if (username === "") {
      errors.username = "Enter Your Name";
      isValid = false;
    } else {
      if (username.length < 5) {
        errors.username = "Enter a Valid Name";
        isValid = false;
      }
    }
    if (email === "") {
      errors.email = "Enter Your Email";
      isValid = false;
    } else {
      if (isEmail(email)) {
        errors.email = "Enter a Valid email";
        isValid = false;
      }
    }
    if (password === "") {
      errors.password = "Enter Your Password";
      isValid = false;
    } else {
      if (password.length < 6) {
        errors.password = "Enter Your Password Upto 8 Charecter's";
        isValid = false;
      }
    }
    setFormError(errors);
    return isValid;
  };

  //   console.log(formError);
  const isEmail = (val) => {
    let regEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regEmail.test(val)) {
      return true;
    }
  };

  const handelFocus = (event) => {
    setFormError({
      ...formError,
      [event.target.name]: "",
    });
  };

  const handelBlur = (event) => {
    if (event.target.value === "") {
      setFormError({
        ...formError,
        [event.target.name]: event.target.name + " Required",
      });
    }
    validateForm();
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-white mx-4 mx-lg-5">
            <img src={logo} alt="log" width={150} className="my-3" />
          </div>
          <div className="col-12 col-md-12 col-lg-7 my-lg-5 my-md-5 my-4 py-lg-5 py-md-5 py-3 p-lg-3 pe-lg-2 p-3 mx-1 mx-lg-0">
            <img src={img} alt="img" className=" w-100" />
          </div>
          <div className="col-12 col-md-12 col-lg-5 my-lg-4 py-lg-4 my-md-5 mx-2 mx-lg-0">
            <div className="">
              <div className="text-center">
                <img src={logo} alt="logo" className="w-50" />
              </div>
              <div className="d-flex flex-column">
                <form onSubmit={(event) => handelSubmit(event)}>
                  <div className="d-flex flex-column justify-content-center mx-5 my-3">
                    <label className="fs-6 fw-bold text-dark my-2 ">Username</label>
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      placeholder="Enter Your Username"
                      className="w-100 form-control"
                      onChange={(event) => handelInputs(event)}
                      onFocus={(event) => handelFocus(event)}
                      onBlur={(event) => handelBlur(event)}
                    />
                    {formError.email && (
                      <span className="text-danger fs-6 fw-bolder mx-3 p-2">
                        {formError.username}
                      </span>
                    )}
                  </div>
                  <div className="d-flex flex-column justify-content-center mx-5 my-3">
                    <label className="fs-6 fw-bold text-dark my-2 ">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      placeholder="Enter Your Email"
                      className="w-100 form-control"
                      onChange={(event) => handelInputs(event)}
                      onFocus={(event) => handelFocus(event)}
                      onBlur={(event) => handelBlur(event)}
                    />
                    {formError.email && (
                      <span className="text-danger fs-6 fw-bolder mx-3 p-2">
                        {formError.email}
                      </span>
                    )}
                  </div>
                  <div className="d-flex flex-column justify-content-center mx-5 my-3">
                    <label className="fs-6 fw-bold text-dark my-2 ">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      placeholder="Enter Your Password"
                      className="w-100 form-control"
                      onChange={(event) => handelInputs(event)}
                      onFocus={(event) => handelFocus(event)}
                      onBlur={(event) => handelBlur(event)}
                    />
                    {formError.password && (
                      <span className="text-danger fs-6 fw-bolder mx-3 p-2">
                        {formError.password}
                      </span>
                    )}
                  </div>
                  <div className="d-flex flex-column justify-content-center mx-5 my-3">
                    <motion.button
                      whileTap={{ scale: 1.1 }}
                      className="btn btn-primary w-100"
                    >
                      Register
                    </motion.button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
