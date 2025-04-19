import { format } from "date-fns";
import { ArrowRight, ReceiptText } from "lucide-react";

const AdminOrderItem = ({
  id,
  totalAmount,
  totalItems,
  orderStatus,
  orderDate,
  setShowModal,
  setCurrentOrderId,
}) => {
  return (
    <div
      onClick={() => {
        setShowModal(true);
        setCurrentOrderId(id);
      }}
      className="w-full flex justify-between  h-[100px] shadow hover:scale-102 transition-transform duration-300 cursor-pointer"
    >
      <div className=" flex gap-5 items-center px-2 w-full ">
        <div className="flex flex-col gap-2 lg:gap-7  ">
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
            <p className="font-semibold text-sm text-gray-600">
              Order ID: <span>{id}</span>
            </p>
            <p className="font-semibold text-sm">
              Total Amount: ₹ {totalAmount}
            </p>
          </div>
          <div className="flex gap-3">
            <p>{totalItems?.length} Items</p>
            <p>{format(new Date(orderDate), "MMMM dd, yyyy, hh:mm aa")}</p>
          </div>
        </div>
      </div>

      <div className="pt-3 pr-3">
        <p
          className={`${
            orderStatus === "confirmed"
              ? "bg-green-600"
              : orderStatus === "cancelled"
              ? "bg-red-400"
              : "bg-black"
          } rounded-full px-2 text-white mt-4`}
        >
          {orderStatus}
        </p>
      </div>
    </div>
  );
};

export default AdminOrderItem;
