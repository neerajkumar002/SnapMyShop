import { ArrowRight, Info } from "lucide-react";
import React from "react";

const ShopOrderItem = () => {
  return (
    <div className="w-full flex justify-between lg:w-[800px] h-[100px] shadow">
      <div className=" flex gap-5 items-center ">
        <div className="w-[100px]">
          <img src="/public/placeholder.svg" alt="" className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Order ID: <span>12345789654</span>
          </p>
          <p>8 Items</p>
          <p>March 5, 2025, 11:13 PM</p>
        </div>
      </div>

      <div className="pt-3 pr-3">
        <p className="font-bold">₹8787</p>
        <p className="bg-green-500 rounded-full px-2 text-white mt-4">PLACED</p>
      </div>
      <div className="flex items-center pr-2">
        <button className="text-red-600 cursor-pointer flex gap-2">
          Order Details <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ShopOrderItem;
