import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";


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

  const placeOrder = async (event) => {
    event.preventDefault()
    let orderItems = []
    food_list.map((item)=> {
      if(cartItems[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id]
        orderItems.push(itemInfo)
      }
    })
    let orderData = {
      address : data,
      items : orderItems,
      amount : getTotalCartAmount() + 2
    }

    let response = await axios.post(url+"/api/order/place", orderData, {headers: {token}})
    if (response.data.success) {

      const { session_url }  = response.data
      window.location.replace = session_url
      
    }else{
      alert("err")
    }
    
  } 

  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate('/cart')
    }else if(getTotalCartAmount() === 0){
      navigate('/cart')
    }
  }, [token])
  return (
    <form onSubmit={placeOrder} className="place-order flex items-start justify-between gap-12 mt-[100px] ">
      <div className="place-order-left w-full max-w-[30%] ">
        <p className="title text-[30px] font-semibold mb-12  ">
          Delivery information
        </p>
        <div className="multi-fields flex gap-2 ">
          <input required type="text" name="firstName" onChange={onChangeHandler} value={data.firstName} placeholder="First name" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
          <input required type="text" name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last name" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  "  />
        </div>
        <input required type="email" name="email" onChange={onChangeHandler} value={data.email} placeholder="Email address" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        <input required type="text" name="street" onChange={onChangeHandler} value={data.street} placeholder="street" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        <div className="multi-fields flex gap-2 ">
          <input required type="text" name="city" onChange={onChangeHandler} value={data.city}  placeholder="City" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
          <input required type="text" name="state" onChange={onChangeHandler} value={data.state} placeholder="State" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        </div>
        <div className="multi-fields flex gap-2 ">
          <input required type="text" name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder="Zip code" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
          <input required type="text" name="country" onChange={onChangeHandler} value={data.country} placeholder="Country" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
        </div>
        <input required type="text" name="phone" onChange={onChangeHandler} value={data.phone} placeholder="Phone" className="mb-4 w-full p-3 border border-solid text-[#c5c5c5] outline-orange-500 rounded  " />
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
          <button type="submit" className=" border-none text-white bg-orange-500 w-[200px] py-3 cursor-pointer rounded-md mt-7 ">
            Proceed to payment
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;