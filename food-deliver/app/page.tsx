'use client';
import { useState } from 'react';
import Link from 'next/link';
import { foodItems, categories, FoodItem } from '../data/items';
import { useCart } from '../context/CartContext';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cart, addToCart, removeFromCart, totalItems, totalPrice } = useCart();

  const filteredItems = selectedCategory === "All" 
    ? foodItems 
    : foodItems.filter((item) => item.category === selectedCategory);

  const handleAddToCart = (item: FoodItem) => {
    addToCart(item);
    setIsCartOpen(true);
  };

  return (
    <main>
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">CampusGo</div>
          <button className="cart-btn" onClick={() => setIsCartOpen(true)}>
            Giỏ hàng • {totalItems}
          </button>
        </div>
      </nav>

      <div className="container">
        <header className="hero-banner">
          <h1>Order & Enjoy</h1>
          <p>Fresh meals delivered to your doorstep instantly.</p>
        </header>

        <section className="category-scroll">
          {categories.map((cat) => (
            <button key={cat} onClick={() => setSelectedCategory(cat)}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}>
              {cat}
            </button>
          ))}
        </section>

        <section className="grid">
          {filteredItems.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-img" />
              <div className="card-content">
                <div className="card-top">
                  <h3 className="card-title">{item.name}</h3>
                  <span className="card-price">${item.price.toFixed(2)}</span>
                </div>
                <p className="card-desc">{item.desc}</p>
                <button onClick={() => handleAddToCart(item)} className="add-btn">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* Cart Sidebar */}
      <div className={`cart-overlay ${isCartOpen ? 'open' : ''}`} onClick={() => setIsCartOpen(false)} />
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>My Order</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? <p style={{textAlign:'center', marginTop:20}}>Trống</p> : cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-img" />
              <div className="cart-item-info">
                <span className="cart-item-title">{item.name}</span>
                <span className="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
              <div className="qty-controls">
                <button className="qty-btn" onClick={() => removeFromCart(item.id)}>−</button>
                <span className="qty-count">{item.quantity}</span>
                <button className="qty-btn" onClick={() => addToCart(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-footer">
          <div className="total-row"><span>Total</span><span>${totalPrice.toFixed(2)}</span></div>
          <Link href="/checkout" className="checkout-btn">Thanh toán</Link>
        </div>
      </div>
    </main>
  );
}