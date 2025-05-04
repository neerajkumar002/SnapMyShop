import { Heart, Truck } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from "../../../store/slice/product-slice";

import ProductDetailsShimmer from "../../../components/Shop/Shimmer/ProductDetailsShimmer";
import ReviewCard from "../../../components/Shop/Review/ReviewCard";
import { addToCart } from "../../../store/slice/Cart-Slice";
import { toast } from "react-toastify";
import { fetchAllReviews } from "../../../store/slice/Review-slice";
import ReviewModal from "../../../components/Shop/Review/ReviewModal";
import StarRatingComponent from "../../../components/Shop/Review/StarRatingComponent";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { userData } = useSelector((state) => state.auth);
  const { productDetail, isLoading } = useSelector((state) => state.product);
  const { reviews } = useSelector((state) => state.reviews);

  const [open, isOpen] = useState(false);

  useEffect(() => {
    if (id) {
      dispatch(getProductDetail(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (id) {
      dispatch(fetchAllReviews(id));
    }
  }, [dispatch, id]); 

  function handleAddToCart() {
    if (!userData) {
      toast.warn("Please login first!");
      return;
    } else {
      dispatch(
        addToCart({ userId: userData?.id, productId: id, quantity: 1 })
      ).then((data) => {
        console.log(data);
        if (data?.payload?.success) {
          toast.success(data?.payload?.message);
        }
      });
    }
  }

  function closeModal() {
    isOpen(false);
  }
 

  if (isLoading) return <ProductDetailsShimmer />;

  return (
    <div className="lg:px-6 ">
     
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

          <StarRatingComponent rating={productDetail?.averageReview} />
          <div className="flex items-center gap-3 py-5">
            <button
              onClick={() => handleAddToCart()}
              className="bg-red-400 py-2 px-2 cursor-pointer"
            >
              Add To Cart
            </button>
            <button className="border border-gray-300 py-2 px-2 cursor-pointer">
              <Heart />
            </button>
          </div>
          <div className="mb-3">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-xl py-2">
                Reviews ({reviews.length})
              </h3>
              {userData && (
                <button
                  onClick={() => isOpen(true)}
                  className="bg-blue-400 text-white rounded-md px-3 py-1 hover:bg-blue-500 transition-colors duration-300 cursor-pointer"
                >
                  Add Review
                </button>
              )}
            </div>
            {open && (
              <ReviewModal
                closeModal={closeModal}
                userId={userData?.id}
                fullName={userData?.fullName}
                productId={id}
              />
            )}
            <div className="flex flex-col gap-2 min-h-[100px] max-h-[240px] overflow-y-auto">
              {reviews &&
                reviews.map((item) => (
                  <ReviewCard
                    key={item?._id}
                    fullName={item?.fullName}
                    reviewMessage={item?.reviewMessage}
                    reviewValue={item?.reviewValue}
                    dateTime={item?.createdAt}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
