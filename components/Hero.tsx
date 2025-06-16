'use client';
import { Button } from '@/components/ui/button';
import { MessageCircle, Award, Users, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  const handleWhatsAppContact = () => {
    const phoneNumber = "5511999999999"; // Substitua pelo número real
    const message = "Olá! Tenho interesse em suas facas artesanais!";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium border border-amber-200">
              <Award className="w-4 h-4" />
              Artesanato de excelência desde 2015
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                A arte da
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                  cutelaria
                </span>
                em cada lâmina
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 font-light max-w-2xl">
                Facas artesanais feitas à mão para colecionadores exigentes. 
                Tradição, precisão e materiais nobres em cada peça única.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-600" />
                <span>500+ Clientes Satisfeitos</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-amber-600" />
                <span>Avaliação 5.0</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button 
                onClick={handleWhatsAppContact}
                size="lg"
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Fale conosco via WhatsApp
              </Button>
              
              <p className="text-sm text-gray-500 mt-3">
                Atendimento personalizado • Orçamentos gratuitos
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200 to-orange-200 rounded-3xl blur-2xl opacity-30 transform rotate-6"></div>
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                <div className="aspect-square relative overflow-hidden rounded-2xl">
                  <Image
                    src="https://images.pexels.com/photos/7195994/pexels-photo-7195994.jpeg"
                    alt="Faca artesanal JSL ARTESANATOS"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                  Feito à Mão
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
}