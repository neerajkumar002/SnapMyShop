import { AlignJustify, ShoppingCart, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../store/slice/Auth-slice";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { userData } = useSelector((state) => state.auth);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const handleCloseDropdown = (e) => {
      console.log(e.target);
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };

    if (openMenu) {
      document.addEventListener("mousedown", handleCloseDropdown);
    }

    return () => document.removeEventListener("mousedown", handleCloseDropdown);
  }, [openMenu]);

  function handleLogoutUser() {
    dispatch(logoutUser()).then((data) => {
      if (data?.payload?.success) {
        toast.success(data?.payload?.message);
        navigate("/auth/login");
      }
    });
  }

  return (
    <nav
      className="w-full flex items-center  justify-between  
     lg:px-14 py-4 
    "
    >
      <div>
        <h2 className="font-bold text-2xl">SnapShop</h2>
      </div>
      <div className="hidden lg:block">
        <ul className="flex gap-3  text-xl">
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
        {userData?.role === "admin" && <Link to="/admin/list">Dashboard</Link>}
        <Link to="/cart">
          <ShoppingCart size={23} />
        </Link>

        {userData && userData?.role === "user" && (
          <div className="relative flex items-center">
            <User
              size={23}
              className="cursor-pointer"
              onClick={() => setOpenMenu(true)}
            />
            {openMenu && (
              <div
                ref={dropdownRef}
                className="absolute top-5 right-0 shadow-md bg-white w-[150px] flex flex-col gap-2 py-1 "
              >
                <Link className="px-2 hover:text-blue-300 ">Neeraj Kumar</Link>
                <Link to="orders" className="px-2  hover:text-blue-300 ">
                  Your Orders
                </Link>
                <Link to="address" className="px-2  hover:text-blue-300 ">
                  My Addresses
                </Link>
                <Link
                  onClick={() => handleLogoutUser()}
                  className="px-2  hover:text-blue-300 "
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        )}
        {!userData && <Link to="/auth/login">Login</Link>}
        <button onClick={() => setIsOpen(true)} className=" lg:hidden">
          <AlignJustify />
        </button>
      </div>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;
