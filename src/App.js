import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Shop from "./components/Shop/Shop";
import Cart from "./components/Cart/Cart";
import Notfound from "./components/Notfound/Notfound";
import Products from "./components/Shop/Products";
import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import ProtuctoedRoutes from "./services/ProtuctoedRoutes";


const App = () => {
  const [cartCount, setCartCount] = useState(0);

  const updateCartCount = (newCount) => {
    setCartCount(newCount);
  };
  const Layout = ({ cartCount }) => {
    const location = useLocation();
  
    // Define routes where the Navbar should not be displayed
    const hideNavbarRoutes = ["/login","/register"];
  
    const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  
    return (
      <>
        {shouldShowNavbar && <Navbar cartCount={cartCount} />}
        <Routes>
          <Route  element={<ProtuctoedRoutes/>}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/cart"
            element={<Cart updateCartCount={() => {}} />}
          />
          <Route path="/products/:id" element={<Products updateCartCount={updateCartCount}  />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </>
    );
  };

  return (
    <BrowserRouter>
      <Layout cartCount={cartCount} />
    </BrowserRouter>
  );
};

export default App;
