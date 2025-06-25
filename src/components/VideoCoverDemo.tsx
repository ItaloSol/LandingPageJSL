import React from 'react';
import { motion } from 'framer-motion';
import VideoCover from './VideoCover';

const VideoCoverDemo = () => {
  return (
    <section className="py-20 bg-neutral-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Capa de Vídeo YouTube
            <span className="block text-amber-400">Formato 9:16</span>
          </h2>
          <p className="font-inter text-xl text-gray-300 max-w-3xl mx-auto">
            Design profissional otimizado para YouTube Shorts e formato vertical, 
            usando a imagem "13facas.webp" como base visual.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Cover Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <VideoCover />
          </motion.div>

          {/* Specifications and Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Technical Specs */}
            <div className="bg-black rounded-xl p-6 border border-neutral-700">
              <h3 className="font-playfair text-2xl font-bold text-white mb-6">
                Especificações
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="font-inter text-gray-300">Proporção:</span>
                  <span className="font-inter text-white font-semibold">9:16 (Vertical)</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="font-inter text-gray-300">Imagem Base:</span>
                  <span className="font-inter text-white font-semibold">13facas.webp</span>
                </div>
                
                <div className="flex justify-between items-center py-3 border-b border-neutral-700">
                  <span className="font-inter text-gray-300">Resolução:</span>
                  <span className="font-inter text-white font-semibold">1080x1920px</span>
                </div>
                
                <div className="flex justify-between items-center py-3">
                  <span className="font-inter text-gray-300">Plataforma:</span>
                  <span className="font-inter text-white font-semibold">YouTube Shorts</span>
                </div>
              </div>
            </div>

            {/* Title Information */}
            <div className="bg-amber-600/10 border border-amber-600/30 rounded-xl p-6">
              <h4 className="font-inter font-semibold text-amber-400 mb-4">
                Título do Vídeo
              </h4>
              <p className="font-playfair text-xl text-white font-bold leading-tight mb-3">
                "Personalização de Expositores de Facas Artesanais"
              </p>
              <ul className="space-y-2 text-sm">
                <li className="font-inter text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Fonte clara e legível com contraste otimizado
                </li>
                <li className="font-inter text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Posicionamento centralizado para máxima visibilidade
                </li>
                <li className="font-inter text-gray-300 flex items-center gap-2">
                  <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                  Hierarquia visual com destaque em âmbar
                </li>
              </ul>
            </div>

            {/* Design Elements */}
            <div className="bg-neutral-800 rounded-xl p-6 border border-neutral-700">
              <h4 className="font-inter font-semibold text-white mb-4">
                Elementos de Design
              </h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <p className="font-inter text-gray-300">✓ Botão play proeminente</p>
                  <p className="font-inter text-gray-300">✓ Gradiente para legibilidade</p>
                  <p className="font-inter text-gray-300">✓ Badge de duração</p>
                </div>
                <div className="space-y-2">
                  <p className="font-inter text-gray-300">✓ Elementos decorativos sutis</p>
                  <p className="font-inter text-gray-300">✓ Cores da marca</p>
                  <p className="font-inter text-gray-300">✓ Design limpo e profissional</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Usage Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-black rounded-xl p-8 border border-neutral-700 max-w-4xl mx-auto">
            <h4 className="font-playfair text-2xl font-bold text-white mb-4">
              Otimizado para Conversão
            </h4>
            <p className="font-inter text-gray-300 leading-relaxed mb-6">
              Esta capa foi projetada especificamente para o formato 9:16 do YouTube Shorts, 
              utilizando a imagem "13facas.webp" como elemento visual principal. O título 
              "Personalização de expositores de facas artesanais" está posicionado 
              estrategicamente para máxima legibilidade e impacto visual.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full font-medium">
                Mobile-First
              </span>
              <span className="bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full font-medium">
                Alta Conversão
              </span>
              <span className="bg-amber-600/20 text-amber-400 px-4 py-2 rounded-full font-medium">
                Design Profissional
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoCoverDemo;