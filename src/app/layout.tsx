import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/context/ThemeContext';

export const metadata: Metadata = {
  title: 'Abdul Rahman Mohammed Sajan | Specialty Coffee Barista',
  description: 'Specialty Coffee Barista portfolio of Abdul Rahman Mohammed Sajan. Expert in espresso extraction & calibration, velvety microfoam latte art, manual brew methods (V60, French Press), HACCP food safety, and upscale counter management in Doha, Qatar & Colombo, Sri Lanka.',
  keywords: [
    'Barista',
    'Specialty Coffee',
    'Abdul Rahman Mohammed Sajan',
    'Barista Doha Qatar',
    'Pearl-Qatar Coffee',
    'Espresso Extraction',
    'Latte Art',
    'V60 Pour Over',
    'HACCP Barista',
    'Sajan Barista'
  ],
  authors: [{ name: 'Abdul Rahman Mohammed Sajan' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Abdul Rahman Mohammed Sajan — Specialty Barista Portfolio',
    description: 'Artisanal Specialty Barista Portfolio showcasing espresso calibration, 3D coffee simulator, latte art gallery, and professional experience in Qatar & Sri Lanka.',
    url: 'https://mohamed-sajan-barista.vercel.app',
    siteName: 'Sajan Specialty Barista',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'MS Monogram Logo — Abdul Rahman Mohammed Sajan',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-[#0B0705] dark:bg-[#0B0705] light:bg-[#FAF6F0] text-[#F5EAE0] dark:text-[#F5EAE0] light:text-[#1A100A] antialiased selection:bg-[#C89D66] selection:text-[#0B0705]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
