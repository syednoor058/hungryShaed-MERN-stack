import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart } from "./ContextReducer";

export default function Card(props) {
  let dispatch = useDispatchCart();
  let option = props.options;
  let priceOption = Object.keys(option);
  const priceRef = useRef();
  const [qty, setQty] = useState(1);
  const [foodAddOns, setFoodAddOns] = useState("")

  const handleAddToCart = async ()=>{
    await dispatch({type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, foodAddOns: foodAddOns});
    await alert("One item added to cart!");
  }
  let finalPrice = (qty * parseFloat(option[foodAddOns])).toFixed(2);

  useEffect(()=>{
    setFoodAddOns(priceRef.current.value)
  }, [])

  return (
    <div className="mb-4 pb-3">
      <div
        className="card  bg-success card-shadow"
        style={{ width: "21rem", height: "auto" }}
      >
        <img
          src={props.foodItem.image}
          className="card-img-top"
          alt="..."
          style={{ height: "160px", objectFit: "fill" }}
        />
        <div className="card-body justify-content-center">
          <h5 className="card-title text-white">{props.foodItem.name}</h5>
          <p className="card-text" style={{ fontSize: "15px" }}>
            {props.foodItem.desc}
          </p>
          <div className="row gx-3 d-flex justify-content-center pb-2">
            <div className="col-md-3">
              <select className="w-100 rounded" onChange={(e)=>setQty(e.target.value)}>
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className=" col-md-9">
              <select className="w-100 rounded" ref={priceRef} onChange={(e)=>setFoodAddOns(e.target.value)}>
                {priceOption.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div className="row gx-0">
            <div className="col-4 d-flex align-items-center fs-4" style={{fontWeight: "600"}}>
              <>${finalPrice}</>
            </div>
            <div className="col-8 d-flex justify-content-end">
              <div className="row gx-1">
                <div className="col-6">
                  <button
                    className="btn bg-white text-success"
                    style={{ fontWeight: "600" }}
                  >
                    Order
                  </button>
                </div>
                <div className="col-6 d-flex justify-content-end">
                  <button className="btn bg-white text-success" onClick={handleAddToCart}><i className="fa-solid fa-cart-plus"></i></button>
                </div>
              </div>             
            </div>
          </div>         
        </div>
      </div>
    </div>
  );
}
