import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets";

function MyOrders() {
  const [data, setData] = useState([]);
  const { url, token } = useContext(StoreContext);

  const fetchOrders = async () => {
    const response = await axios.post(
      url + "api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className="my-orders my-12 ">
      <h2>My Orders</h2>
      <div className="container flex flex-col gap-5 mt-7">
        {data.map((order, index) => {
          return (
            <div
              key={index}
              className="myorders-order flex grid-cols-[0.5fr_2fr_1fr_2fr_1_fr] items-center gap-7 text-[#14px] py-2 px-5 text-[#454545] border border-solid border-orange-500 "
            >
              <img src={assets.parcel_icon} alt="" className="w-[50px]" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + "x" + item.quantity;
                  } else {
                    return item.name + "x" + item.quantity + ", ";
                  }
                })}
              </p>
              <p>${order.amount}.00</p>
              <p>items : {order.items.length}</p>
              <p>
                <span>&#x25cf;</span>
                <b>order.status</b>
              </p>
              <button className="border-none py-3 rounded bg-[#ffe1e1]  " >Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
