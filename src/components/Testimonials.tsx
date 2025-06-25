import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Roberto Mendes',
    role: 'Colecionador há 15 anos',
    initials: 'RM',
    text: 'Sou colecionador de facas forjadas há mais de 15 anos e nunca tinha encontrado um expositor tão bem acabado. A iluminação LED valoriza cada detalhe das minhas peças. O melhor é que foi feito exatamente como eu queria!',
    rating: 5
  },
  {
    name: 'Carlos Silva',
    role: 'Colecionador de Facas',
    initials: 'CS',
    text: 'O expositor personalizado para minha coleção se tornou o centro das atenções na minha sala. Todos os visitantes ficam impressionados com a qualidade e beleza. O fundo em veludo realça perfeitamente cada peça.',
    rating: 5
  },
  {
    name: 'Amanda Pereira',
    role: 'Colecionadora de canivetes',
    initials: 'AP',
    text: 'Encomendei um expositor para minha coleção de canivetes e o resultado superou todas as expectativas. A atenção aos detalhes e a possibilidade de personalizar cada aspecto fizeram toda a diferença. Um investimento que valeu cada centavo.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 bg-neutral-800 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            O Que Dizem Nossos
            <span className="block text-amber-400">Clientes</span>
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Colecionadores de todo o Brasil confiam na qualidade dos nossos expositores para valorizar suas coleções.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-black rounded-2xl p-6 sm:p-8 border border-neutral-700 hover:border-amber-600/50 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <blockquote className="font-inter text-gray-200 italic mb-6 leading-relaxed text-sm sm:text-base">
                "{testimonial.text}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="font-inter font-bold text-black text-lg">
                    {testimonial.initials}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-inter font-semibold text-white text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-xs sm:text-sm text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <div className="bg-amber-600/10 border border-amber-600/30 rounded-xl p-4 sm:p-6 max-w-2xl mx-auto">
            <p className="font-inter text-amber-200 font-medium text-sm sm:text-base">
              ⭐ Mais de 200 clientes satisfeitos em todo o Brasil
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;