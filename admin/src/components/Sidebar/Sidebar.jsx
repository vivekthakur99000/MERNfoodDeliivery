import React from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

function Sidebar() {
  
  
  return (
    <div className='sidebar w-[18%] min-h-screen border-2 border-solid border-[#a9a9a9] border-t-0 text-[15px] '>
      <div className="sidebar-options pt-12 pl-[20%] flex flex-col gap-5 ">
        <NavLink to="/add" className="sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-3 cursor-pointer rounded ">
            <img src={assets.add_icon} alt="" />
            <p>Add items</p>
        </NavLink>
        <NavLink to="/list" className="sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-3 cursor-pointer rounded ">
            <img src={assets.order_icon} alt="" />
            <p>List items</p>
        </NavLink>
        <NavLink to="/orders" className="sidebar-option flex items-center gap-3 border border-solid border-[#a9a9a9] border-r-0 py-2 px-3 cursor-pointer rounded ">
            <img src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
