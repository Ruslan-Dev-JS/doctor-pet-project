import type { Metadata } from 'next';
import { ClientProviders } from '@/components/ClientProviders';
import './globals.css';

export const metadata: Metadata = {
  title: 'Лікар парадонтолог',
  description: 'Професійна пародонтологія та щелепно-лицева хірургія',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
