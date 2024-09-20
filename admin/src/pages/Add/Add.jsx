import React, { useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

function Add({url}) {
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message)
    } else {
      toast.error(response.data.message)
    }
  };

  return (
    <div className="add w-[70%] ml-[5vw] mt-12 text-[#6d6d6d] text-[16px] ">
      <form className=" all gap-5" onSubmit={onSubmitHandler}>
        <div className="all add-img-upload   ">
          <p>Upload image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-[120px]"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </div>
        <div className="all add-product-name w-[40%] ">
          <p>Product name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type="text"
            name="name"
            placeholder="Type here..."
            className=" p-3 "
          />
        </div>
        <div className="all add-product-desc w-[40%] ">
          <p>Product description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description}
            rows="6"
            name="description"
            placeholder="Write content here..."
            className="p-3"
            required
          ></textarea>
        </div>
        <div className="all add-category-price flex gap-7 ">
          <div className="add-category">
            <p>Product category</p>
            <select
              onChange={onChangeHandler}
              name="category"
              className="max-w-[120px] p-3 "
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Desert">Desert</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure veg">Pure veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="all add-price">
            <p>Product price</p>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="Number"
              name="price"
              placeholder="$20"
              className="max-w-[120px] p-3 "
            />
          </div>
        </div>
        <button
          type="submit"
          className="add-btn maw-w-[120px] border-none p-2 bg-black text-white cursor-pointer rounded-md "
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default Add;
