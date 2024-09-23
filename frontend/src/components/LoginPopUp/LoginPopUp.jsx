import React, { useContext, useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

function LoginPopUp({ setShowLogin }) {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();

    let newUrl = url;

    if (currState === "Login") {
      newUrl += "api/user/login";
    } else {
      newUrl += "api/user/register";
    }

    const response = await axios.post(newUrl, data);

    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      alert(response.data.message);
    }
  };

  return (
    <div className="login-popup absolute z-10 w-full h-full bg-[#00000090] grid ">
      <form
        onSubmit={onLogin}
        className="login-popup-container place-self-center max-w-[330px] text-[#808080] bg-white flex flex-col gap-6 py-6 px-8 rounded-lg text-[14px]  "
      >
        <div className="login-popup-title flex justify-between items-center text-black    ">
          <h2 className="text-[22px]">{currState}</h2>
          <img
            src={assets.cross_icon}
            onClick={() => setShowLogin(false)}
            alt=""
            className=" w-[16px] cursor-pointer "
          />
        </div>
        <div className="login-popup-input flex flex-col gap-5  ">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className=" outline-none border-2 border-solid border-[#c9c9c9] rounded-lg p-2 "
            />
          )}

          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className=" outline-none border-2 border-solid border-[#c9c9c9] rounded-lg p-2 "
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
            className=" outline-none border-2 border-solid border-[#c9c9c9] rounded-lg p-2 "
          />
        </div>
        <button
          type="submit"
          className=" border-none p-2 rounded-md text-white bg-orange-500 text-[15px] cursor-pointer "
        >
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition flex items-start gap-2 -mt-4 ">
          <input type="checkbox" required className=" mt-1" />
          <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?
            <span
              className="text-orange-500 font-medium cursor-pointer  "
              onClick={() => setCurrState("Sign up")}
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              className="text-orange-500 font-medium  cursor-pointer "
              onClick={() => setCurrState("Login")}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopUp;
