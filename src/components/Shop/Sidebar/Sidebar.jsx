import { ChevronLeft } from "lucide-react";
import { Link, Navigate } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "translate-x-0 w-full" : "translate-x-full "
      } transition-transform duration-300 fixed right-0 top-0   bg-white h-screen`}
    >
      <div>
        <button
          onClick={() => setIsOpen(false)}
          className="flex py-3 items-center text-xl px-2 gap-1"
        >
          <ChevronLeft className="text-gray-400" /> Back
        </button>
      </div>

      <ul className="flex flex-col  gap-3 ">
        <li
          onClick={() => setIsOpen(false)}
          className="px-2 text-xl py-2 border-b border-t border-gray-400"
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="px-2 text-xl pb-2 border-b t border-gray-400"
        >
          <Link to="/products">Products</Link>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="px-2 text-xl pb-2 border-b  border-gray-400"
        >
          <Link to="/about">About</Link>
        </li>
        <li
          onClick={() => setIsOpen(false)}
          className="px-2 text-xl pb-2 border-b  border-gray-400"
        >
          <Link to="/contact">Contact </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
