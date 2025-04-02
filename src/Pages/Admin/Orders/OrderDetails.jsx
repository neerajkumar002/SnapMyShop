import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOrderDetails } from "../../../store/slice/Order-slice";
import { format } from "date-fns";

const OrderDetailItem = ({ title, image, price, quantity }) => {
  return (
    <div className="w-full flex justify-between lg:w-[800px] h-[80px] shadow rounded-md">
      <div className=" flex lg:gap-3 items-center    ">
        <div className="w-[100px] h-[80px]">
          <img
            src={image || "/public/placeholder.svg "}
            alt=""
            className=" h-full"
          />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-semibold">{title}</p>
          <div className="flex gap-2">
            <p>
              Price: <span className="font-semibold">₹ {price}</span>
            </p>
            <p>
              Qty: <span className="font-semibold">₹ {quantity}</span>
            </p>
            <p>
              Total Amount:{" "}
              <span className="font-semibold">
                ₹ {Number(price) * quantity}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminOrderDetails = () => {
  const { id } = useParams();
  const { orderDetails } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchOrderDetails(id));
    }
  }, [dispatch, id]);
  console.log(orderDetails);
  return (
    <div className="py-5">
      <div className="px-8  py-5 lg:px-14">Home > Orders</div>
      <div className="flex flex-col items-center px-8">
        <div className="  lg:w-[800px]">
          <div className="flex flex-col gap-2 ">
            <h1 className="font-bold text-2xl ">Order Details</h1>
            <div className="lg:flex gap-3">
              <p className=" text-gray-500 ">
                Order Placed On:
                <span className="font-semibold ">
                  {orderDetails?.orderDate
                    ? format(new Date(orderDetails?.orderDate), "MMM dd, yyyy")
                    : ""}{" "}
                </span>
              </p>
              <p className=" text-gray-500 ">
                Order Id :
                <span className="font-semibold"> {orderDetails?._id}</span>
              </p>
            </div>

            <p>
              <span className="bg-green-400 rounded-full px-3 text-white py-1 text-sm ">
                {orderDetails?.orderStatus}
              </span>
            </p>
          </div>
          <div className="flex flex-col items-center py-10 gap-3    ">
            {orderDetails && orderDetails.cartItems.length > 0
              ? orderDetails.cartItems.map((item) => (
                  <OrderDetailItem
                    key={item?.productId}
                    image={item?.image}
                    title={item?.title}
                    quantity={item?.quantity}
                    price={item?.price}
                  />
                ))
              : null}
          </div>
          <div>
            <p className="text-gray-400">Shipped to</p>
            <p className="font-semibold">
              {orderDetails?.addressInfo?.fullName}
            </p>
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
    </div>
  );
};

export default AdminOrderDetails;
