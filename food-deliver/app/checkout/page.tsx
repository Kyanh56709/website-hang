'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function Checkout() {
  const router = useRouter();
  const { cart, totalPrice, totalItems, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'bank'>('cash');
  const [showQR, setShowQR] = useState(false);
  
  // Calculate Shipping Fee based on logic:
  // < 5 items = 5,000 VND
  // >= 5 items = 10,000 VND
  const shippingFee = totalItems >= 5 ? 10000 : 5000;
  const finalTotal = totalPrice + shippingFee;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    time: 'Càng sớm càng tốt', // Default as per screenshot
    note: '' // Added for "Nước ngọt đóng chai"
  });

  const handleOrder = () => {
    if(!formData.name || !formData.phone || !formData.address) {
      alert("Vui lòng điền đầy đủ Tên, SĐT và Địa chỉ!");
      return;
    }

    if (paymentMethod === 'bank') {
      setShowQR(true);
    } else {
      finishOrder();
    }
  };

  const finishOrder = () => {
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
        <h1 style={{fontSize: '1.5rem'}}>Thông tin giỏ hàng</h1>
      </div>

      <div className="checkout-grid">
        {/* LEFT COLUMN */}
        <div>
          <div className="checkout-card">
            {/* Delivery only - No tabs */}
            <div style={{
              background: '#f1f2f6', 
              padding: '10px 15px', 
              borderRadius: '8px', 
              fontWeight: 'bold', 
              marginBottom: '20px',
              textAlign: 'center',
              color: 'var(--dark)'
            }}>
              Giao hàng tận nơi
            </div>

            {/* Address with Example in Label */}
            <div className="form-group">
              <label className="form-label">
                Địa chỉ nhận đồ 
                <span style={{fontWeight: 400, color: '#888', marginLeft: 8, fontSize: '0.85rem'}}>
                  (VD: Phòng G304, tầng 1 tòa BC...)
                </span>
              </label>
              <input 
                className="form-input" 
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
              />
            </div>

             {/* Delivery Time (New) */}
             <div className="form-group">
              <label className="form-label">Thời gian giao hàng</label>
              <select 
                className="form-input"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              >
                <option value="Càng sớm càng tốt">Càng sớm càng tốt</option>
                <option value="Sau 30 phút">Sau 30 phút</option>
                <option value="Sau 1 tiếng">Sau 1 tiếng</option>
              </select>
            </div>

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

            {/* Note Field (Important for drinks) */}
            <div className="form-group">
              <label className="form-label">Ghi chú món ăn (VD: Loại nước ngọt)</label>
              <textarea 
                className="form-input"
                rows={2}
                placeholder="VD: Cho mình lấy Coca, không cay..."
                value={formData.note}
                onChange={(e) => setFormData({...formData, note: e.target.value})}
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

        {/* RIGHT COLUMN */}
        <div>
          <div className="checkout-card">
            <div className="checkout-header">Món đã chọn</div>
            {cart.map(item => (
              <div key={item.id} style={{display:'flex', justifyContent:'space-between', marginBottom:10, fontSize:'0.9rem'}}>
                <span>{item.quantity}x {item.name}</span>
                {/* Format VND */}
                <span>{(item.price * item.quantity).toLocaleString('vi-VN')}đ</span>
              </div>
            ))}
            
            <div className="summary-total">
              <div className="summary-row" style={{fontWeight: 400}}>
                <span>Tổng cộng {totalItems} món</span>
                <span>{totalPrice.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="summary-row" style={{fontWeight: 400}}>
                <span>Phí vận chuyển</span>
                <span>{shippingFee.toLocaleString('vi-VN')}đ</span>
              </div>
              <div className="summary-row" style={{marginTop: 15, fontSize: '1.2rem', color: 'var(--primary)'}}>
                <span>Tiền phải thanh toán</span>
                <span>{finalTotal.toLocaleString('vi-VN')}đ</span>
              </div>
            </div>

            <button className="order-btn" onClick={handleOrder}>
              Đặt hàng
            </button>
          </div>
        </div>
      </div>

      {/* QR MODAL */}
      {showQR && (
        <div className="qr-modal">
          <div className="qr-content">
            <h3>Quét mã để thanh toán</h3>
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=CampusGoPayment" alt="QR Code" className="qr-code-img" />
            <p style={{marginBottom: 20, fontSize:'0.9rem'}}>
              Vui lòng chuyển khoản: <b style={{color:'var(--primary)'}}>{finalTotal.toLocaleString('vi-VN')}đ</b>
            </p>
            <button className="checkout-btn" onClick={finishOrder}>
              Đã chuyển khoản
            </button>
            <button 
              style={{marginTop: 10, background: 'transparent', border:'none', textDecoration:'underline', cursor:'pointer'}} 
              onClick={() => setShowQR(false)}
            >
              Quay lại
            </button>
          </div>
        </div>
      )}
    </main>
  );
}