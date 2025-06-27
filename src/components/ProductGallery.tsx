import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// First, update the mainProducts array structure:
const mainProducts = [
  {
    name: 'Expositor Artesanal Facas 26 Compartimentos Suporte Faca',
    price: 'R$ 1.692,82',
    description: 'Caixa em madeira sem porta, iluminação LED, ideal para coleções abertas.',
    image: '/26FACAS.webp',
    features: ['26 Compartimentos'],
    url: 'https://produto.mercadolivre.com.br/MLB-3787229779-expositor-artesanal-facas-26-compartimentos-suporte-faca-_JM#origin%3Dshare%26sid%3Dshare'
  },
  {
    name: 'Suporte Para Facas De Madeira Expositor 13 Facas',
    price: 'R$ 1.084,00',
    description: 'Porta em policarbonato cristal resistente, iluminação LED.',
    image: '/13FACAS.webp',
    features: ['13 Compartimentos'],
    url: 'https://produto.mercadolivre.com.br/MLB-3169333131-suporte-para-facas-de-madeira-expositor-13-facas-_JM?attributes=COLOR_SECONDARY_COLOR%3ARnVuZG8gVmVybWVsaG8%3D#origin%3Dshare%26sid%3Dshare'
  },
  {
    name: 'Expositor Para Facas De Churrasco Suporte Para 8 Facas',
    price: 'R$ 688,00',
    description: 'Suporte para 8 facas, iluminação LED.',
    image: '/8FACAS.webp',
    features: ['8 Compartimentos'],
    url: 'https://produto.mercadolivre.com.br/MLB-3452779429-expositor-para-facas-de-churrasco-suporte-para-8-facas-_JM#origin%3Dshare%26sid%3Dshare'
  }
];

// Then update the variations array:
const variations = [
  {
    name: 'Expositor 1 Faca',
    image: '/umafaca.webp',
    url: 'https://produto.mercadolivre.com.br/MLB-3984367425-porta-facas-de-churrasco-em-madeira-mdf-e-acrilico-_JM?pdp_filters=condition%3Anew%7Cofficial_store%3A118322%7Cadult_content%3Ayes%7Ccategory%3AMLB1574#polycard_client=mshops-appearance-api&source=eshops&tracking_id=9dde31df-41fd-4c2b-82c3-be05f28e4517' // Add URL for each variation
  },
  {
    name: 'Expositor 2 Facas',
    image: '/2facas.webp',
    url: 'https://produto.mercadolivre.com.br/MLB-4814623478-suporte-expositor-de-facas-duplo-artesanais-facas-e-chaira-_JM?pdp_filters=condition%3Anew%7Cofficial_store%3A118322%7Cadult_content%3Ayes%7Ccategory%3AMLB1574#polycard_client=mshops-appearance-api&source=eshops&tracking_id=9dde31df-41fd-4c2b-82c3-be05f28e4517'
  },
  {
    name: 'Expositor 3 Facas',
    image: '/3facas.webp',
    url: 'https://produto.mercadolivre.com.br/MLB-3754970677-suporte-para-03-facas-expositor-de-facas-e-chaira-artesanal-_JM?pdp_filters=condition%3Anew%7Cofficial_store%3A118322%7Cadult_content%3Ayes%7Ccategory%3AMLB1574#polycard_client=mshops-appearance-api&source=eshops&tracking_id=9dde31df-41fd-4c2b-82c3-be05f28e4517'
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
  // Update the openPurchaseLink function:
  const openPurchaseLink = (productName?: string, productUrl?: string) => {
    if (productUrl) {
      window.open(productUrl, '_blank'); // Open in new tab for external links
    } else {
      const message = productName 
        ? `Olá! Gostaria de saber mais sobre o ${productName}.`
        : 'Olá! Gostaria de saber mais sobre os expositores premium para facas.';
      window.open(`https://wa.me/554791334961?text=${encodeURIComponent(message)}`, '_blank');
    }
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
                <div className="absolute inset-0  group-hover:bg-black/20 transition-colors duration-300"></div>
               
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
                  onClick={() => openPurchaseLink(product.name, product.url)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base hover:shadow-lg"
                >
                  Ver Detalhes
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
                onClick={() => openPurchaseLink(variation.name, variation.url)}
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
            <a
            rel='noopener noreferrer'
            target='_blank'
            href='https://www.mercadolivre.com.br/loja/jsl-artesanatos#from=share_eshop'
              className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base hover:shadow-lg"
            >
              Ver Todos os Modelos
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductGallery;