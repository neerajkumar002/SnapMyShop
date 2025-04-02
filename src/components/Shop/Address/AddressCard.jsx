import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => setCurrentSelectedAddress(item)}
      className="address-card border px-1 py-2 rounded-md leading-5"
    >
      <div className="text-sm flex justify-between ">
        <label className="pl-4">Delivering to</label>
        <button onClick={() => navigate("/address/edit")}>Edit</button>
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
