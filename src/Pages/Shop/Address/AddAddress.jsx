import { ArrowLeft } from "lucide-react";
import AddAddressForm from "../../../components/Shop/Address/AddAddressForm";
import { useNavigate } from "react-router-dom";

const AddAddress = () => {
  const navigate = useNavigate();

  return (
    <div className="px-10">
      <div className="flex py-4 px-3 font-semibold ">
        <button onClick={()=>navigate("/checkout")} className="cursor-pointer pr-2">
          <ArrowLeft />
        </button>{" "}
        Add Address
      </div>
      <AddAddressForm />
    </div>
  );
};

export default AddAddress;
