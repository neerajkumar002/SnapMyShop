import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllOrdersForAdmin } from "../../../store/admin/order-slice";
import OrderDetailsModal from "../../../components/Admin/Order/OrderDetailsModal";
import AdminOrderItem from "../../../components/Admin/Order/OrderItem";

const AdminOrders = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentOrderId, setCurrentOrderId] = useState(null);
  const { ordersList } = useSelector((state) => state.adminOrders);
  const dispatch = useDispatch();

  function closeModal() {
    setShowModal(false);
  }

  useEffect(() => {
    dispatch(fetchAllOrdersForAdmin());
  }, [dispatch]);

  return (
    <div className="px-10 py-3">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-xl">Orders</p>
        <div className="flex justify-between border rounded-full  ">
          <input
            type="search"
            placeholder="Order Id"
            className="border-none outline-none py-2 px-2 w-full"
          />
          <button className="bg-red-400 py-2 rounded-tr-full rounded-br-full px-3 text-white  ">
            Search
          </button>
        </div>
      </div>

      <div className="w-full flex flex-col gap-2 items-center py-4">
        {ordersList && ordersList.length > 0 ? (
          ordersList.map((item) => (
            <AdminOrderItem
              key={item?._id}
              id={item?._id}
              totalAmount={item?.totalAmount}
              totalItems={item?.orderItems?.length}
              status={item?.status}
              setShowModal={setShowModal}
              setCurrentOrderId={setCurrentOrderId}
            />
          ))
        ) : (
          <p>No Orders</p>
        )}
      </div>
      {showModal && (
        <OrderDetailsModal id={currentOrderId} closeModal={closeModal} />
      )}
    </div>
  );
};

export default AdminOrders;
