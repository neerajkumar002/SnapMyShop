import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct } from "../../../store/admin/product-slice";
import placeholder from "/public/upload.png";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.adminProduct);
  const [selectedImage, setSelectedImage] = useState(null);
  const { register, handleSubmit, reset } = useForm();

  function handleImageChange(e) {
    const imageFile = e.target.files[0];
    if (imageFile) {
      setSelectedImage(URL.createObjectURL(imageFile));
    }
  }

  console.log(isLoading);

  const handleAddProductForm = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", data.image[0]);

    dispatch(addNewProduct(formData)).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        reset();
        setSelectedImage(null);
      }
    });
  };

  return (
    <div className="  ">
      <div className="px-3 py-2 ">
        <h3 className="font-semibold text-xl">Add New Product</h3>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(handleAddProductForm)}
          className="  flex flex-col gap-3 px-3"
        >
          <div>
            <div className="  w-[100px] h-[100px] cursor-pointer">
              <label htmlFor="productImage">
                <img
                  src={selectedImage || placeholder}
                  alt={selectedImage || placeholder}
                  className="w-full h-full"
                />
              </label>
            </div>
            <input
              type="file"
              id="productImage"
              {...register("image", {
                required: true,
                onChange: (e) => handleImageChange(e),
              })}
              accept="image/*"
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
              {...register("title", { required: true })}
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
              {...register("description", { required: true })}
              className="border rounded-md px-2 py-2 outline-blue-300/40"
            />
          </div>
          <div className="flex justify-between gap-2 lg:w-[400px]">
            <div className="flex flex-col gap-2">
              <label htmlFor="category" className="">
                Product category
              </label>
              <select
                name="category"
                id="category"
                {...register("category", { required: true })}
                className="border rounded-md py-2  w-[150px] lg:w-[200px]"
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
                {...register("price", { required: true })}
                className="border w-[150px] rounded-md px-2 py-2 outline-blue-300/40"
              />
            </div>
          </div>
          <div className="">
            <button className="bg-blue-300 w-full py-2 font-bold text-white rounded-md hover:bg-blue-500 cursor-pointer ">
              {isLoading ? (
                <ClipLoader color="blue" size={20} loading={isLoading} />
              ) : (
                "ADD"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
