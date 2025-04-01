import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrderDetailsForAdmin } from "../../../store/admin/order-slice";
import { format } from "date-fns";
import AdminOrderDetailItem from "./OrderDetailItem";

const orderStatus = [
  {
    lable: "pending",
    name: "PENDING",
  },
  {
    lable: "confirmed",
    name: "CONFIRMED",
  },
  {
    lable: "shipped",
    name: "SHIPPED",
  },
  {
    lable: "delivered",
    name: "DELIVERED",
  },
  {
    lable: "cancelled",
    name: "CANCELLED",
  },
];

const OrderDetailsModal = ({ id, closeModal }) => {
  const { orderDetails } = useSelector((state) => state.adminOrders);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderDetailsForAdmin(id));
    }
  }, [dispatch, id]);

  return (
    <div
      className="fixed top-0 left-0 bg-gray-500/30 w-full h-screen flex justify-center items-center"
      onClick={(e) => e.target === e.currentTarget && closeModal()}
    >
      <div className=" bg-white w-[600px] rounded-md py-2 px-4 z-30">
        <div className="flex flex-col gap-2 ">
          <h1 className="font-bold text-2xl ">Order Details</h1>
          <div className="lg:flex gap-3">
            <p className=" text-gray-500 ">
              Order Placed On:
              <span className="font-semibold ">
                {orderDetails?.orderDate
                  ? format(new Date(orderDetails?.orderDate), "MMM dd, yyyy")
                  : ""}
              </span>
            </p>
            <p className=" text-gray-500 ">
              Order Id :
              <span className="font-semibold"> {orderDetails?._id}</span>
            </p>
          </div>

          <div>
            <select
              name=""
              id=""
              onChange={(e) => console.log(e.target.value)}
              className="border outline-none rounded-md p-1"
            >
              <option value="" className="uppercase" hidden>
                {orderDetails?.orderStatus.toUpperCase()}
              </option>
              {orderStatus?.map((item) => (
                <option value={item?.lable}>{item?.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col items-center py-2 px-2 gap-3 overflow-y-auto  min-h-[100px] max-h-[200px]   ">
          {orderDetails && orderDetails.cartItems.length > 0
            ? orderDetails.cartItems.map((item) => (
                <AdminOrderDetailItem
                  key={item?.productId}
                  image={item?.image}
                  title={item?.title}
                  quantity={item?.quantity}
                  price={item?.price}
                />
              ))
            : null}
        </div>
        <div className="mt-4">
          <p className="text-gray-400">Shipped to</p>
          <p className="font-semibold">{orderDetails?.addressInfo?.fullName}</p>
          <p>rani pur more sector 2 gali no 1 haridwar</p>
          <p>{orderDetails?.addressInfo?.address}</p>
          <p>{orderDetails?.addressInfo?.city}</p>
          <p>{orderDetails?.addressInfo?.state}</p>
          <p>{orderDetails?.addressInfo?.pincode}</p>
          <p className="text-gray-400">
            Mob:{" "}
            <span className="text-black">
              {orderDetails?.addressInfo?.phone}
            </span>
          </p>
        </div>
        <div className="  flex flex-col gap-2 mt-4  ">
          <p className="py-2  text-gray-500 border-b border-gray-300">
            Price Summary
          </p>
          <div className="flex justify-between text-gray-500">
            <span className=" ">Item Total:</span>
            <span className="  font-semibold">
              ₹ {orderDetails?.totalAmount}
            </span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span className=" ">Delivery Charge:</span>
            <span className="  font-semibold">₹{0}</span>
          </div>
          <div className="flex justify-between py-2 border-t border-t-gray-300 text-gray-500">
            <span className=" ">Total Order Price:</span>
            <span className="  font-semibold">
              ₹ {orderDetails?.totalAmount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsModal;
