'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';

function SuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('id');

  return (
    <div className="success-container">
      <div className="success-icon">✓</div>
      
      <h1 className="success-title">Thanh toán thành công</h1>
      
      <p style={{marginBottom: 5}}>Mã số đơn hàng của bạn là:</p>
      <div className="order-id">{orderId || '833883794'}</div>
      
      <p className="success-msg">
        Bạn vui lòng để ý điện thoại khi đơn hàng tới nha!
      </p>

      <Link href="/" className="back-home-btn">
        TIẾP TỤC MUA HÀNG
      </Link>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <SuccessContent />
      </Suspense>
    </main>
  );
}