import { CirclePlus, LogOut, Menu, Package, Rows3, Scale } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const menuItems = [
  {
    path: "/admin/list",
    name: "Items List",
    icon: <Rows3 />,
  },
  {
    path: "/admin/product/add",
    name: "Add Item",
    icon: <CirclePlus />,
  },
  {
    path: "/admin/orders",
    name: "Orders",
    icon: <Package />,
  },
];

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="  transition-all duration-300 "
      style={{ width: isOpen ? "220px" : "50px" }}
    >
      <div className="flex justify-between px-2 py-5  font-semibold text-xl ">
        <h3
          className={`transition-all duration-300 ${
            isOpen ? "scale-100" : "scale-0 hidden  "
          }`}
        >
          SnapShop
        </h3>
        <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
          <Menu size={30} />
        </button>
      </div>
      <div className="flex flex-col gap-3">
        {menuItems?.map((item) => (
          <NavLink
            to={item?.path}
            key={item?.name}
            className={({ isActive }) =>
              ` flex items-center transition-all duration-300 hover:bg-blue-400 rounded-tr-full rounded-br-full    h-8 py-2 gap-2    ${
                isActive ? "bg-blue-300" : ""
              }`
            }
          >
            <div className="ml-2">{item?.icon}</div>
            <div
              className={`   text-xl transition-all duration-300  ${
                isOpen ? "scale-100 " : "scale-0     "
              }`}
            >
              {item?.name}
            </div>
          </NavLink>
        ))}
        <NavLink className="flex items-center transition-all duration-300  hover:bg-blue-400  rounded-tr-full rounded-br-full    h-8 py-2 gap-2 ">
          <div className="ml-2">
            <LogOut />
          </div>
          <div
            className={`   text-xl transition-all duration-300  ${
              isOpen ? "scale-100 " : "scale-0     "
            }`}
          >
            Logout
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSidebar;
