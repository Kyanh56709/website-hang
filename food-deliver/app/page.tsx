'use client';

import { useState, useMemo } from 'react';
import { foodItems, categories, FoodItem } from '../data/items'; 

// Extend the FoodItem type to include quantity for the cart
interface CartItem extends FoodItem {
  quantity: number;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // 1. Filter Logic
  const filteredItems = selectedCategory === "All" 
    ? foodItems 
    : foodItems.filter((item) => item.category === selectedCategory);

  // 2. Cart Logic: Add Item
  const addToCart = (item: FoodItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      
      if (existingItem) {
        // If item exists, increase quantity
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // If item is new, add it with quantity 1
        return [...prevCart, { ...item, quantity: 1 }];
      }
    });
    
    // Open cart automatically when adding (optional UX choice)
    setIsCartOpen(true);
  };

  // 3. Cart Logic: Remove/Decrease Item
  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      }).filter((item) => item.quantity > 0); // Remove items with 0 quantity
    });
  };

  // 4. Calculate Total Price
  const totalPrice = useMemo(() => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [cart]);

  // 5. Calculate Total Items Count
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <main>
      {/* --- Navbar --- */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">iPos Food</div>
          <button 
            className="cart-btn" 
            onClick={() => setIsCartOpen(true)}
          >
            Cart • {totalItems}
          </button>
        </div>
      </nav>

      {/* --- Main Content --- */}
      <div className="container">
        
        {/* Hero Banner */}
        <header className="hero-banner">
          <h1>Order & Enjoy</h1>
          <p>Fresh meals delivered to your doorstep instantly.</p>
        </header>

        {/* Categories */}
        <section className="category-scroll">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`cat-btn ${selectedCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </section>

        {/* Food Grid */}
        <section className="grid">
          {filteredItems.map((item: FoodItem) => (
            <div key={item.id} className="card">
              <img src={item.image} alt={item.name} className="card-img" />
              <div className="card-content">
                <div className="card-top">
                  <h3 className="card-title">{item.name}</h3>
                  <span className="card-price">${item.price.toFixed(2)}</span>
                </div>
                <p className="card-desc">{item.desc}</p>
                <button 
                  onClick={() => addToCart(item)}
                  className="add-btn"
                >
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </section>
      </div>

      {/* --- CART SIDEBAR & OVERLAY --- */}
      
      {/* Dark Background Overlay */}
      <div 
        className={`cart-overlay ${isCartOpen ? 'open' : ''}`} 
        onClick={() => setIsCartOpen(false)}
      />

      {/* Sliding Drawer */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        
        {/* Header */}
        <div className="cart-header">
          <h2>My Order</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
        </div>

        {/* Items List */}
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Your cart is empty.</p>
          ) : (
            cart.map((item) => (
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
            ))
          )}
        </div>

        {/* Footer */}
        <div className="cart-footer">
          <div className="total-row">
            <span>Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <button className="checkout-btn" disabled={cart.length === 0}>
            Checkout Now
          </button>
        </div>
      </div>

    </main>
  );
}