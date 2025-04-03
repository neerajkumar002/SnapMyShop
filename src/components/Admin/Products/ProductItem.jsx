import { SquarePen, Trash2Icon } from "lucide-react";
const AdminProductItem = ({
  id,
  image,
  title,
  price,
  category,
  handleProductDelete,
}) => {
  return (
    <div className=" bg-white shadow-md flex justify-between gap-3 rounded-md ">
      <div className="flex gap-3">
        <div className="w-[80px]  overflow-hidden ">
          <img
            src={image || "/public/placeholder.svg"}
            alt=""
            className="w-full h-full "
          />
        </div>
        <div>
          <p className="text-gray-700">{title}</p>
          <p className="text-gray-600">
            Product ID: <span className="text-gray-700">{id}</span>{" "}
          </p>
          <div className="flex items-center gap-3">
            <p className="text-gray-600">
              Price: <span className="text-gray-700">{price}</span>
            </p>{" "}
            <p className="text-gray-600">
              Category:
              <span className="text-gray-700">{category}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="pr-3 pt-2 flex flex-col gap-4">
        <button className="  cursor-pointer ">
          <SquarePen
            size={27}
            className="text-gray-500 hover:text-green-600 transition-colors duration-300"
          />
        </button>
        <button
          onClick={() => handleProductDelete(id)}
          className=" cursor-pointer  "
        >
          <Trash2Icon
            size={27}
            className="text-gray-500 hover:text-red-600 transition-colors duration-300"
          />
        </button>
      </div>
    </div>
  );
};

export default AdminProductItem;
