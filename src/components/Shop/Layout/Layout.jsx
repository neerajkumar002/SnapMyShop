import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const ShopLayout = () => {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ShopLayout;
