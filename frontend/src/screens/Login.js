import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Login() {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:5000/api/login-user", userInfo)
      .then(async (response) => {
        localStorage.setItem("userEmail", userInfo.email);
        localStorage.setItem("authToken", response.data.authToken);
        console.log(localStorage.getItem("authToken"));
        navigate("/");
      })
      .catch((err) => {
        alert("Please enter valid information.");
        console.log(err.message);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container pb-5 mt-5">
        <div className="row gx-5 bg-success rounded card-shadow">
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center">
            <img
              src={loginImg}
              alt="login_img"
              style={{ width: "80%", height: "auto" }}
            />
          </div>
          <div className="col-md-6 col-12 d-flex align-items-center justify-content-center bg-success rounded bg-white px-5 py-5">
            <div className="" style={{ width: "80%" }}>
              <div className="pb-5">
                <div className="text-center">
                  <h3
                    className="fs-1 text-success"
                    style={{ fontWeight: "700" }}
                  >
                    Welcome again!
                  </h3>
                </div>
                <div className="text-center">
                  <p className="text-dark mb-0" style={{ fontWeight: "500" }}>
                    Log in to your account.
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="login-form mb-5">
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control border-0"
                    name="email"
                    aria-describedby="emailHelp"
                    placeholder="Email addres or username"
                    value={userInfo.email}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control border-0"
                    name="password"
                    placeholder="Password"
                    value={userInfo.password}
                    onChange={onChange}
                  />
                </div>
                <div className="row gx-3">
                  <div className="col-12 col-md-3">
                    <button
                      type="submit"
                      className="btn btn-success text-white"
                      style={{width: "100%"}}
                    >
                      Log In
                    </button>
                  </div>
                  <div className="col-12 col-md-9 d-flex align-items-center login-label-sm">
                    <div
                      className="text-dark"
                    >
                      Don't have an account?
                    </div>
                    <Link to="/signup" className="ms-2 text-success">
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
                  <p className="mb-3">Log in with</p>
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
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
