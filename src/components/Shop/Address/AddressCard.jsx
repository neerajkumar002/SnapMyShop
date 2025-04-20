import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getAddressById } from "../../../store/slice/Address-slice";
import { Pencil, Trash2 } from "lucide-react";

const AddressCard = ({
  id,
  fullName,
  address,
  city,
  state,
  pincode,
  phone,
  item,
  setCurrentSelectedAddress,
  currentSelectedAddress,
  handleDeleteAddress,
}) => {
  const navigate = useNavigate();
  const { addressId } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    if (addressId) {
      dispatch(getAddressById(id));
    }
  }, [addressId]);

  return (
    <div
      onClick={() => setCurrentSelectedAddress(item)}
      className={`address-card border px-1 py-2 rounded-md leading-5 ${
        currentSelectedAddress?._id === id ? "border-2 border-green-500" : ""
      }`}
    >
      <div className="text-sm flex justify-between ">
        <label className="pl-4">Delivering to</label>
        <div className="flex gap-3">
          <button
            onClick={() => navigate(`/address/edit/${id}`)}
            className="cursor-pointer"
          >
            <Pencil color="green" />
          </button>
          <button
            onClick={() => handleDeleteAddress(id)}
            className="cursor-pointer"
          >
            <Trash2 color="red" />
          </button>
        </div>
      </div>
      <div className="px-4">
        <p className="font-semibold text-[1rem]">{fullName}</p>
        <p className="text-[0.8rem] ">
          {address}, {city}, {state} - {pincode}
        </p>
        <p className="font-semibold text-[0.9rem]">Mob- {phone}</p>
      </div>
    </div>
  );
};

export default AddressCard;
