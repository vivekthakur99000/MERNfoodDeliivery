import React from "react";
import { menu_list } from "../../assets/assets";
import './ExploreMenu.css'

function ExploreMenu({category, setCategory}) {
  return (
    <div className=" explore-menu flex flex-col gap-5  ">
      <h1 className=" text-[#262626] font-semibold  text-[24px] " >Explore Our Menu</h1>
      <p className=" max-w-[60%] text-[#262626] columns-1 " >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quos
        impedit pariatur illo dolor enim fuga nam veritatis architecto omnis.
      </p>
      <div className="explore-menu-list flex justify-between items-center gap-7 text-center mx-0 my-4 ">
        {menu_list.map((item, index) => {
            return (
                <div onClick={()=> setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
                    <img className={` ${category === item.menu_name ? ' border-2 border-solid border-orange-500 p-[2px] ' : ''} w-[7.5vw] min-w-[80px] cursor-pointer rounded-full transition-[0.2s]`} src={item.menu_image} alt="" />
                    <p className=" mt-[10px] text-[#747474] text-1.4vw cursor-pointer " >{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr className=" my-2 mx-0 h-[2px] bg-[#e2e2e2] border-none  " />
    </div>
  );
}

export default ExploreMenu;
