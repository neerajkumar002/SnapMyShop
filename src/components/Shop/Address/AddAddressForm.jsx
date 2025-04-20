import {
  Building2Icon,
  Mail,
  MapPin,
  MapPinCheckInside,
  MapPinnedIcon,
  Phone,
  User2,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  fetchAllAddresses,
} from "../../../store/slice/Address-slice";
import { toast } from "react-toastify";
import { useEffect } from "react";
const AddAddressForm = () => {
  const { userData } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const toastify = (message) => toast(message);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({mode:"onSubmit"});

  const onSubmit = (data) => {
    if (addressList.length >= 3) {
      toastify("You can add max 3 addresses");
      reset();
    } else {
      const addressData = { ...data, userId: userData?.id };
      dispatch(addAddress(addressData)).then((data) => {
        if (data?.payload?.success) {
          toastify(data?.payload?.message);
          reset();
        }
      });
    }
  };

  useEffect(() => {
    if (userData) {
      dispatch(fetchAllAddresses(userData?.id));
    }
  }, [dispatch, userData]);

 

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="px-4 flex flex-col gap-3"
    >
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <User2 /> Full Name
        </label>
        <input
          type="text"
          {...register("fullName", { required: "Full name required!" })}
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
          {...register("email", { required: true })}
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
          {...register("phone", { required: true })}
          placeholder="Phone Number (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>

      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <MapPin /> Address (House No, Building, Street, Area)*
        </label>
        <input
          type="text"
          {...register("address", { required: true })}
          placeholder="Address (House No, Building, Street, Area)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <Building2Icon /> City
        </label>
        <input
          type="text"
          {...register("city", { required: true })}
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
          {...register("state", { required: true })}
          placeholder="State (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>

      <div className=" flex flex-col gap-3">
        <label htmlFor="" className="flex gap-2 text-gray-400">
          <MapPinCheckInside />
          Pincode
        </label>
        <input
          type="text"
          {...register("pincode", { required: true })}
          placeholder="Pincode (Required)*"
          className="px-1 py-3 border outline-none rounded-md"
        />
      </div>
      <div className="py-5">
        <button className="bg-green-600 w-full py-3 rounded-md font-semibold text-white">
          Save Address
        </button>
      </div>
    </form>
  );
};

export default AddAddressForm;
