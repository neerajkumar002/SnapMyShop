import { AlignJustify, ShoppingCart, User } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseSidebar = () => {
    setIsOpen(false);
    console.log("false");
  };

  return (
    <nav
      className="w-full flex  justify-between  
     lg:px-14 py-4 
    "
    >
      <div>
        <h2 className="font-bold">SnapShop</h2>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-3 ">
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Contact </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 ">
        <Link to="/cart">
          <ShoppingCart size={20} />
        </Link>

        <User size={20} className="cursor-pointer" />
        <Link to="/auth/login">Login</Link>
        <button onClick={() => setIsOpen(true)} className=" lg:hidden">
          <AlignJustify />
        </button>
      </div>

      <Sidebar isOpen={isOpen} handleCloseSidebar={handleCloseSidebar} />
    </nav>
  );
};

export default Navbar;
