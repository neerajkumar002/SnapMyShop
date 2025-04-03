import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../store/slice/product-slice";
import { SquarePen, Trash2Icon } from "lucide-react";

const AdminProductItem = ({ id, image, title, price, category }) => {
  return (
    <div className=" bg-white shadow-md flex justify-between gap-3 rounded-md ">
      <div className="flex gap-3">
        <div className="w-[80px]  overflow-hidden ">
          <img
            src={image || "/public/placeholder.svg"}
            alt=""
            className="w-full h-full "
          />
        </div>
        <div>
          <p className="text-gray-700">{title}</p>
          <p className="text-gray-600">
            Product ID: <span className="text-gray-700">{id}</span>{" "}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-600">
              Price: <span className="text-gray-700">{price}</span>
            </p>{" "}
            <p className="text-gray-600">
              Category:
              <span className="text-gray-700">{category}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="pr-3 pt-2 flex flex-col gap-4">
        <button className="  cursor-pointer ">
          <SquarePen
            size={27}
            className="text-gray-500 hover:text-green-600 transition-colors duration-300"
          />
        </button>
        <button className=" cursor-pointer  ">
          <Trash2Icon
            size={27}
            className="text-gray-500 hover:text-red-600 transition-colors duration-300"
          />
        </button>
      </div>
    </div>
  );
};

const AdminProductsList = () => {
  const [searchProduct, setSearchProduct] = useState("");
  const [products, setProducts] = useState([]);
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  useEffect(() => {
    if (productList.length > 0) {
      setProducts(productList);
    }
  }, [productList]);

  useEffect(() => {
    const filtered = productList.filter((item) =>
      item._id.toLowerCase().includes(searchProduct.toLowerCase())
    );

    setProducts(filtered);
  }, [searchProduct]);

  return (
    <div className="py-5 px-2">
      <div>
        <div></div>
        <input
          type="text"
          placeholder="Enter Product id"
          onChange={(e) => setSearchProduct(e.target.value)}
          className="border py-1 px-1 rounded-md w-full lg:w-[500px]"
        />
      </div>
      <div className="flex flex-col gap-3 py-2">
        {products?.map((item) => (
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
