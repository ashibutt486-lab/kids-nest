import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Feather, Truck } from 'lucide-react';
import '../styles/Hero.css';

// Change this URL to swap the background photo.
// Tip: you can also put your own image in /public (e.g. '/hero-bg.jpg').
const HERO_BG =
  'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1920&q=80';

export default function Hero() {
  return (
    <section
      className="hero-section"
      id="home"
      style={{ '--hero-bg': `url("${HERO_BG}")` }}
    >
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-tag">
            <Feather size={16} /> 100% Organic &amp; Eco-Friendly
          </div>
          <h1 className="hero-title">Where Little Dreams Take Flight 🌿</h1>
          <p className="hero-subtitle">
            Luxury organic kidswear engineered for comfort and playfulness. Crafted from GOTS
            certified organic cotton for ages 1 to 14.
          </p>
          <div className="hero-actions">
            <a href="#new-arrivals" className="btn-hero-primary">
              Explore New Collection <ArrowRight size={18} />
            </a>
            <a href="#categories" className="btn-hero-secondary">
              Browse Categories
            </a>
          </div>

          <div className="trust-badges">
            <div className="badge-item">
              <ShieldCheck size={20} color="#E5A93C" />
              <span>Hypoallergenic</span>
            </div>
            <div className="badge-item">
              <Truck size={20} color="#E5A93C" />
              <span>Free Shipping all over Pakistan</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}