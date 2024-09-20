import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function List({ url }) {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });

    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="list add all ">
      <p>All foods list</p>

      <div className="list-table">
        <div className="list-table-format title grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2 px-4 py-3 border border-solid border-[#c9c9c9] text-[13px] bg-[#f9f9f9]">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list &&
          list.map((item, index) => {
            return (
              <div
                key={index}
                className="list-table-format grid grid-cols-[0.5fr_2fr_1fr_1fr_0.5fr] items-center gap-2 px-4 py-3 border border-solid border-[#c9c9c9] text-[13px]  "
              >
                <img
                  src={`${url}/images/` + item.image}
                  alt=""
                  className="w-[150px]"
                />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>${item.price}</p>
                <p
                  className="cursor-pointer"
                  onClick={() => removeFood(item._id)}
                >
                  X
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default List;
