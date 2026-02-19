'use client';

import { useBooking } from '@/components/BookingContext';

export function CtaSection() {
  const { openBooking } = useBooking();
  return (
    <>
      <section className="cta-final" aria-labelledby="cta-final-title">
        <h2 id="cta-final-title" className="cta-final-title">
          Довірте здоров&apos;я своїх ясен експерту
        </h2>
        <button type="button" className="btn-outline-light" onClick={openBooking}>
          Записатися на консультацію
        </button>
      </section>
      <footer className="main-footer">
        <p>© 2026 Лікар парадонтолог. Всі права захищені.</p>
      </footer>
    </>
  );
}
