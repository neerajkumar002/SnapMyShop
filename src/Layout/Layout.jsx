import { Outlet } from "react-router-dom";
import Navbar from "../components/Shop/Navbar/Navbar";
import Footer from "../components/Shop/Footer/Footer";
import Breadcrumbs from "../components/common/Breadcrumbs";
const ShopLayout = () => {
  return (
    <div className="px-5 lg:px-20">
      <Navbar />
      <main className="min-h-screen">
        <Breadcrumbs />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ShopLayout;
