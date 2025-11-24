'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function Checkout() {
  const router = useRouter();
  const { cart, totalPrice, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'bank'>('cash');
  const [showQR, setShowQR] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: 'Phòng G304, tầng 1 tòa BC...'
  });

  const handleOrder = () => {
    if(!formData.name || !formData.phone || !formData.address) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (paymentMethod === 'bank') {
      setShowQR(true); // Show QR popup
    } else {
      finishOrder(); // Go straight to success
    }
  };

  const finishOrder = () => {
    // Generate random Order ID and pass it via URL
    const orderId = Math.floor(100000000 + Math.random() * 900000000);
    clearCart();
    router.push(`/success?id=${orderId}`);
  };

  if (cart.length === 0) {
    return (
      <div className="container" style={{textAlign:'center', marginTop: 50}}>
        <h2>Giỏ hàng trống</h2>
        <Link href="/" style={{color: 'var(--primary)', marginTop: 20, display:'block'}}>Quay lại menu</Link>
      </div>
    );
  }

  return (
    <main className="container" style={{paddingTop: 20}}>
      <div style={{display:'flex', alignItems:'center', gap: 10, marginBottom: 20}}>
        <Link href="/" style={{textDecoration:'none', fontSize: '1.2rem'}}>←</Link>
        <h1>Thông tin giỏ hàng</h1>
      </div>

      <div className="checkout-grid">
        {/* LEFT COLUMN: INFO */}
        <div>
          {/* Delivery Method Tab */}
          <div className="checkout-card">
            <div className="tab-group">
              <div className="tab active">Giao hàng</div>
              <div className="tab" style={{color:'#ccc', cursor:'not-allowed'}}>Tự đến lấy</div>
            </div>

            {/* Address Input */}
            <div className="form-group">
              <label className="form-label">Địa chỉ nhận đồ</label>
              <textarea 
                className="form-input" 
                rows={2}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>

            {/* Customer Info */}
            <div className="form-group">
              <label className="form-label">Tên người nhận</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Nhập tên..."
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Số điện thoại</label>
              <input 
                type="tel" 
                className="form-input" 
                placeholder="Nhập số điện thoại..."
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
          </div>

          {/* Payment Method */}
          <div className="checkout-card">
            <div className="checkout-header">Phương thức thanh toán</div>
            <div 
              className={`payment-option ${paymentMethod === 'cash' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('cash')}
            >
              <span>Thanh toán khi nhận hàng (COD)</span>
            </div>
            <div 
              className={`payment-option ${paymentMethod === 'bank' ? 'selected' : ''}`}
              onClick={() => setPaymentMethod('bank')}
            >
              <span>Chuyển khoản (QR Code)</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: SUMMARY */}
        <div>
          <div className="checkout-card">
            <div className="checkout-header">Món đã chọn</div>
            {cart.map(item => (
              <div key={item.id} style={{display:'flex', justifyContent:'space-between', marginBottom:10, fontSize:'0.9rem'}}>
                <span>{item.quantity}x {item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            
            <div className="summary-total">
              <div className="summary-row">
                <span>Tiền phải thanh toán</span>
                <span style={{color:'var(--primary)'}}>${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            <button className="order-btn" onClick={handleOrder}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>

      {/* QR MODAL (Only shows if Bank Transfer selected) */}
      {showQR && (
        <div className="qr-modal">
          <div className="qr-content">
            <h3>Quét mã để thanh toán</h3>
            {/* Fake QR Code */}
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CampusGoPayment" alt="QR Code" className="qr-code-img" />
            <p style={{marginBottom: 20, fontSize:'0.9rem'}}>Vui lòng chuyển khoản chính xác số tiền.</p>
            <button className="checkout-btn" onClick={finishOrder}>
              Đã chuyển khoản
            </button>
          </div>
        </div>
      )}
    </main>
  );
}