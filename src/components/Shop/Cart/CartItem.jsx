import { Minus, Plus, Trash2Icon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { toast } from "react-toastify";
import placeholderImage from "/public/placeholder.svg";
import {
  deleteCartItem,
  getCart,
  updateCartItemQuantity,
} from "../../../store/slice/Cart-Slice";
import { useLocation } from "react-router-dom";

const CartItem = ({ image, title, quantity, price, item }) => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const location = useLocation();
  //update cart item quantity
  function updateCartItemQty(getCartItem, typeOfAction) {
    console.log(getCartItem, typeOfAction);
    dispatch(
      updateCartItemQuantity({
        userId: userData?.id,
        productId: getCartItem.productId,
        quantity:
          typeOfAction === "plus"
            ? getCartItem.quantity + 1
            : getCartItem.quantity - 1,
      })
    ).then((data) => {
      if (data.payload.success) {
        dispatch(getCart(userData?.id));
        toast.success("Product quantity updated!");
      }
    });
  }

  //delete cart item
  function handleDeleteCartItem(getCartItem) {
    dispatch(
      deleteCartItem({
        userId: userData?.id,
        productId: getCartItem.productId,
      })
    ).then((data) => {
      console.log(data);
      if (data?.payload?.success) {
        dispatch(getCart(userData?.id));
      }
    });
  }
  return (
    <div className="w-full flex justify-between  h-[100px] shadow">
      <div className=" flex gap-5 items-center ">
        <div className="w-[80px] h-[100px]">
          <img
            src={image || placeholderImage}
            alt={title}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm">
            {title.length > 20 ? title.slice(0, 20) + "..." : title}
          </p>
          <p>
            Quantity : <span className="font-semibold">{quantity}</span>{" "}
          </p>
          <p>
            Price: <span className="font-semibold">₹{price}</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        {" "}
        <div className="pt-1 text-center px-2">
          <p>Quantity:</p>{" "}
          <div className="flex gap-3 border mt-4">
            <button
              onClick={() => updateCartItemQty(item, "minus")}
              className={`px-1  ${
                quantity === 1
                  ? "opacity-30 cursor-not-allowed"
                  : "cursor-pointer"
              } z-0`}
              disabled={quantity === 1}
            >
              <Minus />
            </button>
            <p className="font-bold">{quantity}</p>
            <button
              onClick={() => updateCartItemQty(item, "plus")}
              className="px-1 cursor-pointer"
            >
              <Plus />
            </button>
          </div>
        </div>
        {location.pathname !== "/checkout" ? (
          <div className="pt-2 pr-3">
            <button
              onClick={() => handleDeleteCartItem(item)}
              className="text-red-600 cursor-pointer"
            >
              <Trash2Icon />
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CartItem;
