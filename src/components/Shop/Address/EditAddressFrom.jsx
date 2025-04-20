import {
  Building2Icon,
  Mail,
  MapPin,
  MapPinCheckInside,
  MapPinnedIcon,
  Phone,
  User2,
} from "lucide-react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAddressById,
  updateAddress,
} from "../../../store/slice/Address-slice";
import { toast } from "react-toastify";

const EditAddressForm = () => {
  const { userData } = useSelector((state) => state.auth);
  const { addressData, isLoading } = useSelector((state) => state.address);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (formData) => {
    console.log(formData);
    dispatch(
      updateAddress({
        userid: userData?.id,
        addressId: addressData?._id,
        formData,
      })
    ).then((data) => { 
      if (data?.payload?.success) {
        toast.success("Address update succesfully");
      }
    });
  };

  useEffect(() => {
    if (id) {
      dispatch(getAddressById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (addressData) {
      reset({
        fullName: addressData?.fullName || "",
        email: addressData?.email || "",
        phone: addressData?.phone || "",
        address: addressData?.address || "",
        city: addressData?.city || "",
        state: addressData?.state || "",
        pincode: addressData?.pincode || "",
      });
    }
  }, [addressData, reset]);

  if (isLoading)
    return (
      <div className="mt-30">
        <h2 className="text-center font-semibold text-2xl animate-bounce">
          Loading....
        </h2>
      </div>
    );

  return (
    <div>
      <h1 className="font-semibold text-xl mt-4 mb-4">Edit Address</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="  flex flex-col gap-3">
        <div className=" flex flex-col gap-3">
          <label htmlFor="" className="flex gap-2 text-gray-400">
            <User2 /> Full Name
          </label>
          <input
            type="text"
            {...register("fullName", { required: true })}
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
            Edit
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditAddressForm;
