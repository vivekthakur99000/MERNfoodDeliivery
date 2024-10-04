import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import "./NavBar.css";

function NavBar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token")
    setToken("")
    navigate("/")
  }

  return (
    <div className="navbar py-5 flex justify-between items-center ">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo w-36 " />
      </Link>
      <ul className="navbar-menu flex list-none gap-5 text-[#49557e] text-[18px] max-md:text-[17px] ">
        <li
          onClick={() => setMenu("home")}
          className={` cursor-pointer ${
            menu === "home"
              ? "pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => setMenu("menu")}
          className={` cursor-pointer ${
            menu === "menu"
              ? "pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }`}
        >
          Menu
        </li>
        <li
          onClick={() => setMenu("mobile-app")}
          className={` cursor-pointer ${
            menu === "mobile-app"
              ? "pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }`}
        >
          Mobile app
        </li>
        <li
          onClick={() => setMenu("contact-us")}
          className={`cursor-pointer ${
            menu === "contact-us"
              ? "pb-[2px] border-b-2 border-solid border-[#49557e]"
              : ""
          }`}
        >
          Contact us
        </li>
      </ul>
      <div className="navbar-right flex items-center gap-10 ">
        <img src={assets.search_icon} alt="" />
        <div className="nav-bar-secarch-icon relative">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div
            className={
              getTotalCartAmount() === 0
                ? ""
                : "dot absolute min-w-[10px] min-h-[10px] bg-orange-500 rounded-md -top-2 -right-1"
            }
          ></div>
        </div>
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className="bg-transparent text-sm text-[#49557e] border border-solid border-orange-500 py-2 px-5 rounded-[50px] cursor-pointer transti hover:bg-[#fff4f2] "
          >
            Sign in
          </button>
        ) : (
          <div className="navbar-profile ">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown ">
              <li className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/myorders')} >
                <img src={assets.bag_icon} alt="" className="w-[20px]" />
                <p className="hover:text-orange-500" >Orders</p>
              </li>
              <hr />
              <li onClick={logout} className="flex items-center gap-1 cursor-pointer">
                <img src={assets.logout_icon} alt="" className="w-[20px]" />
                <p className="hover:text-orange-500" >Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
