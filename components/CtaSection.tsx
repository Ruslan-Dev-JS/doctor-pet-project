'use client';

import { useBooking } from '@/components/BookingContext';

export function CtaSection() {
  const { openBooking } = useBooking();
  return (
    <section className="cta-section">
      <button type="button" onClick={openBooking}>
        Записатися на прийом
      </button>
      <footer className="main-footer">
        <p>© 2026 Лікар парадонтолог. Всі права захищені.</p>
      </footer>
    </section>
  );
}
