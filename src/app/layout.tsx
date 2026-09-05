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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png',
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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('sajan_theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className="antialiased selection:bg-[#C89D66] selection:text-[#0B0705]"
        style={{
          backgroundColor: 'var(--bg-primary)',
          color: 'var(--text-primary)',
          transition: 'background-color 0.4s ease, color 0.4s ease',
        }}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
