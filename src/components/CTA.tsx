import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Clock, Award, MessageCircle } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

const CTA = () => {
  const { trackPurchaseIntent, trackWhatsAppClick } = useAnalytics();

  const handleGetQuote = () => {
    trackWhatsAppClick('cta_get_quote');
    const message = 'Olá! Quero garantir meu expositor premium personalizado para facas! Pode me enviar um orçamento detalhado?';
    window.open(`https://wa.me/554791334961?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openWhatsApp = () => {
    trackWhatsAppClick('cta_section');
    const message = 'Olá! Gostaria de um orçamento personalizado para expositor de facas. Pode me ajudar?';
    window.open(`https://wa.me/554791334961?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-r from-amber-600 to-amber-700 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Garanta o Expositor Ideal
            <span className="block">para Sua Coleção</span>
          </h2>
          
          <p className="font-inter text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed px-2">
            Transforme sua paixão por facas em uma exposição digna de colecionador.
            <span className="block mt-2 font-semibold">
              Cada peça é única e feita especialmente para você.
            </span>
          </p>
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/10 rounded-xl p-4 sm:p-6"
            >
              <Clock size={28} className="text-white mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-white mb-2 text-sm sm:text-base">Entrega Rápida</h3>
              <p className="font-inter text-white/70 text-xs sm:text-sm">15-20 dias úteis</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/10 rounded-xl p-4 sm:p-6"
            >
              <Award size={28} className="text-white mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-white mb-2 text-sm sm:text-base">Garantia Total</h3>
              <p className="font-inter text-white/70 text-xs sm:text-sm">12 meses</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-black/10 rounded-xl p-4 sm:p-6"
            >
              <MessageCircle size={28} className="text-white mx-auto mb-3" />
              <h3 className="font-inter font-semibold text-white mb-2 text-sm sm:text-base">Suporte VIP</h3>
              <p className="font-inter text-white/70 text-xs sm:text-sm">Atendimento exclusivo</p>
            </motion.div>
          </div>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            onClick={handleGetQuote}
            className="bg-black text-white font-inter font-bold text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:scale-105 transition-all duration-300 shadow-2xl flex items-center justify-center gap-3 mx-auto hover:shadow-black/50"
          >
            <MessageCircle size={20} />
            Solicitar Orçamento
          </motion.button>
          
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            viewport={{ once: true }}
            onClick={openWhatsApp}
            className="font-inter text-white/80 hover:text-white mt-4 text-xs sm:text-sm px-2 underline transition-colors duration-300"
          >
            💬 Fale conosco pelo WhatsApp para um orçamento personalizado
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;