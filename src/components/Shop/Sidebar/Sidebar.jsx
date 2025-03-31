import {
  ChevronLeft,
  ListOrdered,
  LogOut,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import { useEffect } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";

const Sidebar = ({ isOpen, handleCloseSidebar }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    handleCloseSidebar();
    console.log(pathname);
  }, [pathname]);

  return (
    <div
      className={`${
        isOpen ? "translate-x-0 w-full" : "translate-x-full "
      } transition-transform duration-300 fixed right-0 top-0  bg-white h-screen`}
    >
      <div>
        <button
          onClick={handleCloseSidebar}
          className="flex py-3 items-center text-xl px-2 gap-1"
        >
          <ChevronLeft className="text-gray-400" /> Back
        </button>
      </div>

      <ul className="flex flex-col  gap-3 ">
        <li className="px-2 text-xl py-2 border-b border-t border-gray-400">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 text-xl pb-2 border-b t border-gray-400">
          <Link to="/products">Products</Link>
        </li>
        <li className="px-2 text-xl pb-2 border-b  border-gray-400">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2 text-xl pb-2 border-b  border-gray-400">
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
