import Head from 'next/head';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductGallery from '@/components/ProductGallery';
import Differentials from '@/components/Differentials';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'JSL ARTESANATOS - Facas Artesanais de Alta Qualidade | Cutelaria Tradicional',
  description: 'Facas artesanais feitas à mão para colecionadores exigentes. Tradição, precisão e materiais nobres em cada peça única. Atendimento personalizado e qualidade superior.',
  keywords: 'facas artesanais, cutelaria, facas feitas à mão, colecionadores, aço carbono, facas personalizadas, JSL ARTESANATOS',
  authors: [{ name: 'JSL ARTESANATOS' }],
  openGraph: {
    title: 'JSL ARTESANATOS - Facas Artesanais de Alta Qualidade',
    description: 'Facas artesanais feitas à mão para colecionadores exigentes. Tradição, precisão e materiais nobres.',
    url: 'https://jslartesanatos.com.br',
    siteName: 'JSL ARTESANATOS',
    images: [
      {
        url: 'https://images.pexels.com/photos/7195994/pexels-photo-7195994.jpeg',
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
    images: ['https://images.pexels.com/photos/7195994/pexels-photo-7195994.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <About />
        <ProductGallery />
        <Differentials />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}