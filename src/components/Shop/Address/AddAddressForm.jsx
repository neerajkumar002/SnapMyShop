import { 
  Building2Icon,
  Earth,
  Home,
  Mail,
  MapPin,
  MapPinCheckInside,
  MapPinnedIcon,
  Phone,
  User2,
} from "lucide-react";
const AddAddressForm = () => {
  return (
    <form className="px-4 flex flex-col gap-3">
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <User2 /> Full Name
        </label>
        <input
          type="text"
          placeholder="Full Name (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <Mail /> Email ID
        </label>
        <input
          type="text"
          placeholder="Email ID (Required)*"
        className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <Phone /> Phone Number
        </label>
        <input
          type="text"
          placeholder="Phone Number (Required)*"
      className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <Home /> House No., Building Name
        </label>
        <input
          type="text"
          placeholder=" House No., Building Name (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <MapPin /> Road Name, Area Colony
        </label>
        <input
          type="text"
          placeholder="Road Name, Area Colony (Required)*"
        className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <Building2Icon /> City
        </label>
        <input
          type="text"
          placeholder="City (Required)*"
       className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <MapPinnedIcon /> State
        </label>
        <input
          type="text"
          placeholder="State (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <Earth /> Country
        </label>
        <input
          type="text"
          placeholder="Country (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <MapPinCheckInside />
          Pincode
        </label>
        <input
          type="number"
          placeholder="Pincode (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className="py-5" >
        <button className="bg-green-600 w-full py-3 rounded-md font-semibold text-white">
            Save Address
        </button>
      </div>
    </form>
  );
};

export default AddAddressForm;
