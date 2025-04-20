import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen ">
      <div className="text-center mt-50">
        <p className="text-3xl font-semibold text-gray-600">
          Payment is successfull!
        </p>
        <button
          className="bg-red-400 text-white px-3 py-2 rounded-md mt-5 cursor-pointer"
          onClick={() => navigate("/orders")}
        >
          View Orders
        </button>
      </div>
    </div>
  );
};

export default PaymentSuccess;
