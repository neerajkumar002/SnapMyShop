import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../store/slice/product-slice";

const AdminProductItem = ({ id, image, title, price, category }) => {
  return (
    <div className=" bg-white shadow-md flex gap-3 rounded-md ">
      <div className="w-[50px] h-[60px] overflow-hidden ">
        <img src={image || "/public/placeholder.svg"} alt="" className="w-full h-full "/>
      </div>
      <div>
        <p>{title}</p>
        <div className="flex items-center gap-3">
          <p>Price: {price}</p> <p>Category: {category}</p>
        </div>
      </div>
    </div>
  );
};

const AdminProductsList = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(productList);
  return (
    <div className="py-5 px-2">
      <div>
        <input
          type="text"
          placeholder="Enter Product id"
          className="border py-1 px-1 rounded-md w-full lg:w-[500px]"
        />
      </div>
      <div className="flex flex-col gap-3 py-2">
        {productList?.map((item) => (
          <AdminProductItem
            key={item?._id}
            id={item?._id}
            image={item?.image}
            title={item?.title}
            price={item?.price}
            category={item?.category}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminProductsList;
