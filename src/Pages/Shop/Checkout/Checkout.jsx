import { ChevronDown, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import AddressCard from "../../../components/Shop/Address/AddressCard";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../store/slice/Cart-Slice";
import CartItem from "../../../components/Shop/Cart/CartItem";
import { fetchAllAddresses } from "../../../store/slice/Address-slice";
import { toast } from "react-toastify";
import { createOrder } from "../../../store/slice/Order-slice";

const Checkout = () => {
  const { userData } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.address);
  const { approvalURL } = useSelector((state) => state.order);
  const { cart } = useSelector((state) => state.cart);
  const [isShow, setIsShow] = useState(true);
  const [currentSelectedAddress, setCurrentSelectedAddress] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toastify = (message) => toast(message);

  function handleStripePayment() {
    if (currentSelectedAddress === null) {
      toastify("Please select one address to proceed");
      return;
    }
  }

  useEffect(() => {
    if (userData) {
      dispatch(getCart(userData?.id));
      dispatch(fetchAllAddresses(userData?.id));
    }
  }, [dispatch, userData]);

  const cartTotalAmount =
    cart && cart?.items?.length > 0
      ? cart?.items.reduce(
          (sum, currentItem) => sum + currentItem.price * currentItem.quantity,
          0
        )
      : 0;

  const orderData = {
    userId: userData?.id,
    cartId: cart?._id,
    cartItems: cart?.items,
    addressInfo: {
      addressId: currentSelectedAddress?._id,
      fullName: currentSelectedAddress?.fullName,
      email: currentSelectedAddress?.email,
      address: currentSelectedAddress?.address,
      city: currentSelectedAddress?.city,
      state: currentSelectedAddress?.state,
      phone: currentSelectedAddress?.phone,
      pincode: currentSelectedAddress?.pincode,
    },
    totalAmount: cartTotalAmount,
    orderStatus: "pending",
    paymentMethod: "stripe",
    paymentStatus: "pending",
    orderDate: new Date(),
    orderUpdateDate: new Date(),
    paymentId: "",
    payerId: "",
  };

  function handleStripePayment() {
    dispatch(createOrder(orderData)).then((data) => console.log(data));
  }

  if (approvalURL) {
    window.location.href = approvalURL;
  }

  return (
    <div className="py-5 px-14">
      <div className="">Home > Cart >Checkout</div>

      <div className="  ">
        <div className="flex justify-between items-center py-3">
          <p className="font-semibold"> Select an address .</p>{" "}
          <button
            onClick={() => navigate("/address/add")}
            className="flex gap-1 border rounded-md px-1 py-2"
          >
            <Plus />
            Add New Address
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {addressList && addressList.length > 0
            ? addressList.map((item) => (
                <AddressCard
                  key={item?._id}
                  id={item?._id}
                  fullName={item?.fullName}
                  address={item?.address}
                  phone={item?.phone}
                  state={item?.state}
                  city={item?.city}
                  pincode={item?.pincode}
                  item={item}
                  setCurrentSelectedAddress={setCurrentSelectedAddress}
                />
              ))
            : null}
        </div>
        <div className="cart-items py-3">
          <div className="flex justify-between font-semibold ">
            <p>Cart Details</p>{" "}
            <p
              onClick={() => setIsShow(!isShow)}
              className="flex gap-3 cursor-pointer  "
            >
              {cart?.items?.length || 0} Items <ChevronDown />
            </p>
          </div>
          <div className={`flex flex-col gap-3 py-2 ${isShow ? "hidden" : ""}`}>
            {cart?.items?.length ? (
              cart.items.map((item) => (
                <CartItem
                  key={item.productId}
                  title={item.title}
                  image={item.image}
                  quantity={item.quantity}
                  price={item.price}
                  item={item}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty 🛒</p>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 py-3 ">
          <p className="font-semibold"> Price Summary</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Order Total</p>
              <p>₹{cartTotalAmount.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between border-t border-b py-2 border-gray-200">
              <p>To Pay</p>
              <p>₹{cartTotalAmount.toFixed(2)}</p>
            </div>
            <div className="text-right">
              {" "}
              <button
                onClick={() => handleStripePayment()}
                className="bg-green-500 text-white px-2 py-2 rounded-md cursor-pointer"
              >
                Proceed to pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
