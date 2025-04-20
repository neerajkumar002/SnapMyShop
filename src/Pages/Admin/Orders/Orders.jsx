import { ArrowRight, CookingPot } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrdersForAdmin } from "../../../store/admin/order-slice";
import OrderDetailsModal from "../../../components/Admin/Order/OrderDetailsModal";
import AdminOrderItem from "../../../components/Admin/Order/OrderItem";
import { updateOrderStatus } from "../../../store/slice/Order-slice";

const AdminOrders = () => {
  const { ordersList, isLoading } = useSelector((state) => state.adminOrders);
  const [showModal, setShowModal] = useState(false);
  const [searchOrder, setSearchOrder] = useState("");
  const [orders, setOrders] = useState([]);
  const [currentOrderId, setCurrentOrderId] = useState(null);

  const dispatch = useDispatch();

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    dispatch(fetchAllOrdersForAdmin());
  }, [dispatch]);

  useEffect(() => {
    if (ordersList) {
      setOrders(ordersList);
    }
  }, [ordersList]);

  useEffect(() => {
    const filtered = ordersList.filter((item) =>
      item._id.toLowerCase().includes(searchOrder.toLowerCase())
    );
    setOrders(filtered);
  }, [searchOrder]);

  function handleUpdateOrderStatus(id, orderStatus) {
    console.log(orderStatus);
    dispatch(updateOrderStatus({ orderId: id, orderStatus: orderStatus })).then(
      (data) => {
        if (data?.payload?.success) {
          dispatch(fetchAllOrdersForAdmin());
        }
      }
    );
  }

  
  return (
    <div className="px-10 py-3 w-full  ">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">Orders</p>
        <div className="  border rounded-full lg:w-[500px]  ">
          <input
            type="search"
            placeholder="Order Id"
            value={searchOrder}
            onChange={(e) => {
              setSearchOrder(e.target.value);
            }}
            className="border-none outline-none py-2 px-2 w-full"
          />
        </div>
      </div>

      <div className="w-full flex flex-col gap-2   py-4">
        {orders?.length > 0 ? (
          orders.map(
            ({ _id, totalAmount, cartItems, orderDate, orderStatus }) => (
              <AdminOrderItem
                key={_id}
                id={_id}
                totalAmount={totalAmount}
                totalItems={cartItems}
                orderStatus={orderStatus}
                setShowModal={setShowModal}
                orderDate={orderDate}
                setCurrentOrderId={setCurrentOrderId}
              />
            )
          )
        ) : (
          <p>No Orders</p>
        )}
      </div>
      {showModal && (
        <OrderDetailsModal
          id={currentOrderId}
          closeModal={closeModal}
          handleUpdateOrderStatus={handleUpdateOrderStatus}
        />
      )}
    </div>
  );
};

export default AdminOrders;
