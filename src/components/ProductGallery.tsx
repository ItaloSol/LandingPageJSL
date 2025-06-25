import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const mainProducts = [
  {
    name: 'Expositor Suporte para Facas Artesanais sem Porta',
    price: 'R$ 688,00',
    description: 'Caixa em madeira sem porta, ideal para coleções abertas.',
    image: '/semporta.webp',
    features: ['Madeira Nobre', 'Acabamento Artesanal', 'Fundo em Veludo']
  },
  {
    name: 'Expositor para 10 Facas Laser com Porta Acrílico',
    price: 'R$ 694,00',
    description: 'Porta em policarbonato cristal resistente, iluminação LED, chave de segurança.',
    image: '/10facas.webp',
    features: ['LED Integrado', 'Porta Acrílico', 'Chave de Segurança']
  },
  {
    name: 'Expositor para 13 Facas com Porta',
    price: 'R$ 1.336,00',
    description: 'Suporte para 13 facas, fundo azul, acrílico cristal e fechadura com chave.',
    image: '/13facas.webp',
    features: ['13 Compartimentos', 'Fundo Azul', 'Fechadura Segura']
  }
];

const variations = [
  {
    name: 'Expositor 1 Faca',
    image: '/umafaca.webp'
  },
  {
    name: 'Expositor 2 Facas',
    image: '/2facas.webp'
  },
  {
    name: 'Expositor 3 Facas',
    image: '/3facas.webp'
  },
  {
    name: 'Expositor 4 Facas',
    image: '/4facas.webp'
  },
  {
    name: 'Expositor 6 Facas',
    image: '/6canivete.webp'
  }
 
];

const ProductGallery = () => {
  const openPurchaseLink = (productName?: string) => {
    const message = productName 
      ? `Olá! Gostaria de saber mais sobre o ${productName}.`
      : 'Olá! Gostaria de saber mais sobre os expositores premium para facas.';
    window.open(`https://wa.me/554791334961?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="products" className="py-16 sm:py-20 bg-neutral-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Nossa Coleção Premium
          </h2>
          <p className="font-inter text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-2">
            Expositores artesanais com preços especiais. Cada modelo é único e feito sob medida.
          </p>
        </motion.div>

        {/* Main Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {mainProducts.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-900 rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-2xl group border border-neutral-700"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 sm:h-64 object-contain group-hover:scale-110 transition-transform duration-500 bg-neutral-800"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 bg-amber-600 text-black px-3 py-1 rounded-full font-bold text-sm">
                  {product.price}
                </div>
              </div>
              
              <div className="p-4 sm:p-6">
                <h3 className="font-playfair text-lg sm:text-xl font-bold text-white mb-2 leading-tight">
                  {product.name}
                </h3>
                <p className="font-inter text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
                  {product.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="bg-amber-600/20 text-amber-400 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <button
                  onClick={() => openPurchaseLink(product.name)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base hover:shadow-lg"
                >
                  Comprar Agora
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Variations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-black rounded-2xl p-6 sm:p-8"
        >
          <h3 className="font-playfair text-xl sm:text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            + 10 Variações Compactas
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {variations.map((variation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-neutral-800 p-3 sm:p-4 rounded-xl text-center hover:bg-amber-600 hover:text-black transition-all duration-300 cursor-pointer border border-neutral-700 group"
                onClick={() => openPurchaseLink(variation.name)}
              >
                <div className="w-full h-16 sm:h-20 bg-neutral-700 rounded-lg mb-3 overflow-hidden group-hover:bg-black/20 transition-colors duration-300">
                  <img 
                    src={variation.image} 
                    alt={variation.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 bg-neutral-800"
                  />
                </div>
                <p className="font-inter text-xs sm:text-sm font-medium">{variation.name}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={() => openPurchaseLink()}
              className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base hover:shadow-lg"
            >
              Ver Todos os Modelos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;