import { Delete, Minus, Plus, Trash2Icon, TrashIcon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCartItem,
  updateCartItemQuantity,
} from "../../../store/slice/Cart-Slice";
import { toast } from "react-toastify";

const CartItem = ({ image, title, quantity, price, item }) => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const notify = (message) => toast(message);

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
        notify("Product quantity updated!");
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
    );
  }

  return (
    <div className="w-full flex justify-between  h-[100px] shadow">
      <div className=" flex gap-5 items-center ">
        <div className=" h-full">
          <img
            src={image || "/public/placeholder.svg"}
            alt=""
            className="h-full"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">{title}</p>
          <p>
            Quantity : <span className="font-semibold">{quantity}</span>{" "}
          </p>
          <p>
            Price: <span className="font-semibold">₹{price}</span>{" "}
          </p>
        </div>
      </div>
      <div className="pt-1 text-center">
        <p>Quantity:</p>{" "}
        <div className="flex gap-3 border mt-4">
          <button
            onClick={() => updateCartItemQty(item, "minus")}
            className={`px-1  ${
              quantity === 1
                ? "opacity-30 cursor-not-allowed"
                : "cursor-pointer"
            }`}
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
      <div className="pt-3 pr-3">
        <button
          onClick={() => handleDeleteCartItem(item)}
          className="text-red-600 cursor-pointer"
        >
          <Trash2Icon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
