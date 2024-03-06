import React from "react";
import { Link } from "react-router-dom";
import { useCart, useDispatchCart } from "../components/ContextReducer";

export default function Cart() {
  let cartData = useCart();
  let dispatch = useDispatchCart();

  if (cartData.length === 0) {
    return (
      <div>
        <div className="mt-5 w-100 text-center fs-3">
          No food item has been added.
        </div>
      </div>
    );
  }

  const handleCheckout = async () => {
    let userEmail = localStorage.getItem("userEmail");
    let response = await fetch("https://hungry-shaed-mern-stack-api.vercel.app/api/order-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_data: cartData,
        email: userEmail,
        order_date: new Date().toDateString(),
      }),
    });
    if (response.status === 200) {
      dispatch({ type: "DROP" })
    }
  };

  let totalPrice = cartData.reduce(
    (totalPrice, food) => totalPrice + parseFloat(food.price),
    0
  );
  return (
    <>
      <div className="container ps-5 pe-5 mt-5 table-responsive table-responsive-sm table-responsive-md">
        <table className="table table-hover">
          <thead className="text-success fs-5">
            <tr>
              <th scope="col"> # </th>
              <th scope="col"> Name </th>
              <th scope="col"> Option </th>
              <th scope="col"> Quantity </th>
              <th scope="col"> Amount </th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((food, index) => {
              return (
                <>
                  <tr>
                    <th scope="row"> {index + 1} </th>
                    <td> {food.name} </td>
                    <td> {food.foodAddOns} </td>
                    <td> {food.qty} </td>
                    <td> ${food.price} </td>
                    <td>
                      <button
                        type="button"
                        className="btn p-0"
                        onClick={() =>
                          dispatch({ type: "REMOVE", index: index })
                        }
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>{" "}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
        <div className="fs-4 mt-5">Total Price: ${totalPrice.toFixed(2)}</div>
        <div className="mt-5">
          <Link className="btn btn-success text-white" to="" onClick={handleCheckout}>
            Check Out
          </Link>
        </div>
      </div>
    </>
  );
}
