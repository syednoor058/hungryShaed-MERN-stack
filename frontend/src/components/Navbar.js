import React, { useState } from "react";
import Badge from "react-bootstrap/Badge";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../Modal";
import logoImg from "../assets/logo_dark.png";
import Cart from "../screens/Cart";
import { useCart } from "./ContextReducer";

export default function Navbar() {
  const navigate = useNavigate();
  const [cartView, setCartView] = useState(false);

  let cartData = useCart();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark">
          <Link className="ps-5" to="/">
            <img
              src={logoImg}
              alt="hungry_shaed_logo"
              style={{ height: "60px", width: "auto" }}
            />
          </Link>
          <button
            className="navbar-toggler me-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse ps-5" id="navbarNav">
            <ul className="navbar-nav me-auto ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Food
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="d-flex me-5">
              {!localStorage.getItem("authToken") ? (
                <>
                  <Link
                    className="btn bg-white text-success me-2"
                    style={{ fontWeight: "600" }}
                    to="/login"
                  >
                    Log In
                  </Link>
                  <Link
                    className="btn border border-white text-white"
                    style={{ fontWeight: "600" }}
                    to="/signup"
                  >
                    Sign Up
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    className="btn text-white fs-6"
                    style={{ fontWeight: "600" }}
                    to=""
                    onClick={() => setCartView(true)}
                  >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <div style={{ marginLeft: "70%", marginTop: "-35px" }}>
                      <Badge pill bg="danger">
                        {cartData.length === 0 ? "" : cartData.length}
                      </Badge>
                    </div>
                  </Link>
                  {cartView ? (
                    <Modal onClose={() => setCartView(false)}>
                      <Cart />
                    </Modal>
                  ) : null}
                  <Link
                    className="btn text-white fs-6 me-3"
                    style={{ fontWeight: "600" }}
                    to=""
                  >
                    <i className="fa-solid fa-user"></i>
                  </Link>
                  <div
                    className="btn text-white border border-white d-flex align-items-center"
                    style={{ fontWeight: "600" }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
