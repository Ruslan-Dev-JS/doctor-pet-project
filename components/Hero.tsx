'use client';

import { useBooking } from '@/components/BookingContext';

export function Hero() {
  const { openBooking } = useBooking();
  return (
    <section className="hero-block">
      <div className="hero-content">
        <h1>Линник Анастасія Віталіївна</h1>
        <p className="hero-subtitle">Лікар стоматолог-хірург, пародонтолог</p>
        <p className="hero-subtitle">Експерт з мікрохірургії ясен та імплантології</p>
        <div className="hero-actions">
          <button type="button" className="btn-primary" onClick={openBooking}>
            Записатися на консультацію
          </button>
          <a href="#contact" className="btn-secondary">
            Отримати план лікування
          </a>
        </div>
      </div>
      <div className="hero-photo-wrap">
        <img
          src="/img/IMG_1189.jpeg"
          alt="Линник Анастасія Віталіївна — лікар-пародонтолог"
        />
      </div>
    </section>
  );
}
