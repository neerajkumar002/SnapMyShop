import { ChevronDown, PenIcon, Plus } from "lucide-react";
import React from "react";
import AddressCard from "../../../components/Shop/Address/AddressCard";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className="py-5 px-14">
      <div className="">Home > Cart >Checkout</div>

      <div className="  ">
        <div className="flex justify-between items-center py-3">
          <p className="font-semibold"> Select an address .</p>{" "}
          <button className="flex gap-1 border rounded-md px-1 py-2">
            <Plus />
            Add New Address
          </button>
        </div>
        <div className="flex flex-col gap-2">
          <AddressCard />
          <AddressCard />
          <AddressCard />
        </div>
        <div className="cart-items py-3">
          <div className="flex justify-between font-semibold ">
            <p>Cart Details</p>{" "}
            <p className="flex gap-3">
              3 Items <ChevronDown />
            </p>
          </div>
          <div>cart items....</div>
        </div>

        <div className="border-t border-gray-200 py-3 ">
          <p className="font-semibold"> Price Summary</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <p>Order Total</p>
              <p>₹11110</p>
            </div>
            <div className="flex justify-between">
              <p>Shipping</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between border-t border-b py-2 border-gray-200">
              <p>To Pay</p>
              <p>10000</p>
            </div>
            <div className="text-right">
              {" "}
              <button
                onClick={() => navigate("/address/add")}
                className="bg-green-500 text-white px-2 py-2 rounded-md"
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
