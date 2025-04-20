import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../../components/Shop/Cart/CartItem";
import { useEffect } from "react";
import { getCart } from "../../../store/slice/Cart-Slice";
import { useNavigate } from "react-router-dom";
import { CaseLower } from "lucide-react";

const Cart = () => {
  const { userData } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      dispatch(getCart(userData?.id));
    }
  }, [dispatch, userData]);

  const cartTotal =
    cart && cart?.items?.length > 0
      ? cart.items.reduce(
          (sum, currentItem) => sum + currentItem.price * currentItem.quantity,
          0
        )
      : 0;

 

  return (
    <div className="py-5">
      { !cart.items || cart.items?.length === 0 ? (
        <div className="text-center py-10">
          <h1 className="font-semibold text-2xl text-gray-400">
            Your cart is empty
          </h1>
          <button
            onClick={() => navigate("/products")}
            className="bg-red-500 text-white px-3 py-2  rounded-md mt-5 cursor-pointer"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="font-bold text-3xl text-center">
              Your Shopping Cart
            </h1>
          </div>
          <div className="flex flex-col   items-center py-10   ">
            <div className="w-full flex flex-col  gap-3 lg:w-[800px]">
              {cart?.items?.map((item) => (
                <CartItem
                  key={item.productId}
                  title={item.title}
                  image={item.image}
                  quantity={item.quantity}
                  price={item.price}
                  item={item}
                />
              ))}
            </div>
            <div className=" w-full lg:w-[800px] py-4">
              <div className="text-right flex flex-col gap-1">
                <p className="text-gray-500">
                  SubTotal:{" "}
                  <span className="text-green-500 font-semibold">
                    ₹{cartTotal.toFixed(2)}
                  </span>
                </p>
                <p className="text-gray-500">
                  Shipping:{" "}
                  <span className="text-green-500 font-semibold">Free</span>
                </p>
                <p className="text-gray-500">
                  Taxes:{" "}
                  <span className="text-green-500 font-semibold">₹10.00</span>
                </p>
                <p className="text-gray-500  text-2xl">
                  Total:{" "}
                  <span className="text-red-400 font-bold">
                    ₹{(cartTotal + 10).toFixed(2)}
                  </span>
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => navigate("/checkout")}
                    className="bg-green-400 rounded text-white px-5 py-3 font-bold cursor-pointer"
                  >
                    Confirm Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
