import React from "react";

function Header() {
  return (
    <div className="header h-[34vw] my-7 mx-auto bg-[url('/header_img.png')] bg-no-repeat bg-contain relative  ">
      <div className="header-content absolute flex flex-col items-start gap-[1vw] max-w-[50%] bottom-[10%] left-[6vw] ">
        <h2 className=" font-[500] text-white text-[3.5vw]">
          Order your favourate food here
        </h2>
        <p className=" text-white text-[1vw] ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          ex exercitationem sequi quisquam consequuntur, provident ad, obcaecati
          repellendus consequatur, ullam facere sunt aliquid nulla? Quos impedit
          perferendis rerum numquam similique. Aut, modi.
        </p>
        <button className=" border-none text-[#747474] font-[500] py-[1vw] px-[2.3vw] bg-white text-[max(1vw, 13px)] rounded-[50px] ">
          View menu
        </button>
      </div>
    </div>
  );
}

export default Header;
