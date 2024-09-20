import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const navigate = useNavigate();

  return (
    <div className="cart mt-24  ">
      <div className="cart-items">
        <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 text-[18px]  ">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="cart-items-title grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-400 text-[18px]">
                  <img src={item.image} alt="" className="my-2 mx-0 w-[50px]" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className=" cursor-pointer  "
                    onClick={() => removeFromCart(item._id)}
                  >
                    X
                  </p>
                </div>
                <hr className=" h-[1px] bg-[#e2e2e2] border-none " />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom mt-20 flex justify-between gap-5">
        <div className="cart-total flex-1 flex flex-col gap-5">
          <h2>Cart total</h2>
          <div>
            <div className="  flex justify-between text-[#555555]  ">
              <p>Subtotal</p>
              <p> ${getTotalCartAmount()}</p>
            </div>
            <div className=" flex justify-between text-[#555555] ">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <div className=" flex justify-between text-[#555] ">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button
            className=" border-none text-white bg-orange-500 w-[200px] py-3 cursor-pointer rounded-md "
            onClick={() => navigate("/order")}
          >
            Proceed to checkout
          </button>
        </div>
        <div className="cart-promo-code flex-1 ">
          <div>
            <p className="text-[#555]  ">If you have promocode enter it here</p>
            <div className="promo-input mt-2 flex justify-between items-center bg-[#eaeaea] rounded ">
              <input
                type="text"
                placeholder="promocode"
                className=" bg-transparent border-none outline-none pl-2 "
              />
              <button className=" w-[10vw] py-3 px-1 border-none bg-black text-white rounded   ">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
