'use client';
import { CheckCircle, Hammer, Shield, Heart } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const highlights = [
    {
      icon: <Hammer className="w-5 h-5" />,
      text: "100% fabricação artesanal"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      text: "Materiais de primeira qualidade"
    },
    {
      icon: <Heart className="w-5 h-5" />,
      text: "Paixão em cada detalhe"
    }
  ];

  // Add animation to the stats overlay
  const stats = [
    { value: "10+", label: "Anos de Experiência" },
    { value: "500+", label: "Facas Produzidas" }
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="historia.webp"
                alt="Artesão JSL trabalhando em uma faca"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Modified stats overlay with animation */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg transition-all duration-300 hover:scale-105">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    {stats.map((stat, index) => (
                      <div key={index} className="group">
                        <div className="text-2xl font-bold text-amber-600 group-hover:scale-110 transition-transform">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-amber-200 rounded-full blur-2xl opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-200 rounded-full blur-2xl opacity-60"></div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                Nossa História
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Tradição e 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  {' '}excelência
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                A <strong className="text-gray-900">JSL ARTESANATOS</strong> nasceu da paixão pela cutelaria tradicional 
                e do comprometimento com a excelência artesanal. Cada faca é única, 
                forjada com técnicas ancestrais e materiais cuidadosamente selecionados.
              </p>
              
              <p>
                Nossa missão é preservar a arte da cutelaria artesanal, criando peças 
                funcionais e belas que se tornem verdadeiros tesouros para colecionadores 
                e entusiastas que valorizam a qualidade superior.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center text-amber-600">
                    {highlight.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{highlight.text}</span>
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <blockquote className="text-gray-700 italic text-lg">
              &quot; Cada lâmina conta uma história. Nossa história é de dedicação, 
                precisão e amor pelo ofício tradicional da cutelaria.&ldquo;
              </blockquote>
              <cite className="text-amber-700 font-semibold mt-2 block">
                — JSL ARTESANATOS
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}