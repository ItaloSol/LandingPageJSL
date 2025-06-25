import { motion } from 'framer-motion';
import { Lightbulb, Shield, Lock, Gem, Eye, Palette } from 'lucide-react';

const benefits = [
  {
    icon: Lightbulb,
    title: 'Iluminação LED Embutida',
    description: 'Sistema de LED integrado que realça cada detalhe das suas facas com luz uniforme e elegante.'
  },
  {
    icon: Gem,
    title: 'Madeira Nobre e Acabamento Artesanal',
    description: 'Selecionamos as melhores madeiras e aplicamos técnicas artesanais para um acabamento impecável.'
  },
  {
    icon: Lock,
    title: 'Fechadura de Segurança',
    description: 'Sistema de travamento discreto e eficiente para proteger sua coleção com total segurança.'
  },
  {
    icon: Shield,
    title: 'Fundo em Veludo Premium',
    description: 'Revestimento interno em veludo de alta qualidade que protege e valoriza cada peça.'
  },
  {
    icon: Eye,
    title: 'Porta em Acrílico',
    description: 'Acrílico cristal de alta resistência para visualização perfeita e proteção contra poeira.'
  },
  {
    icon: Palette,
    title: 'Totalmente Personalizável',
    description: 'Dimensões, compartimentos, acabamentos e detalhes customizados para suas necessidades.'
  }
];

const Benefits = () => {
  return (
    <section className="py-16 sm:py-20 bg-neutral-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Excelência em Cada Detalhe
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Cada expositor é uma obra de arte funcional, criada para elevar sua coleção ao patamar que ela merece.
          </p>
        </motion.div>

        {/* Hero Image with 9:16 aspect ratio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16 rounded-2xl overflow-hidden max-w-md mx-auto"
        >
          <div className="relative" style={{ aspectRatio: '9/16' }}>
            <img 
              src="/beneficios.webp"
              alt="Artesão trabalhando em expositor premium para facas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 text-center">
              <h3 className="font-playfair text-xl sm:text-2xl font-bold text-white mb-2">
                Artesanato de Excelência
              </h3>
              <p className="font-inter text-gray-200 text-sm leading-relaxed">
                Cada expositor é cuidadosamente produzido por artesãos especializados, 
                garantindo qualidade superior e atenção aos mínimos detalhes.
              </p>
            </div>
            
            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute top-6 right-6 bg-amber-600 text-black p-3 rounded-full shadow-xl"
            >
              <Gem size={20} />
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-800 p-6 sm:p-8 rounded-2xl hover:bg-neutral-700 transition-all duration-300 transform hover:scale-105 border border-neutral-700"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-amber-600 rounded-xl mb-6 mx-auto">
                <benefit.icon size={32} className="text-black" />
              </div>
              <h3 className="font-inter text-lg font-semibold text-white mb-3 text-center">
                {benefit.title}
              </h3>
              <p className="font-inter text-gray-300 text-center leading-relaxed text-sm sm:text-base">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;