import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { capturePayment } from "../../../store/slice/Order-slice";

const PaymentReturn = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const session_id = searchParams.get("session_id");
  const orderId = JSON.parse(sessionStorage.getItem("currentOrderId")) || "";

  useEffect(() => {
    if (session_id && orderId) {
      dispatch(capturePayment({ session_id, orderId })).then((data) => {
             if (data?.payload?.success) {
          sessionStorage.removeItem("currentOrderId");
          window.location.href = "/payment-success";
        }
      });
    }
  }, [dispatch, session_id, orderId]);

  return (
    <div>
      <h3>Processing Payment... Please wait!</h3>
    </div>
  );
};

export default PaymentReturn;
