import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="footer text-[#d9d9d9] bg-[#323232] flex flex-col items-center gap-7 px-[8vw] py-5 pt-20 mt-9 ">
      <div className="footer-content w-full grid grid-cols-[2fr_1fr_1fr] gap-20 ">
        <div className=" flex flex-col items-start gap-3">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Reprehenderit excepturi dolorum nemo.
          </p>
          <div className="footer-social-icon flex ">
            <img className="w-[40px] mr-4" src={assets.facebook_icon} alt="" />
            <img className="w-[40px] mr-4" src={assets.twitter_icon} alt="" />
            <img className="w-[40px] mr-4" src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className=" flex flex-col items-start">
          <h2 className=" text-white">COMPANY</h2>
          <ul>
            <li className=" mb-2 list-none">Home</li>
            <li className=" mb-2 list-none">About us</li>
            <li className=" mb-2 list-none">Delivery</li>
            <li className=" mb-2 list-none">Privacy policy</li>
          </ul>
        </div>
        <div className=" flex flex-col items-start">
          <h2 className="text-white">Get in touch</h2>
          <ul>
            <li className=" mb-2 list-none">+1-212-456-7890</li>
            <li className=" mb-2 list-none">contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr className="w-full h-1 my-0 mx-5" />

      <p className="footer-copyright">
        &#169; copyright 2024 tomato.com All rights reserved
      </p>
    </div>
  );
}

export default Footer;
