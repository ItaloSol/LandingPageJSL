'use client';
import { products } from '@/data/products';
import ProductCard from './ProductCard';

export default function ProductGallery() {
  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
            Nossa Coleção
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Facas
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              {' '}Artesanais
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cada peça é única, forjada com técnicas tradicionais e materiais premium. 
            Descubra nossa coleção exclusiva de facas artesanais.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl border border-amber-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Não encontrou o que procura?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Criamos facas personalizadas sob medida. Entre em contato conosco 
            para discutir seu projeto especial.
          </p>
          <button 
            onClick={() => {
              const phoneNumber = "5511999999999";
              const message = "Olá! Gostaria de encomendar uma faca personalizada!";
              const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Solicitar Projeto Personalizado
          </button>
        </div>
      </div>
    </section>
  );
}