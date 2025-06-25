import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image as img element */}
      <img 
        src="/hero.png" 
        alt="Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-playfair text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Expositores Premium
          <span className="block text-amber-400">Personalizados</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-inter text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed px-2"
        >
          Beleza, segurança e sofisticação para sua coleção de facas.
          <span className="block mt-2 text-base sm:text-lg text-amber-200">Artesanais • Únicos • Sob Medida</span>
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={scrollToProducts}
          className="bg-amber-600 hover:bg-amber-700 text-black font-inter font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Ver Modelos Disponíveis
        </motion.button>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;