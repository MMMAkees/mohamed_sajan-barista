import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Abdul Rahman Mohammed Sajan | Specialty Coffee Barista Portfolio',
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
  openGraph: {
    title: 'Abdul Rahman Mohammed Sajan — Specialty Barista Portfolio',
    description: 'Artisanal Specialty Barista Portfolio showcasing espresso calibration, 3D coffee simulator, latte art gallery, and professional experience in Qatar & Sri Lanka.',
    url: 'https://mohamed-sajan-barista.vercel.app',
    siteName: 'Sajan Specialty Barista',
    images: [
      {
        url: '/sajan.png',
        width: 800,
        height: 1000,
        alt: 'Abdul Rahman Mohammed Sajan Specialty Barista',
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
      <body className="bg-[#0B0705] text-[#F5EAE0] antialiased selection:bg-[#C89D66] selection:text-[#0B0705]">
        {children}
      </body>
    </html>
  );
}
