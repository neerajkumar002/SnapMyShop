import { Heart, Minus, Plus, Star, Truck } from "lucide-react";
import React from "react";

const ProductDetail = () => {
  return (
    <div className="px-6 ">
      <div className="w-full  py-6  lg:px-8">Home > Mens </div>
      <div className="flex flex-col  lg:flex-row gap-7 justify-center">
        <div className="lg:w-[500px]">
          <img src="/public/placeholder.svg" alt="" />
        </div>
        <div className="flex flex-col   gap-2 lg:w-[800px]">
          <h2 className="font-bold">Product full Title </h2>
          <p className="text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia
            enim accusantium a, possimus alias perspiciatis id deleniti ex,
            obcaecati dolorem ullam labore praesentium maxime mollitia dicta
            esse aliquam, quis soluta.
          </p>
          <div>
            <button className="bg-gray-200 w-full py-2 flex justify-center gap-3 items-center">
              <Truck /> Free Delivery
            </button>
          </div>
          <p className="line-through text-gray-400">₹300</p>
          <p className="text-xl text-red-600 font-semibold">₹800</p>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
