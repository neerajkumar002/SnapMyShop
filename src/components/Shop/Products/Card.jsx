import { ShoppingCart, Star } from "lucide-react";

function ProductCard() {
  return (
    <div className=" lg:w-[300px]   ">
      <div className="bg-red-100 ">
        <img src="/public/placeholder.svg" alt="" className="" />
      </div>
      <div className="flex flex-col gap-2 py-3 ">
        <p className="font-semibold">Product Title</p>
        <p className=" flex justify-between">
          <span>₹300</span>
          <span className="line-through">₹900</span>
        </p>
        <div className="flex gap-1">
          <Star fill="gold" stroke="none" />
          <Star fill="gold" stroke="none" />
          <Star fill="gold" stroke="none" />
          <Star fill="gold" stroke="none" />
          <Star fill="gold" stroke="none" />
          <span>(39)</span>
        </div>
      </div>
      <div className="pt-4">
        <button className="flex items-center gap-2 w-full  bg-black text-white rounded justify-center py-2">
          <ShoppingCart />
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
