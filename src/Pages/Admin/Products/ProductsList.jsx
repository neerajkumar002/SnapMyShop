import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../store/slice/product-slice";
import AdminProductItem from "../../../components/Admin/Products/ProductItem";
import AdminProductItemShimmer from "../../../components/Admin/Products/Shimmer";
import { deleteProduct } from "../../../store/admin/product-slice";
import { toast } from "react-toastify";

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

  function handleProductDelete(id) {
    dispatch(deleteProduct(id)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        toast.success(data?.payload?.message);
      }
    });
  }

  return (
    <div className="py-5 px-2">
      <div>
        <div></div>
        <input
          type="text"
          placeholder="Enter Product id"
          onChange={(e) => setSearchProduct(e.target.value)}
          className="border py-1 px-1 rounded-md w-full lg:w-[500px]"
          disabled={productList.length === 0}
        />
      </div>
      {productList.length === 0 ? (
        <AdminProductItemShimmer />
      ) : (
        <div className="flex flex-col gap-3 py-2">
          {products?.map((item) => (
            <AdminProductItem
              key={item?._id}
              id={item?._id}
              image={item?.image}
              title={item?.title}
              price={item?.price}
              category={item?.category}
              handleProductDelete={handleProductDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminProductsList;
