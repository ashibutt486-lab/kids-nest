import React, { useState } from 'react';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import NewArrivals from './components/NewArrivals';
import BestSellers from './components/BestSellers';
import About from './components/About';
import Footer from './components/Footer';
// import CartDrawer from './components/CartDrawer';

import './styles/global.css';
import logoImg from './assets/image.png';

export default function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    setIsCartOpen(true);
  };

  // const handleRemoveFromCart = (index) => {
  //   setCart(cart.filter((_, i) => i !== index));
  // };

  return (
    <div className="app">
       
      <AnnouncementBar />

       
      <Navbar 
        cartCount={cart.length} 
        onOpenCart={() => setIsCartOpen(true)}
        logoSrc={logoImg} 
      />

      
      <Hero />

       
      <Categories />

       
      <NewArrivals onAddToCart={handleAddToCart} />

       
      <BestSellers onAddToCart={handleAddToCart} />

      {/* 7. About Us */}
      <About />

      {/* 8. Footer */}
      <Footer logoSrc={logoImg} />

      {/* Cart Drawer Overlay */}
      {/* <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onRemove={handleRemoveFromCart}
      /> */}
    </div>
  );
}
