import { AlignJustify, ShoppingCart, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="w-full flex  justify-between  
     lg:px-14 py-4 
    "
    >
      <div>
        <h2 className="font-bold text-2xl">SnapShop</h2>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-3 ">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact </Link>
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

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
