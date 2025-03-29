import React, { useState } from "react";

const AddProductForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  console.log(selectedImage);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  }

  return (
    <div className="  ">
      <div className="px-3 py-2 ">
        <h3 className="font-semibold text-xl">Add New Product</h3>
      </div>
      <div>
        <form action="" className="  flex flex-col gap-3 px-3">
          <div>
            <div className="  w-[100px] h-[100px] cursor-pointer">
              <label htmlFor="productImage">
                <img
                  src={selectedImage || "/public/upload.png"}
                  alt=""
                  className="w-full h-full"
                />
              </label>
            </div>
            <input
              type="file"
              id="productImage"
              onChange={(e) => handleImageChange(e)}
              className="hidden"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="">
              Product Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Product Title"
              className="border rounded-md px-2 py-2 outline-blue-300/40"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="">
              Product Description
            </label>
            <textarea
              type="text"
              id="description"
              placeholder="Product Description"
              className="border rounded-md px-2 py-2 outline-blue-300/40"
            />
          </div>
          <div className="flex justify-between gap-2 lg:w-[400px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="categroy" className="">
                Product Categroy
              </label>
              <select
                name="categroy"
                id="categroy"
                className="border rounded-md py-2 w-[150px] lg:w-[200px]"
              >
                <option value="mens-clothing">Men</option>
                <option value="womens-clothing">Women</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="price" className="">
                Product Price
              </label>
              <input
                type="number"
                id="price"
                placeholder="100"
                className="border w-[150px] rounded-md px-2 py-2 outline-blue-300/40"
              />
            </div>
          </div>
          <div className="">
            <button className="bg-blue-300 w-full py-2 font-bold text-white rounded-md hover:bg-blue-500 cursor-pointer ">
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
