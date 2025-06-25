import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the button after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip after button appears
    if (isVisible) {
      const tooltipTimer = setTimeout(() => {
        setShowTooltip(true);
        // Hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }, 1000);

      return () => clearTimeout(tooltipTimer);
    }
  }, [isVisible]);

  const openWhatsApp = () => {
    window.open('https://wa.me/554791334961?text=Olá! Gostaria de saber mais sobre os expositores premium para facas!', '_blank');
  };

  const hideTooltip = () => {
    setShowTooltip(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 100 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20,
            duration: 0.6 
          }}
          className="fixed bottom-6 right-6 z-50"
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-full right-0 mb-4 bg-white text-black px-4 py-3 rounded-xl shadow-2xl border border-gray-200 max-w-xs"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-inter font-semibold text-sm mb-1">
                      💬 Fale Conosco!
                    </p>
                    <p className="font-inter text-xs text-gray-600 leading-relaxed">
                      Tire suas dúvidas sobre nossos expositores premium
                    </p>
                  </div>
                  <button
                    onClick={hideTooltip}
                    className="text-gray-400 hover:text-gray-600 transition-colors duration-200 flex-shrink-0"
                  >
                    <X size={14} />
                  </button>
                </div>
                
                {/* Arrow */}
                <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* WhatsApp Button */}
          <motion.button
            onClick={openWhatsApp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:shadow-green-500/50 group relative overflow-hidden"
          >
            {/* Pulse animation */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
            
            {/* Icon */}
            <MessageCircle size={28} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
          </motion.button>

          {/* Online indicator */}
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-400 border-2 border-white rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;