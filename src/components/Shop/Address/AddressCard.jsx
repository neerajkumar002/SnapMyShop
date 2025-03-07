import React from "react";

const AddressCard = () => {
  return (
    <div className="address-card border px-3 py-2 rounded-md leading-5">
      <div className="text-sm flex justify-between ">
        <label htmlFor="" >
          <input type="radio" name="" id="" /> Delivering to
        </label>
        <button>Edit</button>
      </div>
      <div className="px-4">
        <p className="font-semibold text-[1rem]">Neeraj Kumar</p>
        <p className="text-[0.8rem] ">Dehradun, Uttarakhand - 212121</p>
        <p className="font-semibold text-[0.9rem]">Mob- 8211232433</p>
      </div>
    </div>
  );
};

export default AddressCard;
