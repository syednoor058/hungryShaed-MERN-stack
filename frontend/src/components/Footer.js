import React from "react";
import footerLogo from "../assets/logo_dark.png";

export default function Footer() {
  return (
    <>
      {/* <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top bg-success">
        <div className="col-md-4 d-flex align-items-center">
          <Link
            to="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24"></svg>
          </Link>
          <span className="mb-3 mb-md-0 text-white">
            © 2024 Hungry Shaed Company, Inc
          </span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <Link className="text-muted" to="#">
              <svg className="bi" width="24" height="24"></svg>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" to="#">
              <svg className="bi" width="24" height="24"></svg>
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" to="#">
              <svg className="bi" width="24" height="24"></svg>
            </Link>
          </li>
        </ul>
      </footer> */}



      <footer className="mt-5 pt-5">
        <div className="container footer-pad-sm">
          <div className="row gx-3 align-items-baseline ps-3 pe-3">
            <div className="col-md-4 col-5">
              <div>
                <img src={footerLogo} alt="footer-logo" style={{height: "50px", width: "125px"}} />
                <div className="pt-3">
                <i className="fa-brands fa-square-facebook fs-5 pe-3"></i>
                <i className="fa-brands fa-youtube fs-5 pe-3 text-success"></i>
                <i className="fa-brands fa-twitter fs-5 pe-3"></i>
                <i className="fa-brands fa-linkedin fs-5 pe-3"></i>
                </div>
              </div>              
            </div>
            <div className="col-md-8 col-7">
              <div className="row gx-0">
                <div className="col-md-3 col-6 pb-5">
                  <h5 className="text-success">Home</h5>
                  <div className="pt-1 text-light">
                    <p className="m-0">Aunthenticity</p>
                    <p className="m-0">Why Us?</p>
                    <p className="m-0">Privacy Policy</p>
                  </div>
                </div>
                <div className="col-md-3 col-6 pb-5">
                <h5>Food</h5>
                <div className="pt-1 text-light">
                  <p className="m-0">Quality Product</p>
                  <p className="m-0">Fast Delivery</p>
                  <p className="m-0">Message us</p>
                </div>
                </div>
                <div className="col-md-3 col-6">
                <h5>About</h5>
                <div className="pt-1 text-light">
                  <p className="m-0">Our Company</p>
                  <p className="m-0">Clients</p>
                  <p className="m-0">Food Partner</p>
                </div>
                </div>
                <div className="col-md-3 col-6">
                <h5>Contact</h5>
                <div className="pt-1 text-light">
                  <p className="m-0">Email Us</p>
                  <p className="m-0">Phone Call</p>
                  <p className="m-0">E-mail</p>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center pt-2 pb-2">
          <span className="mb-3 mb-md-0 text-muted fs-6">
            © 2024 Hungry Shaed Company, Inc
          </span>
        </div>
      </footer>
    </>
  );
}
