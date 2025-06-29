import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useAnalytics } from '../hooks/useAnalytics';

// First, update the mainProducts array structure:
const mainProducts = [
  {
    name: 'Expositor Artesanal Facas 26 Compartimentos Suporte Faca',
    price: 'R$ 1.692,82',
    description: 'Caixa em madeira com porta, iluminação LED, ideal para coleções abertas.',
    image: '/26FACAS.webp',
    features: ['26 Compartimentos'],
    whatsappMessage: 'Olá! Tenho interesse no Expositor Artesanal para 26 Facas. Pode me enviar mais detalhes sobre este modelo, incluindo dimensões, opções de personalização e prazo de entrega?'
  },
  {
    name: 'Suporte Para Facas De Madeira Expositor 13 Facas',
    price: 'R$ 1.084,00',
    description: 'Porta em acrílico cristal resistente, iluminação LED.',
    image: '/8FACAS.webp',
    features: ['13 Compartimentos'],
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o Expositor para 13 Facas. Pode me informar sobre as opções de madeira, sistema de iluminação LED e possibilidades de customização?'
  },
  {
    name: 'Expositor Para Facas De Churrasco Suporte Para 8 Facas',
    price: 'R$ 688,00',
    description: 'Suporte para 8 facas, iluminação LED.',
    image: '/8faquinhas.webp',
    features: ['8 Compartimentos'],
    whatsappMessage: 'Olá! Tenho interesse no Expositor para 8 Facas de Churrasco. Pode me enviar informações sobre este modelo, incluindo preço, materiais utilizados e tempo de produção?'
  }
];

// Then update the variations array:
const variations = [
  {
    name: 'Expositor 1 Faca',
    image: '/umafaca.webp',
    whatsappMessage: 'Olá! Gostaria de um orçamento para o Expositor Individual (1 faca). Pode me enviar detalhes sobre este modelo compacto e suas opções de personalização?'
  },
  {
    name: 'Expositor 2 Facas',
    image: '/2facas.webp',
    whatsappMessage: 'Olá! Tenho interesse no Expositor para 2 Facas. Pode me informar sobre as dimensões, materiais e preço deste modelo?'
  },
  {
    name: 'Expositor 3 Facas',
    image: '/3facas.webp',
    whatsappMessage: 'Olá! Gostaria de saber mais sobre o Expositor para 3 Facas. Pode me enviar informações sobre este modelo e suas características?'
  },
  {
    name: 'Expositor 4 Facas',
    image: '/4facas.webp',
    whatsappMessage: 'Olá! Tenho interesse no Expositor para 4 Facas. Pode me enviar detalhes sobre dimensões, acabamento e prazo de entrega?'
  },
  {
    name: 'Expositor 6 Facas',
    image: '/6canivete.webp',
    whatsappMessage: 'Olá! Gostaria de um orçamento para o Expositor de 6 Facas/Canivetes. Pode me informar sobre as especificações e opções disponíveis?'
  }
];

const ProductGallery = () => {
  const { trackProductView, trackWhatsAppClick, trackPurchaseIntent } = useAnalytics();

  // Update the openPurchaseLink function for main products:
  const openProductWhatsApp = (product: typeof mainProducts[0]) => {
    trackWhatsAppClick('product_details');
    trackProductView(product.name, 'premium');
    trackPurchaseIntent(product.name);
    
    window.open(`https://wa.me/554791334961?text=${encodeURIComponent(product.whatsappMessage)}`, '_blank');
  };

  // Function for variation products:
  const openVariationWhatsApp = (variation: typeof variations[0]) => {
    trackWhatsAppClick('product_variation');
    trackProductView(variation.name, 'compact');
    trackPurchaseIntent(variation.name);
    
    window.open(`https://wa.me/554791334961?text=${encodeURIComponent(variation.whatsappMessage)}`, '_blank');
  };

  const handleViewAllModels = () => {
    trackWhatsAppClick('view_all_models');
    const message = 'Olá! Gostaria de ver todos os modelos de expositores disponíveis. Pode me mostrar o catálogo completo com preços e opções de personalização?';
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
                <div className="absolute inset-0 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Price badge */}
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
                  onClick={() => openProductWhatsApp(product)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base hover:shadow-lg"
                >
                  <MessageCircle size={16} />
                  Solicitar Informações
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
            Modelos Compactos Disponíveis
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
            {variations.map((variation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-neutral-800 p-3 sm:p-4 rounded-xl text-center hover:bg-green-600 hover:text-white transition-all duration-300 cursor-pointer border border-neutral-700 group"
                onClick={() => openVariationWhatsApp(variation)}
              >
                <div className="w-full h-16 sm:h-20 bg-neutral-700 rounded-lg mb-3 overflow-hidden group-hover:bg-black/20 transition-colors duration-300">
                  <img 
                    src={variation.image} 
                    alt={variation.name}
                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 bg-neutral-800"
                  />
                </div>
                <p className="font-inter text-xs sm:text-sm font-medium mb-2 text-gray-300 group-hover:text-white">
                  {variation.name}
                </p>
                <div className="flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <MessageCircle size={12} />
                  <span className="text-xs">Consultar</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-6 sm:mt-8">
            <button
              onClick={handleViewAllModels}
              className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base hover:shadow-lg flex items-center gap-2 mx-auto"
            >
              <MessageCircle size={16} />
              Ver Todos os Modelos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;