import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PageNotFound from "./Pages/PageNotFound";
import AppLayout from "./Components/Layout/AppLayout";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Payment from "./Pages/Payment";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
    
          <Route element={<AppLayout />}>
            <Route path="/" element={<Home />} />

            <Route path="products" element={<Products />} />

            <Route path="cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />

            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
