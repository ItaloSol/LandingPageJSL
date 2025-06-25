import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const reasons = [
  'Produzido artesanalmente por profissionais especializados',
  'Design sofisticado feito sob medida para sua coleção',
  'Protege e valoriza investimentos em facas premium',
  'Personalização completa para colecionadores exigentes',
  'Materiais de primeira qualidade e acabamento impecável',
  'Garantia de satisfação e pós-venda diferenciado'
];

const WhyChoose = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-8">
            Por que Escolher Nossos
            <span className="block text-amber-400">Expositores?</span>
          </h2>
          
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-neutral-900 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center mt-1">
                  <Check size={16} className="text-black" />
                </div>
                <p className="font-inter text-lg text-gray-200 leading-relaxed">
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-neutral-900 rounded-2xl border border-amber-600/20"
          >
            <p className="font-inter text-xl text-amber-200 font-medium">
              "Transformamos sua paixão por facas em uma exposição digna de museu"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;