import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Palette, Lightbulb, Settings } from 'lucide-react';

const customOptions = [
  {
    icon: Ruler,
    title: 'Dimensões',
    description: 'Tamanho personalizado para sua coleção'
  },
  {
    icon: Settings,
    title: 'Compartimentos',
    description: 'Divisórias sob medida para cada faca'
  },
  {
    icon: Lightbulb,
    title: 'Iluminação',
    description: 'LED branco, âmbar ou RGB'
  },
  {
    icon: Palette,
    title: 'Acabamento',
    description: 'Madeiras, vernizes e detalhes exclusivos'
  }
];

const Customization = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
              Seu Expositor,
              <span className="block text-amber-400">Seu Estilo</span>
            </h2>
            
            <p className="font-inter text-xl text-gray-300 mb-8 leading-relaxed">
              Escolha o tamanho, compartimentos, iluminação, acabamento e detalhes. 
              <span className="block mt-2 font-semibold text-amber-200">
                Cada peça é feita exclusivamente para você.
              </span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {customOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-neutral-800 border border-neutral-700"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-amber-600 rounded-lg flex items-center justify-center">
                    <option.icon size={24} className="text-black" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-white mb-1">
                      {option.title}
                    </h3>
                    <p className="font-inter text-sm text-gray-400">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-amber-600/10 border border-amber-600/30 rounded-xl p-6"
            >
              <p className="font-inter text-amber-200 font-medium text-center">
                💡 Atendimento personalizado para cada projeto
              </p>
            </motion.div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src="https://images.pexels.com/photos/5691624/pexels-photo-5691624.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Processo artesanal de produção"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-inter text-white font-medium">
                  Processo artesanal com atenção aos mínimos detalhes
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4 bg-amber-600 text-black p-4 rounded-full shadow-xl"
            >
              <Settings size={24} />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -left-4 bg-white text-black p-4 rounded-full shadow-xl"
            >
              <Palette size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Customization;