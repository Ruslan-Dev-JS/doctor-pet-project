'use client';

import { useBooking } from '@/components/BookingContext';

export function Hero() {
  const { openBooking } = useBooking();
  return (
    <>
      <h1>Здоров&apos;я вашої посмішки</h1>
      <p>Професійна пародонтологія та щелепно-лицева хірургія</p>
      <button type="button" onClick={openBooking}>
        Записатися на прийом
      </button>
    </>
  );
}
