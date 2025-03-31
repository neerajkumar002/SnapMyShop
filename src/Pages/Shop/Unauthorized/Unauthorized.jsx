import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-black text-red-600">403 - Unauthorized</h1>
      <p className="text-lg  text-gray-700 mt-2">
        You don't have permission to view this Page.
      </p>
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 mt-3 bg-blue-600 text-white rounded-lg font-semibold px-2 py-3 hover:bg-blue-700 cursor-pointer transition"
      >
        <Home />
        Go to Home
      </button>
    </div>
  );
};

export default Unauthorized;
