import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signUpImg from "../assets/sign_up.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Signup() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    location: "",
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/api/create-user", userInfo)
      .then((response) => {
        console.log(response);
        navigate("/login");
      })
      .catch((err) => {
        alert("Please enter valid information.");
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 pb-5">
        <div className="row bg-success rounded card-shadow">
          <div className="col-12 col-md-7 p-5 bg-white rounded">
            <div className="text-center pb-5">
              <div className="fs-1 text-success">
                <p className="mb-0" style={{ fontWeight: "700" }}>
                  New in town?
                </p>
              </div>
              <div>
                <p className="mb-0 text-dark" style={{ fontWeight: "500" }}>
                  Create an account to place an order.
                </p>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="sign-up-form pb-5">
              <div className="mt-3 mb-3">
                <input
                  type="text"
                  className="form-control border-0"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={userInfo.firstName}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control border-0"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={userInfo.lastName}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control border-0"
                  name="location"
                  placeholder="Enter your present address"
                  value={userInfo.location}
                  onChange={onChange}
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control border-0"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter your email address"
                  value={userInfo.email}
                  onChange={onChange}
                />
                <div name="emailHelp" className="form-text">
                  Your email adress will be safe and not shared with anyone.
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control border-0"
                  name="password"
                  placeholder="Enter your password"
                  value={userInfo.password}
                  onChange={onChange}
                />
              </div>
              <div className="row gx-3">
                <div className="col-12 col-md-3">
                  <button
                    type="submit"
                    className="btn btn-success text-white"
                    style={{ width: "100%" }}
                  >
                    Register
                  </button>
                </div>
                <div className="col-12 col-md-9 login-label-sm d-flex align-items-center">
                  <div className="text-dark">Already have an account?</div>
                  <Link to="/login" className="ms-2 text-success">
                    Click here
                  </Link>
                </div>
              </div>
            </form>
            <div className="text-center text-dark">
              <div className="text-success">
                <p className="mb-1" style={{ fontWeight: "600" }}>
                  Or
                </p>
              </div>
              <div>
                <p className="mb-3">Sign up with</p>
                <div className="">
                  <Link to="">
                    <i class="fs-3 fa-brands fa-facebook-f mx-2"></i>
                  </Link>
                  <Link to="">
                    <i class="fs-3 fa-brands fa-google mx-3 text-success"></i>
                  </Link>
                  <Link to="">
                    <i class="fs-3 fa-brands fa-twitter mx-3"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-center">
            <img
              src={signUpImg}
              alt="sign_up_img"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
