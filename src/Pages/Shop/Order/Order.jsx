import React from "react";
import ShopOrderItem from "../../../components/Shop/Order/OrderItem";

const ShopOrder = () => {
  return (
    <div className="py-5">
      <div className="px-14">
        Home > Orders
      </div>
      <div>
        <h1 className="font-bold text-3xl text-center">Your Orders</h1>
      </div>
      <div className="flex flex-col items-center py-10 gap-3  px-5 ">
        <ShopOrderItem />
        <ShopOrderItem />
        <ShopOrderItem />
        <ShopOrderItem />
        <ShopOrderItem />
        <ShopOrderItem />
      </div>
      
    </div>
  );
};

export default ShopOrder;
