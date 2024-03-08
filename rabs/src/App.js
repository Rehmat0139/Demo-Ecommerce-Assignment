import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import ProductDetails from "./Components/Card/ProductDetails";
import Shop from "./Components/Shop/Shop";
import Category from "./Components/Category/Category";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "./Components/CardContext/CardContext";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
