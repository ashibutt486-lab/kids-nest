import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Categories.css';

const CATEGORIES = [
  { id: 1, name: "Toddler Nest", age: "1 - 3 Years", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=600&q=80" },
  { id: 2, name: "Little Explorers", age: "4 - 7 Years", image: "https://images.unsplash.com/photo-1622290291468-a28f7a7dc6a8?auto=format&fit=crop&w=600&q=80" },
  { id: 3, name: "Junior Active", age: "8 - 11 Years", image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=600&q=80" },
  { id: 4, name: "Teen Streetwear", age: "12 - 14 Years", image: "https://images.unsplash.com/photo-1519457431-44ccd64a579b?auto=format&fit=crop&w=600&q=80" },
  { id: 5, name: "Cozy Sleepwear", age: "1 - 14 Years", image: "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?auto=format&fit=crop&w=600&q=80" }
];

export default function Categories({ onSelectCategory }) {
  const handleShopNowClick = (categoryName) => {
    if (onSelectCategory) {
      onSelectCategory(categoryName);
    }
    const newArrivalsEl = document.getElementById('new-arrivals');
    if (newArrivalsEl) {
      newArrivalsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="categories-section" id="categories">
      <div className="section-header-center">
        <span className="section-tag">Collections</span>
        <h2 className="section-main-title">Shop By Age Category</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 }
        }}
        className="categories-swiper"
      >
        {CATEGORIES.map((cat) => (
          <SwiperSlide key={cat.id}>
            <div className="category-card">
              <div style={{ overflow: 'hidden' }}>
                <img src={cat.image} alt={cat.name} className="category-img" />
              </div>
              <div className="category-info">
                <div>
                  <h3 className="category-name">{cat.name}</h3>
                  <p className="category-age">{cat.age}</p>
                </div>
                <button 
                  className="btn-shop-category" 
                  onClick={() => handleShopNowClick(cat.name)}
                >
                  Shop Now <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
