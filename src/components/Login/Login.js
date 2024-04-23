import React, { useState } from "react";
import logo from "../../assets/image/logo.png";
import img from "../../assets/image/login-img.png";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
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
      // localStorage.setItem("formData",JSON.stringify(formData))
      // console.log("Sending Data", formData);
      // return redirect("/login");
      const loggeduser = JSON.parse(localStorage.getItem("User"))
      if (formData.email === loggeduser.email && formData.password === loggeduser.password){
        localStorage.setItem("loggedin",true)
        navigate("/");
      } else{
        alert("wrong Email or Password");
        // navigate("/register");
      }
    }
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};
    let { email, password } = formData;

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

  // console.log(formError);
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
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-white mx-4 mx-lg-5">
            <img src={logo} alt="log" width={150} className="my-3" />
          </div>
          <div className="col-12 col-md-12 col-lg-7 my-lg-5 my-md-5 my-5 py-lg-5 py-md-5 py-4 p-lg-3 pe-lg-2 p-3 mx-1 mx-lg-0">
            <img src={img} alt="img" className=" w-100" />
          </div>
          <div className="col-12 col-md-12 col-lg-5 my-lg-5 py-lg-5 my-md-5 mx-2 mx-lg-0">
            <div className="">
              <div className="text-center">
                <img src={logo} alt="logo" className="w-50" />
              </div>
              <div className="d-flex flex-column">
                <form onSubmit={(event) => handelSubmit(event)}>
                  <div className="d-flex flex-column justify-content-center mx-5 my-3">
                    <label className="fs-6 fw-bold text-dark my-2 ">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      placeholder="Enter Your Eamil"
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
                      className="btn btn-primary"
                    >
                      Login
                    </motion.button>
                    <p className="fs-6 text-secondary-emphasis mt-2">don't have an Account?<Link to="/register" className="text-dark">Register here</Link></p>
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

export default Login;
