import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
import FoodItem from "../FoodItem/FoodItem.jsx";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className=" food-display mt-7" id="food-display">
      <h2 className=" text-[3vw] font-semibold ">Top dishes near you</h2>
      <div className="food-display-list grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-8 gap-y-12  mt-7   ">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
