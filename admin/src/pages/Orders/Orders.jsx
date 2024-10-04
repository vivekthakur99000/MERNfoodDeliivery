import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import axios from "axios"
import {assets} from "../../assets/assets.js"

function Orders({url}) {


  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    const response = await axios.get(url+"/api/order/list")
    if (response.data.success) {
      setOrders(response.data.data)
    }else{
      toast.error("Error")
    }
  }

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"api/order/status", {
      orderId,
      status : event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders()
    }
  }

  useEffect(() => {fetchAllOrders()}, [])


  return (
    <div className='order add' >
      <h3>Order Page</h3>
      <div className="order-list">
        {
          orders.map((order, index) =>(
            <div key={index} className='order-item  grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr ] items-start gap-7 border border-solid border-orange-500 p-5 my-7 text-[14px] text-[#505050] ' >

                <img src={assets.parcel_icon} alt="" />
                <div>
                  <p className="order-item-food font-semibold  ">
                    {
                      order.items.map((item, index) => {
                        if (index === order.items.length-1) {
                          return item.name + " x " + item.quantity
                        }else{
                          return item.name + " x " + item.quantity + ", "
                        }
                      })
                    }
                  </p>
                  <p className="order-item-name font-semibold mt-7 mb-1 ">
                    {order.address.firstname+" "+order.address.lastname}
                  </p>
                  <div className="order-item-address mb-2 ">
                    {order.address.street+ ", "}
                  </div>
                  <p>{order.address.city +" "+order.address.state+ ", "+order.address.country+", "+ order.address.zipcode}</p>
                  <p className='order-item-phone' >
                  {order.address.phone}
                </p>
                </div>
                <p>Items : {order.item.length}</p>
                <p>${order.amount}</p>
                <select onChange={(event) => statusHandler(event, order._id)} value = {order.status} className=' bg-[#ffe8e4] border border-solid border-orange-500 p-2 outline-none' >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                </select>
            </div>
          ) )
        }
      </div>
    </div>
  )
}

export default Orders
