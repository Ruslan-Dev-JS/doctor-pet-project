'use client';

import { BookingProvider } from './BookingContext';

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return <BookingProvider>{children}</BookingProvider>;
}
