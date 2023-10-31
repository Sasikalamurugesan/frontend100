import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Lhome from '../pages/Lhome';
import Lshop from '../pages/Lshop';
import Lcart from '../pages/Lcart';
import Lblog from '../pages/Lblog';
import ProductDetails from '../pages/ProductDetails';
import Checkout from '../pages/Checkout';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Cart from '../pages/Cart';
import Blog from '../pages/Blog';
import Profile from '../pages/Profile';
import Payment from '../pages/Payment';

import Qrr from '../pages/Qrr';
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
      <Route path="/Lhome" element={<Lhome />} />
      <Route path="/Lshop" element={<Lshop />} />
      <Route path="/Lcart" element={<Lcart />} />
      <Route path="/Lblog" element={<Lblog />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Payment" element={<Payment />} />
    
      <Route path="/Qrr" element={<Qrr/>} />
      
    </Routes>
  );
};

export default Routers;
