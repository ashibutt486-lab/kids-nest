import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { ShoppingBag, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/Products.css';

const BEST_SELLERS = [
  { id: 201, name: "Essential Play Cargo Pants", price: 5000, rating: 5.0, age: "4-7 Yrs", image: "https://images.unsplash.com/photo-1471286174890-9c112ffca5b4?auto=format&fit=crop&w=600&q=80" },
  { id: 202, name: "Pure Organic Knit Sweater", price: 2500, rating: 4.9, age: "8-11 Yrs", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=600&q=80" },
  { id: 203, name: "Cozy Night Organic Pyjama", price: 2999, rating: 4.8, age: "1-3 Yrs", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 204, name: "Teen Fleece Track Joggers", price: 1999, rating: 5.0, age: "12-14 Yrs", image: "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=600&q=80" }
];

export default function BestSellers({ onAddToCart }) {
  const handleAdd = (product) => {
    confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
    onAddToCart(product);
  };

  const renderProductCard = (p) => (
    <div className="product-card">
      <div className="product-img-wrapper">
        {/* <span className="product-tag-badge">★ {p.rating}</span> */}
        {/* <button className="wishlist-icon-btn"><Heart size={18} /></button> */}
        <img src={p.image} alt={p.name} className="product-img" />
      </div>
      <h3 className="product-title">{p.name}</h3>
      <div className="product-price-row">
        <span className="price">Rs.{p.price.toFixed(2)}</span>
        <span style={{ fontSize: '13px', color: '#8C6F60' }}>Age: {p.age}</span>
      </div>
      <button className="btn-add-cart" onClick={() => handleAdd(p)}>
        <ShoppingBag size={16} /> Add To Cart
      </button>
    </div>
  );

  return (
    <section className="products-section" id="best-sellers" style={{ background: '#FFF', borderRadius: '32px', margin: '40px auto' }}>
      <div className="section-header-center">
        <span className="section-tag">Parent Favorites</span>
        <h2 className="section-main-title">🔥 Best Sellers</h2>
      </div>

      {/* Swiper Carousel for Best Sellers */}
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
        {BEST_SELLERS.map((p) => (
          <SwiperSlide key={p.id}>
            {renderProductCard(p)}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}