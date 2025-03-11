import React, { useEffect } from "react";
import ProductCard from "../../../components/Shop/Products/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../../store/slice/product-slice";

const ProductsListing = () => {
  const { productList } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);
 
  return (
    <div className="w-full px-6 ">
      <div className="w-full  py-6  lg:px-8">Home > Mens </div>
      <div>
        {/* sidebar */}
        <div className="hidden">
          <div className="">
            <h3>Category</h3>
            <label htmlFor="">
              <input type="radio" />
              Mens
            </label>
            <label htmlFor="">
              <input type="radio" />
              Womens
            </label>
          </div>
        </div>
        {/* main products */}
        <div>
          <div className="flex justify-between lg:px-8  ">
            <p>Products</p>
            <select name="" id="" className="border px-2 py-1">
              <option value="">Sort By</option>
              <option value="">Ratings</option>
              <option value="">Price - High to Low</option>
              <option value="">Price - Low to High</option>
            </select>
          </div>
          <div className="grid gap-3 lg:grid-cols-4 lg:place-items-center py-4">
            {/* card */}
            {productList && productList.length > 0
              ? productList.map((item) => (
                  <ProductCard
                    key={item?._id}
                    id={item?._id}
                    title={item?.title}
                    price={item?.price}
                    image={item?.image}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsListing;
