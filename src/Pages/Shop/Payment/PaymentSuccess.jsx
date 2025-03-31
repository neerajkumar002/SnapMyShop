import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      <div>
        <p>Payment is successfull!</p>
        <button onClick={() => navigate("/orders")}>View Orders</button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
