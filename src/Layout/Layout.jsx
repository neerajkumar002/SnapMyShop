import { Outlet } from "react-router-dom";
import Navbar from "../components/Shop/Navbar/Navbar";
import Sidebar from "../components/Shop/Sidebar/Sidebar";
import Footer from "../components/Shop/Footer/Footer";
const ShopLayout = () => {
  return (
    <div className="px-5 lg:px-20">
      <Navbar />
      <Sidebar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShopLayout;
