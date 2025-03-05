import CartItem from "../../../components/Shop/Cart/CartItem";

const Cart = () => {
  return (
    <div className="py-5">
      <div>
        <h1 className="font-bold text-3xl text-center">Your Shopping Cart</h1>
      </div>
      <div className="flex flex-col items-center py-10 gap-3  px-5 ">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="flex justify-end pr-6 lg:pr-92  ">
        <div className="text-right flex flex-col gap-1">
          <p className="text-gray-500">
            SubTotal: <span className="text-green-500 font-semibold">₹280.11</span>
          </p>
          <p className="text-gray-500">
            Shipping: <span className="text-green-500 font-semibold">Free</span>
          </p>
          <p className="text-gray-500">
            Taxes: <span className="text-green-500 font-semibold">₹10.00</span>
          </p>
          <p className="text-gray-500  text-2xl">
            Total: <span className="text-red-400 font-bold">₹290.11</span>
          </p>
          <div className="pt-4">
            <button className="bg-green-400 rounded text-white px-5 py-3 font-bold">Confirm Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
