import { Plus } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAddress,
  fetchAllAddresses,
} from "../../../store/slice/Address-slice";
import AddressCard from "../../../components/Shop/Address/AddressCard";
import { toast } from "react-toastify";

const AddressList = () => {
  const { userData } = useSelector((state) => state.auth);
  const { addressList } = useSelector((state) => state.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData) {
      dispatch(fetchAllAddresses(userData?.id));
    }
  }, [dispatch, userData]);

  function handleDeleteAddress(id) {
    dispatch(deleteAddress({ userId: userData?.id, addressId: id })).then(
      (data) => {
        if (data?.payload?.success) {
          toast.success(data?.payload?.message);
          dispatch(fetchAllAddresses(userData?.id));
        }
      }
    );
  }

  return (
    <div className="lg:px-14">
      {" "}
      <div className="flex justify-between items-center py-3 ">
        <p className="font-semibold text-xl">My Addresses </p>{" "}
        <button
          onClick={() => navigate("/address/add")}
          className="flex gap-1 border rounded-md px-1 py-2"
        >
          <Plus />
          Add New Address
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {addressList && addressList.length > 0
          ? addressList.map((item) => (
              <AddressCard
                key={item?._id}
                id={item?._id}
                fullName={item?.fullName}
                address={item?.address}
                phone={item?.phone}
                state={item?.state}
                city={item?.city}
                pincode={item?.pincode}
                item={item}
                handleDeleteAddress={handleDeleteAddress}
                // setCurrentSelectedAddress={setCurrentSelectedAddress}
                // currentSelectedAddress={currentSelectedAddress}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default AddressList;
