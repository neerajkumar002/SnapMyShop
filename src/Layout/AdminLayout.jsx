import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/Admin/Sidebar/Sidebar";

const AdminLayout = () => {
  return (
    <div className="flex  min-h-screen  ">
      <AdminSidebar />
      <main className="w-full  ">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
