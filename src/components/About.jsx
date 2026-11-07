import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Scissors, Heart, ShieldCheck } from 'lucide-react';
import '../styles/About.css';

const STATS = [
  { value: '100%', label: 'Organic Cotton' },
  { value: '0', label: 'Harsh Chemicals' },
  { value: 'GOTS', label: 'Certified' },
];

const VALUES = [
  { icon: Leaf, title: '100% Organic', text: 'GOTS certified, chemical-free dyes.' },
  { icon: Scissors, title: 'Play-Proof', text: 'Reinforced double-stitched seams.' },
  { icon: Heart, title: 'Skin Friendly', text: 'Soft and breathable, gentle all day.' },
  { icon: ShieldCheck, title: 'Hypoallergenic', text: 'Safe for sensitive little skin.' },
];

const viewport = { once: true, margin: '-60px' };

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-grid">
        {/* ---------- Story ---------- */}
        <motion.div
          className="about-content"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6 }}
        >
          <span className="about-tag">Our Story</span>
          <h2 className="about-title">Crafting Comfort For Every Little Nest 🌾</h2>
          <p className="about-text">
            At <strong>Kids Nest</strong>, we believe childhood should be filled with comfort,
            freedom, and playfulness. Founded with a vision to eliminate harsh chemicals from
            kids' wardrobes, every single garment is ethically stitched from 100% organic,
            breathable cotton.
          </p>

          <div className="about-stats">
            {STATS.map((s) => (
              <div className="stat-item" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ---------- Value cards ---------- */}
        <div className="values-grid">
          {VALUES.map((v, i) => {
            const Icon = v.icon;
            return (
              <motion.div
                className="value-card"
                key={v.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="value-icon">
                  <Icon size={22} />
                </div>
                <div className="value-body">
                  <h4 className="value-title">{v.title}</h4>
                  <p className="value-text">{v.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}