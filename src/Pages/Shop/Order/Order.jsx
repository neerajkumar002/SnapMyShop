import { useEffect } from "react";
import ShopOrderItem from "../../../components/Shop/Order/OrderItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../../../store/slice/Order-slice";

const ShopOrder = () => {
  const { userData } = useSelector((state) => state.auth);
  const { orderList } = useSelector((state) => state.order);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userData) {
      dispatch(fetchOrders(userData?.id));
    }
  }, [dispatch, userData]);

  console.log(orderList);

  return (
    <div className="py-5">
      <div className="px-14">Home > Orders</div>
      <div>
        <h1 className="font-bold text-3xl text-center">Your Orders</h1>
      </div>
      <div className="flex flex-col items-center py-10 gap-3  px-5 ">
        {orderList && orderList.length > 0
          ? orderList.map((item) => (
              <ShopOrderItem
                key={item?._id}
                id={item?._id}
                totalAmount={item?.totalAmount}
                totalItems={item?.cartItems.length}
                orderStatus={item?.orderStatus}
                orderDate={item?.orderDate}
              />
            ))
          : null}{" "}
      </div>
    </div>
  );
};

export default ShopOrder;
