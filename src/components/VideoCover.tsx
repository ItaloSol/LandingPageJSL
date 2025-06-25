import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoCover = () => {
  return (
    <div className="relative w-full max-w-sm mx-auto bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '9/16' }}>
      {/* Background Image - 13facas.webp */}
      <div className="absolute inset-0">
        <img 
          src="/13facas.webp"
          alt="Personalização de expositores de facas artesanais"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/50"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-between p-6">
        {/* Top Section - Duration Badge */}
        <div className="flex justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg"
          >
            <span className="font-inter font-medium text-sm">2:30</span>
          </motion.div>
        </div>

        {/* Center Section - Play Button */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main Play Button */}
            <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-2xl hover:bg-red-700 transition-colors duration-300 cursor-pointer">
              <Play size={32} className="text-white ml-1" fill="currentColor" />
            </div>
            
            {/* Pulsing ring effect */}
            <div className="absolute inset-0 border-2 border-white/40 rounded-full scale-125 animate-pulse"></div>
          </motion.div>
        </div>

        {/* Bottom Section - Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-3"
        >
          {/* Main Title */}
          <h1 className="font-playfair text-2xl font-bold text-white leading-tight">
            Personalização de
            <span className="block text-amber-400">Expositores de Facas</span>
            <span className="block text-lg font-inter font-medium text-gray-200 mt-1">Artesanais</span>
          </h1>
          
          {/* Call to Action */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
            <p className="font-inter text-sm text-gray-300">
              Toque para assistir
            </p>
          </div>
        </motion.div>
      </div>

      {/* Corner decorative elements */}
      <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-amber-600/30 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-amber-600/20 to-transparent"></div>
    </div>
  );
};

export default VideoCover;