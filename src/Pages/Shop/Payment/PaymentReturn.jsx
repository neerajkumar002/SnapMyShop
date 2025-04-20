import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { capturePayment } from "../../../store/slice/Order-slice";
import { ClipLoader } from "react-spinners";

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
    <div className=" flex flex-col items-center justify-center gap-3 h-screen">
      <ClipLoader color="green" size={70} />
      <h3 className="animate-bounce">Processing Payment... Please wait!</h3>
    </div>
  );
};

export default PaymentReturn;
