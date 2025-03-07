import {
  ArrowLeft,
 
} from "lucide-react";
import AddAddressForm from "../../../components/Shop/Address/AddAddressForm";

const AddAddress = () => {
  return (
    <div>
      <div className="flex py-4 px-3 font-semibold ">
        <button className="cursor-pointer pr-2">
          <ArrowLeft />
        </button>{" "}
        Add Address
      </div>
      <AddAddressForm />
    </div>
  );
};

export default AddAddress;
