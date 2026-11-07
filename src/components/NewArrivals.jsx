import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ShoppingBag, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Products.css';

const NEW_ARRIVALS = [
  { id: 101, name: "Organic Cotton Ribbed Romper", price: 2999, oldPrice: 5000, age: "1-3 Yrs", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=600&q=80" },
  { id: 102, name: "Explorer Fleece Hoodie", price: 2799, oldPrice: 3000, age: "4-7 Yrs", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80" },
  { id: 103, name: "Junior Denim Vintage Jacket", price: 1999, oldPrice: 2500, age: "8-11 Yrs", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=600&q=80" },
  { id: 104, name: "Urban Teen Oversized Tee", price: 1699, oldPrice: 2000, age: "12-14 Yrs", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80" }
];

export default function NewArrivals({ onAddToCart }) {
  const handleAdd = (product) => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    onAddToCart(product);
  };

  const renderProductCard = (p) => (
    <div className="product-card">
      <div className="product-img-wrapper">
        {/* <span className="product-tag-badge">{p.age}</span> */}
        {/* <button className="wishlist-icon-btn"><Heart size={18} /></button> */}
        <img src={p.image} alt={p.name} className="product-img" />
      </div>
      <h3 className="product-title">{p.name}</h3>
      <div className="product-price-row">
        <div>
          <span className="price">Rs.{p.price.toFixed(2)}</span>
          <span className="old-price">${p.oldPrice.toFixed(2)}</span>
        </div>
      </div>
      <button className="btn-add-cart" onClick={() => handleAdd(p)}>
        <ShoppingBag size={16} /> Add To Cart
      </button>
    </div>
  );

  return (
    <section className="products-section" id="new-arrivals">
      <div className="section-header-center">
        <span className="section-tag">Fresh Drop</span>
        <h2 className="section-main-title">✨ New Arrivals</h2>
      </div>

      {/* Swiper Carousel with Responsive Breakpoints */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1.2}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 1.8, spaceBetween: 20 },
          768: { slidesPerView: 2.8, spaceBetween: 24 },
          1024: { slidesPerView: 4, spaceBetween: 30 }
        }}
        className="products-swiper"
      >
        {NEW_ARRIVALS.map((p) => (
          <SwiperSlide key={p.id}>
            {renderProductCard(p)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}