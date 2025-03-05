import { Delete, Minus, Plus, Trash2Icon, TrashIcon } from "lucide-react";

const CartItem = () => {
  return (
    <div className="w-full flex justify-between lg:w-[800px] h-[100px] shadow">
      <div className=" flex gap-5 items-center ">
        <div className="w-[100px]">
          <img src="/public/placeholder.svg" alt="" className="object-cover" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold">Product Title</p>
          <p>
            Quantity : <span className="font-semibold">1</span>{" "}
          </p>
          <p>
            Price: <span className="font-semibold">₹423.99</span>{" "}
          </p>
        </div>
      </div>
      <div className="pt-1 text-center">
        <p>Quantity:</p>{" "}
        <div className="flex gap-3 border mt-4">
          <button className="px-1 cursor-pointer">
            <Minus />
          </button>
          <p className="font-bold">1</p>
          <button className="px-1 cursor-pointer">
            <Plus />
          </button>
        </div>
      </div>
      <div className="pt-3 pr-3">
        <button className="text-red-600 cursor-pointer">
          <Trash2Icon />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
