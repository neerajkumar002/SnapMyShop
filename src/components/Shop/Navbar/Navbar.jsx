import { ShoppingCart, User } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <nav
      className="w-full flex  justify-between  
     px-6 lg:px-14 py-4 shadow-md
    "
    >
      <div>
        <h2 className="font-bold">SnapShop</h2>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-3 ">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact </a>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 ">
        <ShoppingCart size={20} />
        <User size={20} />
        <a href="">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
