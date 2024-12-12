import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShopCard from "./Components/shopCard/ShopCard";
import Nav from "./Components/nav/Nav";
import ShopForm from "./Components/shopForm/ShopForm";
import ProductForm from "./Components/productForm/ProductForm";
import ProductCompare from "./Components/productCompare/ProductCompare";
import ProductCard from "./Components/productCard/ProductCard";
import LoginForm from "./Components/login/LoginForm";
import SignupForm from "./Components/signup/SignUp";
import ProductDetail from "./Components/productDetail/productDetail";
import Cart from "./Components/cart/cart";
import { CartProvider } from "./store/Store";
import ShopDetail from "./Components/shopDetail/ShopDetail";
import PaymentOptions from "./Components/paymentOptions/paymentOptions";

function App() {
  const [displayShopForm, setDisplayShopForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <CartProvider>
      <Router>
        <>
          <Navbar user={user} setUser={setUser} setIsLoggedIn={setIsLoggedIn} />
          {isLoggedIn && <Nav setDisplayShopForm={setDisplayShopForm} />}

          <main
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Routes>
              <Route path="/" element={<ProductCard />} />
              <Route path="/shops" element={<ShopCard />} />
              <Route path="/createShop" element={<ShopForm />} />
              <Route path="/createProduct" element={<ProductForm />} />
              <Route path="/compareProducts" element={<ProductCompare />} />
              <Route path="/product/:productName" element={<ProductDetail />} />
              <Route
                path="/login"
                element={
                  <LoginForm setIsLoggedIn={setIsLoggedIn} setUser={setUser} />
                }
              />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/shop/:shopName" element={<ShopDetail />} />
              <Route path="/payment-options" element={<PaymentOptions />} />
            </Routes>
          </main>
        </>
      </Router>
    </CartProvider>
  );
}

export default App;
