import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import '../styles/AnnouncementBar.css';

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-content">
        <Sparkles size={14} className="sparkle-icon" />
        <span className="promo-badge">GRAND LAUNCH SALE</span>
        <span>Get Extra 20% OFF on Orders Over 2000 | Code: <strong>Everx13</strong></span>
      </div>
      <button className="close-announcement" onClick={() => setVisible(false)}>
        <X size={16} />
      </button>
    </div>
  );
}
