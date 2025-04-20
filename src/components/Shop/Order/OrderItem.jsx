import { ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
const ShopOrderItem = ({
  id,
  totalAmount,
  totalItems,
  orderStatus,
  orderDate,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/orders-details/${id}`)}
      className="w-full flex justify-between   h-[100px] shadow cursor-pointer"
    >
      <div className=" flex gap-5 items-center px-2 ">
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-sm">
            Order ID: <span>{id}</span>
          </p>
          <p>{totalItems} Items</p>
          <p>
            {orderDate &&
              format(new Date(orderDate), "MMMM dd, yyyy, hh:mm aa")}
          </p>
        </div>
      </div>

      <div className="pt-3 pr-3">
        <p className="font-semibold ">₹{totalAmount.toFixed(2)}</p>
        <p
          className={` rounded-full px-2 text-white mt-4 ${
            orderStatus === "pending"
              ? "bg-orange-500"
              : orderStatus === "confirmed"
              ? "bg-blue-500"
              : orderStatus === "delivered"
              ? "bg-green-500"
              : "bg-red-500"
          }`}
        >
          {orderStatus}
        </p>
      </div>
    </div>
  );
};

export default ShopOrderItem;
