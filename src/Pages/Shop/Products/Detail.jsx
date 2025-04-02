import { Heart, Minus, Plus, Star, Truck } from "lucide-react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../../store/slice/product-slice";

import ProductDetailsShimmer from "../../../components/Shop/Shimmer/ProductDetailsShimmer";
import ReviewCard from "../../../components/Shop/Review/ReviewCard";

const ProductDetail = () => {
  const { productDetail, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

  if (isLoading) return <ProductDetailsShimmer />;

  return (
    <div className="lg:px-6 ">
      <div className="w-full  py-6  lg:px-8">Home > Mens </div>

      <div className="flex flex-col  lg:flex-row gap-7 justify-center lg:px-8">
        <div className="lg:w-[500px]">
          <img src={productDetail?.image || "/public/placeholder.svg"} alt="" />
        </div>
        <div className="flex flex-col   gap-2 lg:w-[800px]">
          <h2 className="font-bold">{productDetail?.title} </h2>
          <p className="text-sm">{productDetail?.description}</p>
          <div>
            <button className="bg-gray-200 w-full py-2 flex justify-center gap-3 items-center">
              <Truck /> Free Delivery
            </button>
          </div>
          <p className="line-through text-gray-400">
            ₹{productDetail?.price * 2}
          </p>
          <p className="text-xl text-red-600 font-semibold">
            ₹{productDetail?.price}
          </p>
          <div className="flex gap-2">
            <Star fill="gold" stroke="none" />
            <Star fill="gold" stroke="none" />
            <Star fill="gold" stroke="none" />
            <Star fill="gold" stroke="none" />
          </div>
          <div className="flex items-center gap-3 py-5">
            Quantity
            <div className="flex  items-center  border">
              <button className="px-3 py-2 text-2xl font-semibold">
                <Minus />
              </button>
              <div>1</div>
              <button className="px-3 py-2 text-2xl font-semibold">
                <Plus />
              </button>
            </div>
            <button className="bg-red-400 py-2 px-2">Add To Cart</button>
            <button className="border border-gray-300 py-2 px-2">
              <Heart />
            </button>
          </div>
          <div className="mb-3">
            <h3 className="font-semibold text-xl py-2">Reviews</h3>
            <div className="flex flex-col gap-2 min-h-[100px] max-h-[240px] overflow-y-auto">
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
