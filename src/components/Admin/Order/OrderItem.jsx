import { ArrowRight } from "lucide-react";

const AdminOrderItem = ({
  id,
  totalAmount,
  totalItems,
  status,
  setShowModal,
  setCurrentOrderId,
}) => {
  return (
    <div className="w-full flex justify-between lg:w-[800px] h-[100px] shadow">
      <div className=" flex gap-5 items-center px-2 ">
        {/* <div className="w-[100px]">
        <img src="/public/placeholder.svg" alt="" className="object-cover" />
      </div> */}
        <div className="flex flex-col gap-2">
          <p className="font-semibold">
            Order ID: <span>{id}</span>
          </p>
          <p>{totalItems} Items</p>
          {/* <p>
              {orderDate &&
                format(new Date(orderDate), "MMMM dd, yyyy, hh:mm aa")}
            </p> */}
        </div>
      </div>

      <div className="pt-3 pr-3">
        <p className="font-bold">₹{totalAmount}</p>
        <p className="bg-green-500 rounded-full px-2 text-white mt-4">
          {status}
        </p>
      </div>
      <div className="flex items-center pr-2">
        <button
          onClick={() => {
            setShowModal(true);
            setCurrentOrderId(id);
          }}
          className="text-red-600 cursor-pointer flex gap-2"
        >
          Order Details <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default AdminOrderItem;
