// import React from 'react';
// import { X, Trash2 } from 'lucide-react';
// import '../styles/CartDrawer.css';

// export default function CartDrawer({ isOpen, onClose, cartItems, onRemove }) {
//   const total = cartItems.reduce((sum, item) => sum + item.price, 0);

//   if (!isOpen) return null;

//   return (
//     <>
//       <div className="cart-overlay" onClick={onClose} />
//       <div className="cart-drawer open">
//         <div className="cart-header">
//           <h3 className="brand-font" style={{ fontSize: '1.6rem', color: '#4A2817' }}>Shopping Cart</h3>
//           <button onClick={onClose} style={{ background: 'none' }}><X size={22} /></button>
//         </div>

//         <div className="cart-items-list">
//           {cartItems.length === 0 ? (
//             <p style={{ textAlign: 'center', marginTop: '60px', color: '#8C6F60' }}>Your cart is empty.</p>
//           ) : (
//             cartItems.map((item, index) => (
//               <div key={index} className="cart-item-row">
//                 <img src={item.image} alt={item.name} className="cart-item-thumb" />
//                 <div className="cart-item-details">
//                   <h4 style={{ fontSize: '14px', color: '#3D2314' }}>{item.name}</h4>
//                   <p style={{ fontSize: '15px', fontWeight: '800', color: '#C4673A' }}>${item.price.toFixed(2)}</p>
//                 </div>
//                 <button onClick={() => onRemove(index)} style={{ background: 'none', color: '#C94A4A' }}>
//                   <Trash2 size={18} />
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         {cartItems.length > 0 && (
//           <div style={{ borderTop: '1px solid #EEE', paddingTop: '20px' }}>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '18px', fontWeight: '800', fontSize: '1.2rem' }}>
//               <span>Total:</span>
//               <span>${total.toFixed(2)}</span>
//             </div>
//             <button className="cart-checkout-btn">Proceed To Checkout</button>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }
