import React, { useContext } from "react";
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const { cartItems, addToCart, removeFromCart, url } =
    useContext(StoreContext);

  return (
    <div className="food-item w-full m-auto rounded-2xl shadow transition ">
      <div className="food-item-img-container relative   ">
        <img
          className="food-item-img w-full rounded-2xl  "
          src={url+"/images/"+image}
          alt=""
        />
        {!cartItems[id] ? (
          <img
            className="add w-[35px] absolute bottom-4 right-4 cursor-pointer rounded-full  "
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
          />
        ) : (
          <div className=" flex absolute bottom-4 right-4 items-center gap-3 p-[6px] rounded-[50px] bg-white ">
            <img
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
              className="w-[30px]"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
              className="w-[30px]"
            />
          </div>
        )}
      </div>
      <div className="food-item-info p-5  ">
        <div className="foot-item-name-rating flex justify-between items-center mb-2 ">
          <p className=" text-[20px] font-medium ">{name}</p>
          <img src={assets.rating_starts} className=" w-[70px] " alt="" />
        </div>
        <p className="foot-item-desc text-[#676767] text-sm ">{description}</p>
        <p className="food-price text-orange-500 font-medium mx-0 my-2 ">
          ${price}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
