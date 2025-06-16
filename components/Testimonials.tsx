'use client';
import { useState, useEffect } from 'react';
import { testimonials } from '@/data/products';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
            Depoimentos
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            O que nossos
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {' '}clientes dizem
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full blur-2xl opacity-50"></div>
            
            {/* Quote icon */}
            <div className="absolute top-8 left-8 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-amber-600" />
            </div>

            {/* Testimonial content */}
            <div className="relative z-10 text-center space-y-8">
              {/* Stars */}
              <div className="flex justify-center gap-1">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-xl md:text-2xl text-gray-700 font-light leading-relaxed max-w-3xl mx-auto">
              &quot;{testimonials[currentIndex].text}&ldquo;
              </blockquote>

              {/* Author */}
              <div className="space-y-2">
                <div className="font-bold text-gray-900 text-lg">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-gray-500">
                  {testimonials[currentIndex].location}
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <Button
                onClick={prevTestimonial}
                variant="outline"
                size="icon"
                className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 hover:bg-white border-amber-200 hover:border-amber-300"
              >
                <ChevronLeft className="w-5 h-5 text-amber-600" />
              </Button>
              
              <Button
                onClick={nextTestimonial}
                variant="outline"
                size="icon"
                className="pointer-events-auto w-12 h-12 rounded-full bg-white/80 hover:bg-white border-amber-200 hover:border-amber-300"
              >
                <ChevronRight className="w-5 h-5 text-amber-600" />
              </Button>
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-amber-600 w-8' 
                    : 'bg-amber-200 hover:bg-amber-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Junte-se aos nossos clientes satisfeitos
          </p>
          <Button 
            onClick={() => {
              const phoneNumber = "5511999999999";
              const message = "Olá! Vi os depoimentos no site e gostaria de saber mais sobre as facas artesanais!";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Faça seu Pedido Agora
          </Button>
        </div>
      </div>
    </section>
  );
}