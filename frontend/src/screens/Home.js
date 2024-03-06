import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import chefCookingImg from "../assets/chef_cooking.jpg";
import foodDeliveryGuy from "../assets/food_delivery_guy.jpg";
import getInTouch from "../assets/get_in_touch.png";
import foodPlateImg from "../assets/hero_food_palate.png";
import shaedImg from "../assets/shaed_formal.png";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  // const [foodCategory, setFoodCategory] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  // const [search, setSearch] = useState("");

  const loadData = async () => {
    // axios
    //   .post("http://127.0.0.1:5000/api/food-data")
    //   .then(async (response) => {
    //     console.log(response.data);
    //     setFoodItem(response.data[0]);
    //     setFoodCategory(response.data[1]);
    //     console.log(foodItem);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });

    try {
      const response = await fetch("http://127.0.0.1:5000/api/food-data", {
        method: "POST",
      });
      if (response.ok) {
        const data = await response.json();
        // console.log(data);
        setFoodItem(data[0]);
        // setFoodCategory(data[1]);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className="hero-section hero-home mb-5">
        <div className="container-fluid mt-4 pt-4 pb-5">
          <div className="row gx-0 ps-3 pe-3">
            <div className="col-md-6 hero-sm-col1">
              <h1 className="mb-4">
                <span
                  className="text-success pe-2"
                  style={{ fontWeight: "700" }}
                >
                  Deliciously Delivered:
                </span>
                Bringing Flavor to Your Doorstep
              </h1>
              <p className="text-light fs-6 p-sm">
                From your favorite neighborhood eateries to gourmet delights, we
                bring a world of flavors straight to your doorstep. With easy
                ordering, speedy delivery, and a menu bursting with options,
                satisfying your cravings has never been easier. Let us handle
                the cooking, while you savor every bite.
                <span
                  className="text-success ms-1"
                  style={{ fontWeight: "700" }}
                >
                  Bon appétit!
                </span>
              </p>
              <Link
                className="btn btn-success text-white mt-3 pt-3 pb-3 ps-4 pe-4"
                style={{ fontWeight: "600", borderRadius: "40px" }}
                to="/login"
              >
                Order Now <i className="fa-solid fa-arrow-right ms-2"></i>
              </Link>
            </div>
            <div className="col-md-6 d-flex hero-col-2 hero-sm-col2 justify-content-center align-items-center">
              <img
                src={foodPlateImg}
                alt="hero_food_platter"
                className="img-fluid"
                style={{ width: "90%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>

      <section className="why-us pb-5">
        <div className="container text-center">
          <h3 className="pb-4 fs-5 p-sm">
            Why Choose <span className="text-success">Us</span>?
          </h3>
          <div className="gx-0 row">
            <div className="col-md-4 pb-sm">
              <div className="why-us-col rounded border border-success p-2 pt-4">
                <i className="fa-solid fa-burger text-success fs-2"></i>
                <h5
                  className="pt-3 pb-1 text-success"
                  style={{ fontWeight: "700" }}
                >
                  Quality Assurance
                </h5>
                <p className="text-light p-sm">
                  Partnered with top-rated restaurants and food vendors, we
                  guarantee high-quality ingredients.
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-sm">
              <div className="why-us-col rounded border border-success p-2 pt-4">
                <i className="fa-regular fa-credit-card text-success fs-2"></i>
                <h5
                  className="pt-3 pb-1 text-success"
                  style={{ fontWeight: "700" }}
                >
                  Secure Payment
                </h5>
                <p className="text-light p-sm">
                  Enjoy hassle-free ordering with our user-friendly app
                  interface, making it easy to select, customize, and pay.
                </p>
              </div>
            </div>
            <div className="col-md-4 pb-sm">
              <div className="why-us-col rounded border border-success p-2 pt-4">
                <i className="fa-solid fa-truck text-success fs-2"></i>
                <h5
                  className="pt-3 pb-1 text-success"
                  style={{ fontWeight: "700" }}
                >
                  Fast Delivery
                </h5>
                <p className="text-light p-sm">
                  Experience swift and reliable delivery services, ensuring your
                  food arrives hot and fresh, right when you need it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-5 pt-sm-5">
        <div className="container mb-3 text-center pb-3">
          <h3 className="pb-2 fs-5 p-sm">
            Food <span className="text-success">Menu</span>
          </h3>
          <h5 className="text-white fs-2">Find your favourite foods here!</h5>
          <p className="text-light">
            Choose from a diverse range of restaurants, cuisines, and dishes to
            satisfy any craving or dietary preference.
          </p>
        </div>
        <div className="container">
          <div className="row gx-0">
            {foodItem.map((filterItem) => {
              return (
                <div
                  key={filterItem._id}
                  className="col-md-4 col-lg-4 col-12 d-flex justify-content-center"
                >
                  <div className="menu-col">
                    <Card
                      foodItem={filterItem}
                      options={filterItem.option[0]}
                    ></Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mt-5 pt-5 pb-5">
        <div className="container-fluid">
          <div className="text-center">
            <h3 className="fs-5 p-sm">
              How We <span className="text-success">Work</span>
            </h3>
          </div>
          <div className="row gx-0 ps-5 pe-5 pt-5">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <img
                src={chefCookingImg}
                className="work-img-sm"
                alt="chef_cooking.png"
                style={{ width: "70%", height: "auto", borderRadius: "10px" }}
              />
            </div>
            <div className="col-md-6 d-flex align-items-center work-sm-col2">
              <div
                className="bg-white rounded p-3 card-shadow home-info-card-sm"
                style={{ marginLeft: "-140px" }}
              >
                <p className="fs-5 p-sm text-dark">
                  We establish partnerships with a wide range of restaurants,
                  cafes, and eateries, ensuring a diverse selection of cuisines
                  and dining options for our users. Our user-friendly app
                  interface allows customers to easily browse through
                  restaurants, explore menus, and place orders with just a few
                  taps.
                </p>
              </div>
            </div>
          </div>
          <div className="row gx-0 ps-5 pe-5 pt-5 work-sm-col2">
            <div className="col-md-6 d-flex align-items-center">
              <div
                className="bg-success rounded p-3 card-shadow home-info-card-sm"
                style={{ marginRight: "-140px", zIndex: "1000" }}
              >
                <p className="fs-5 p-sm">
                  We establish partnerships with a wide range of restaurants,
                  cafes, and eateries, ensuring a diverse selection of cuisines
                  and dining options for our users. Our user-friendly app
                  interface allows customers to easily browse through
                  restaurants, explore menus, and place orders with just a few
                  taps.
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center justify-content-center work-sm-col2">
              <img
                src={foodDeliveryGuy}
                className="work-img-sm"
                alt="food_delivery_guy.png"
                style={{ width: "70%", height: "auto", borderRadius: "10px" }}
              />
            </div>
          </div>
        </div>
      </section>

      <div className="text-center  mt-5 pt-5">
        <h3 className="fs-5 p-sm">
          Words from <span className="text-success">CEO</span>
        </h3>
      </div>
      <section className="mt-5">
        <div className="container-fluid">
          <div className="row gx-0 ps-5 pe-5 pt-5 words-sec-sm">
            <div className="col-md-8 d-flex align-items-center">
              <div className="words-sm-col1" style={{zIndex: "1000"}}>
                <p className="fs-5 bg-white p-3 rounded card-shadow mb-5 me-5 p-sm text-dark words-sm-quote-1">
                  <span className="fs-1">
                    <i className="fa-solid fa-quote-left text-dark me-2"></i>
                  </span>
                  We establish partnerships with a wide range of restaurants,
                  cafes, and eateries, ensuring a diverse selection of cuisines
                  and dining options for our users. Our user-friendly app
                  interface allows customers to easily browse through
                  restaurants, explore menus, and place orders with just a few
                  taps.
                </p>
                <p
                  className="fs-5 bg-dark p-3 rounded card-shadow mb-5 p-sm words-sm-quote-2"
                  style={{ marginLeft: "60px", marginRight: "-60px",}}
                >
                  <span className="fs-1">
                    <i className="fa-solid fa-quote-left text-success me-2"></i>
                  </span>
                  We establish partnerships with a wide range of restaurants,
                  cafes, and eateries, ensuring a diverse selection of cuisines.
                  and dining options for our users.
                </p>
                <div className="d-flex justify-content-end ceo-name-sm pb-5 me-5">
                  <p className="text-white fs-4" style={{ fontWeight: "700" }}>
                    - Syed Shaeduzzaman Noor
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex justify-content-end align-items-end">
              <div className="d-flex justify-content-center align-items-end ceo-img-sm bg-success rounded">
                <img
                  src={shaedImg}
                  className=""
                  alt="shaed_noor_CEO"
                  style={{ width: "70%", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 pt-5 pb-5 mb-5">
        <div className="container">
          <div className="row gx-5 bg-success card-shadow p-5 rounded">
            <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
              <img
                src={getInTouch}
                className="get-in-touch-img-sm"
                alt="delivery_man"
                style={{ width: "90%", height: "auto" }}
              />
            </div>
            <div className="col-12 col-md-6 d-flex align-items-center work-sm-col2 bg-white p-5 rounded">
              <div style={{ width: "100%" }}>
                <div className="pb-5">
                  <h3 className="fs-1 words-sec-sm text-dark">
                    <i className="fa-solid fa-rocket text-success"></i> Get In
                    <span className="text-success ms-2">Touch</span>
                  </h3>
                </div>
                <div className="form-div">
                  <form className="get-in-touch-form">
                    <div className="bg-white rounded">
                      <input
                        type="text"
                        className="form-control border-0 text-success input-box"
                        name="name"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="mt-3 mb-3 bg-white rounded">
                      <input
                        type="email"
                        className="form-control border-0 text-success input-box"
                        name="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="bg-white rounded">
                      <textarea
                        className="form-control border-0 text-success input-box"
                        placeholder="Write your message..."
                        style={{ height: "100px" }}
                      ></textarea>
                    </div>
                    <div className="mt-3">
                      <Link className="btn btn-success text-white" style={{width: "100%"}} to="">
                        Send <i className="fa-solid fa-paper-plane"></i>
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <Footer />
      </div>
    </div>
  );
}
