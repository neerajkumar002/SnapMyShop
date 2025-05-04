import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import StarRatingComponent from "../Review/StarRatingComponent";
const ShopProductCard = ({
  id,
  image,
  title,
  price,
  averageReview,
  handleAddToCart,
}) => {
  return (
    <div className="bg-white shadow-md w-full ">
      <Link to={`${id}`}>
        <div className="bg-red-100 h-[300px]  w-full overflow-hidden ">
          <img
            src={image || "/public/placeholder.svg"}
            alt=""
            className="h-full w-full hover:scale-105 transition-transform duration-300"
          />
        </div>
      </Link>
      <div className="flex flex-col gap-2 py-3 px-3">
        <p className="h-10">{title.slice(0,30)}</p>
        <p className=" flex justify-between">
          <span>₹{price}</span>
          <span className="line-through">₹{price * 2}</span>
        </p>
        <div className="flex items-center gap-1">
          <StarRatingComponent rating={averageReview} />
          <span className="text-[1.4rem]">({averageReview})</span>
        </div>
      </div>
      <div className="pt-4">
        <button
          onClick={() => handleAddToCart(id)}
          className="flex gap-3 bg-black text-white w-full py-3 justify-center hover:bg-red-400 transition-all duration-300 cursor-pointer"
        >
          <ShoppingCart />
          Add to cart{" "}
        </button>
      </div>
    </div>
  );
};

export default ShopProductCard;
