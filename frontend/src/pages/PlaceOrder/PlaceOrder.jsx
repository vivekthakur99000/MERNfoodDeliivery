import React, { useContext, useState } from "react";
import { StoreContext } from "../../context/StoreContext";


function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    street : "",
    city : "",
    state : "",
    zipcode : "",
    country : "",
    phone : ""

  })

  const onChangeHandler = (event) => {
    const name = event.target.name
    const value = event.target.value
    setData(data => ({...data, [name]:value}))
  }

  return (
    <form className="place-order flex items-start justify-between gap-12 mt-[100px] ">
      <div className="place-order-left w-full max-w-[30%] ">
        <p className="title text-[30px] font-semibold mb-12  ">
          Delivery information
        </p>
        <div className="multi-fields flex gap-2 ">
          <input type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="First name" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
          <input type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last name" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  "  />
        </div>
        <input type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email address" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        <input type="text" name="street" onChange={onChangeHandler} value={data.street} placeholder="street" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        <div className="multi-fields flex gap-2 ">
          <input type="text" name="city" onChange={onChangeHandler} value={data.city}  placeholder="City" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
          <input type="text" name="state" onChange={onChangeHandler} value={data.state} placeholder="State" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        </div>
        <div className="multi-fields flex gap-2 ">
          <input type="text" name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder="Zip code" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
          <input type="text" name="country" onChange={onChangeHandler} value={data.country} placeholder="Country" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        </div>
        <input type="text" name="phone" onChange={onChangeHandler} value={data.phone} placeholder="Phone" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
      </div>
      <div className="place-order-right w-full max-w-[40%]">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2 className="text-[30px] font-semibold mb-12  " >Cart total</h2>
          <div>
            <div className="  flex justify-between text-[#555555]  ">
              <p>Subtotal</p>
              <p> ${getTotalCartAmount()}</p>
            </div>
            <div className=" flex justify-between text-[#555555] ">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</p>
            </div>
            <div className=" flex justify-between text-[#555] ">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button className=" border-none text-white bg-orange-500 w-[200px] py-3 cursor-pointer rounded-md mt-7 ">
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;