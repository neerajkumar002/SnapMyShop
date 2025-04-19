import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  updateProductDetails,
} from "../../../store/admin/product-slice";
import { useNavigate, useParams } from "react-router-dom";
import placeholderImage from "/public/upload.png";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const EditProductForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { register, handleSubmit, reset } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const { productDetail, isLoading } = useSelector(
    (state) => state.adminProduct
  );

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [dispatch, id]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) setSelectedImage(URL.createObjectURL(file));
  }

  const handleEditProductForm = (data) => {
    console.log(data);
    console.log("edit");
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    if (data.file?.[0]) {
      formData.append("image", data.file[0]);
    } else if (productDetail?.image) {
      formData.append("image", productDetail?.image);
    }

    dispatch(updateProductDetails({ formData: formData, productId: id })).then(
      (data) => {
        if (data?.payload?.success) {
          dispatch(getProductById(id));
          toast.success(data?.payload?.message);
          navigate("/admin/list");
        }
      }
    );
  };

  useEffect(() => {
    if (productDetail) {
      reset({
        title: productDetail?.title || "",
        description: productDetail?.description || "",
        price: productDetail?.price || "",
        category: productDetail?.category || "",
        image: productDetail?.image || "",
      });
    }
  }, [productDetail, reset]);

  return (
    <div className="py-3  ">
      <div className="px-3 py-2 ">
        <h3 className="font-semibold text-xl">Edit Product</h3>
      </div>
      <div>
        <form
          onSubmit={handleSubmit(handleEditProductForm)}
          className="  flex flex-col gap-3 px-3"
        >
          <div>
            <div className="  w-[100px] h-[100px] cursor-pointer">
              <label htmlFor="productImage">
                <img
                  src={
                    selectedImage || productDetail?.image || placeholderImage
                  }
                  alt=""
                  className="w-full h-full"
                />
              </label>
            </div>
            <input
              type="file"
              id="productImage"
              {...register("file", { onChange: (e) => handleImageChange(e) })}
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
            <button
              type="submit"
              className="bg-blue-300 w-full py-2 font-bold text-white rounded-md hover:bg-blue-500 cursor-pointer "
            >
              {isLoading ? <ClipLoader color="blue" size={20} /> : "Edit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
