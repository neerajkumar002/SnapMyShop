import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShopHome from "./Pages/Shop/Home/Home";
import ProductsListing from "./Pages/Shop/Products/Listing";
import ProductsDetils from "./Pages/Shop/Products/Detail";
import Cart from "./Pages/Shop/Cart/Cart";
import ShopOrder from "./Pages/Shop/Order/Order";
import ShopOrderDetails from "./Pages/Shop/Order/OrderDetails";
import Checkout from "./Pages/Shop/Checkout/Checkout";
import AddAddress from "./Pages/Shop/Address/AddAddress";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkAuth } from "./store/slice/Auth-slice";
import Auth from "./Pages/auth/Auth";
import ProtectedLayout from "./Layout/ProtectedLayout";
import { Bounce, ToastContainer } from "react-toastify";
import Unauthorized from "./Pages/Shop/Unauthorized/Unauthorized";
import NotFound from "./Pages/Shop/NotFound/NotFound";
import ProductDetail from "./Pages/Shop/Products/Detail";
import PaymentSuccess from "./Pages/Shop/Payment/PaymentSuccess";
import PaymentReturn from "./Pages/Shop/Payment/PaymentReturn";
import AdminLayout from "./Layout/AdminLayout";
import AdminProductsList from "./Pages/Admin/Products/ProductsList";
import AddProduct from "./Pages/Admin/Products/AddProduct";
import AdminOrders from "./Pages/Admin/Orders/Orders";
import ShopLayout from "./Layout/Layout";
import About from "./Pages/Shop/About/About";
import Contact from "./Pages/Shop/Contact/Contact";

function App() {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const role = "user";
  const authenticated = false;

  console.log(userData);

  return (
    <BrowserRouter>
      <Routes>
        {/* public and protected routes */}
        <Route path="/" element={<ShopLayout />}>
          {/* public routes */}
          <Route index element={<ShopHome />} />
          <Route path="products" element={<ProductsListing />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* protected routes */}
          <Route
            element={
              <ProtectedLayout role={role} authenticated={authenticated} />
            }
          >
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="payment-return/success" element={<PaymentReturn />} />
            <Route path="payment-success" element={<PaymentSuccess />} />
            <Route path="orders" element={<ShopOrder />} />
            <Route path="orders-details/:id" element={<ShopOrderDetails />} />
          </Route>
        </Route>

        {/* Auth routes */}
        <Route
          path="/auth"
          element={
            <ProtectedLayout role={role} authenticated={authenticated}>
              <Auth />
            </ProtectedLayout>
          }
        >
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Admin routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="list" index element={<AdminProductsList />} />
          <Route path="product/add" element={<AddProduct />} />
          <Route path="orders" element={<AdminOrders />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </BrowserRouter>
  );
}

export default App;
