import { Outlet } from "react-router-dom";
import Navbar from "../components/Shop/Navbar/Navbar";
import Footer from "../components/Shop/Footer/Footer";
const ShopLayout = () => {
  return (
    <div className="px-5 lg:px-20">
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShopLayout;
