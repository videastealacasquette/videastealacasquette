import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Vidéaste à la Casquette — Vidéo pour entreprises (Tarn)',
  description: 'Des vidéos qui font cliquer, qui donnent envie d’acheter. Contenu vertical, corporate moderne, UGC & ads locales.',
  metadataBase: new URL('https://videastealacasquette.fr'),
  openGraph: {
    title: 'Vidéaste à la Casquette',
    description: 'Contenu vidéo qui performe pour entreprises locales.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
