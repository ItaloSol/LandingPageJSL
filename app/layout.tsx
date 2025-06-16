import './globals.css';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'JSL ARTESANATOS - Facas Artesanais de Alta Qualidade | Cutelaria Tradicional',
  description: 'Facas artesanais feitas à mão para colecionadores exigentes. Tradição, precisão e materiais nobres em cada peça única. Atendimento personalizado e qualidade superior.',
  keywords: 'facas artesanais, cutelaria, facas feitas à mão, colecionadores, aço carbono, facas personalizadas, JSL ARTESANATOS, São Paulo',
  authors: [{ name: 'JSL ARTESANATOS' }],
  creator: 'JSL ARTESANATOS',
  publisher: 'JSL ARTESANATOS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://jslartesanatos.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JSL ARTESANATOS - Facas Artesanais de Alta Qualidade',
    description: 'Facas artesanais feitas à mão para colecionadores exigentes. Tradição, precisão e materiais nobres.',
    url: 'https://jslartesanatos.com.br',
    siteName: 'JSL ARTESANATOS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Faca artesanal JSL ARTESANATOS',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSL ARTESANATOS - Facas Artesanais de Alta Qualidade',
    description: 'Facas artesanais feitas à mão para colecionadores exigentes.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}